import { useState, useEffect } from "react";
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from "../../../../../utils/firebase";
import { getAuth } from 'firebase/auth';

const SocialNetworkBox = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    linkedin: '',
    googlePlus: ''
  });
      //handle state for notifications
      const [notification, setNotification] = useState('');
      const [notificationType, setNotificationType] = useState('');

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            console.log("User ID from onAuthStateChanged:", user.uid);

            const docRef = doc(db, 'candidates', user.uid);
            getDoc(docRef).then(docSnap => {
                if (docSnap.exists() && docSnap.data().socialLinks) {
                    setSocialLinks(docSnap.data().socialLinks);
                }
            });
        } else {
            console.log("User not authenticated from onAuthStateChanged.");
        }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
}, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const docRef = doc(db, 'candidates', user.uid);

      try {
        await setDoc(docRef, { socialLinks }, { merge: true });
        console.log("Social links saved successfully.");
        setNotification('Saved successfully.')
          setNotificationType('alert alert-success');
      } catch (error) {
        console.error("Error writing document: ", error);
        setNotification('Error saving social Info.');
        setNotificationType('alert alert-danger')
      }
           //Clear notification after 3 seconds
           setTimeout(() => {
            setNotification('');
            setNotificationType('');
          }, 5000);
        
    }
  
  }

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Facebook</label>
          <input
            type="text"
            name="name"
            placeholder="www.facebook.com/your-profile"
            value={socialLinks.facebook}
            onChange={e => setSocialLinks(prev => ({ ...prev, facebook: e.target.value }))}
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Twitter</label>
          <input type="text" name="name" placeholder="" value={socialLinks.twitter}
            onChange={e => setSocialLinks(prev => ({ ...prev, twitter: e.target.value }))}
          />

        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Linkedin</label>
          <input type="text" name="name" placeholder="" value={socialLinks.linkedin}
            onChange={e => setSocialLinks(prev => ({ ...prev, linkedin: e.target.value }))}
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Google Plus</label>
          <input type="text" name="name" placeholder="" value={socialLinks.googlePlus}
            onChange={e => setSocialLinks(prev => ({ ...prev, googlePlus: e.target.value }))}
          />
        </div>

        {/* <!-- Input --> */}
        {notification && 
      <div className={`notification ${notificationType}`} role='alert'>{notification}</div>} 
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialNetworkBox;
