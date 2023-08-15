import { useState, useEffect } from "react";
import firebase from '../../../../../../utils/firebase'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {resizeImage} from '../../../../../../utils/helpers/profileImageResize'

const LogoUpload = ({setAvatarUrl}) => {
    const [logImg, setLogoImg] = useState("");
    const [user, setUser] = useState(null);

useEffect(() => {
    const auth = getAuth();
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
            setUser(currentUser);

            // Check if there's already an image at the user's path
            const storage = getStorage();
            const logoRef = ref(storage, `images/profiles/resource/${currentUser.uid}.png`);
            
            try {
                const existingUrl = await getDownloadURL(logoRef);
                setAvatarUrl(existingUrl);  // set existing image URL to avatarUrl state
            } catch (error) {
                if (error.code === 'storage/object-not-found') {
                    console.log("No existing image for this user.");
                } else {
                    console.error("Error getting download URL:", error);
                }
            }
        } else {
            console.error('No user signed in.');
        }
    });
    
    // Cleanup the listener on component unmount
    return () => unsubscribe();

}, []); // Run this useEffect only once when the component mounts


const logImgHandler = async (e) => {
    setLogoImg(e.target.files[0]);
    const file = e.target.files[0];

       // Resize the image using our helper function
       const resizedImageBlob = await resizeImage(file, 330, 300);

    // Check if the user is authenticate
    if (!user) {
        console.error('User is not authenticated.');
        return;
    }

    const uid = user.uid;
    const storage = getStorage();
    const logoRef = ref(storage, `images/profiles/resource/${uid}.png`);
    
    const uploadTask = uploadBytesResumable(logoRef, resizedImageBlob);
    
    uploadTask.on('state_changed', 
        (snapshot) => {
            // Handle the progress of the upload here
            // You can get the percentage completed with: 
            // (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, 
        (error) => {
            // Handle the upload error here
            console.error('Error uploading image:', error);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setAvatarUrl(downloadURL); 
            });
        }
    );
};


    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={logImgHandler}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logImg !== "" ? logImg.name : "Browse Logo"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>
            </div>
        </>
    );
};

export default LogoUpload;
