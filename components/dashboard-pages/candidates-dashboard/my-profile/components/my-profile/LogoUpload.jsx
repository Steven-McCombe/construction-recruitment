import { useState, useEffect } from "react";
import firebase from '../../../../../../utils/firebase'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const LogoUpload = () => {
    const [logImg, setLogoImg] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        
        // Set an observer on the Auth object to get the current user's sign-in status.
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                console.error('No user signed in.');
            }
        
    
        // Cleanup the listener on component unmount
        return () => unsubscribe();
    
    }, []); // Run this useEffect only once when the component mounts
    

        // Cleanup the listener on component unmount
        return () => unsubscribe();

    }, []); // Run this useEffect only once when the component mounts

const logImgHandler = async (e) => {
    console.dir(user)
    setLogoImg(e.target.files[0]);
    const file = e.target.files[0];

    // Check if the user is authenticate
    if (!user) {
        console.error('User is not authenticated.');
        return;
    }

    const uid = user.uid;
    const storage = getStorage();
    const logoRef = ref(storage, `images/profiles/resource/${uid}.png`);
    
    const uploadTask = uploadBytesResumable(logoRef, file);
    
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
