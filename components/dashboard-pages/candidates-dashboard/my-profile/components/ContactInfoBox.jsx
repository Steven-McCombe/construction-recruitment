import { useState, useEffect } from "react";
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from "../../../../../utils/firebase";
import { getAuth } from 'firebase/auth';

const ContactInfoBox = () => {
    const [contactInfo, setContactInfo] = useState({
      phone: '',
      email: '',
      address1: '',
      address2: '',
      cityStateZip: ''
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
                  if (docSnap.exists() && docSnap.data().contactInfo) {
                      setContactInfo(docSnap.data().contactInfo);
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
          await setDoc(docRef, { contactInfo }, { merge: true });
          console.log("Contact Info saved successfully.");
          setNotification('Saved successfully.')
          setNotificationType('alert alert-success');
        } catch (error) {
          console.error("Error writing document: ", error);
          setNotification('Error saving Contact Info.');
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
          <label>Cell</label>
          <input
          type="number"
          value={contactInfo.phone}
          onChange={e => setContactInfo (prev => ({...prev, phone: e.target.value}))}
          required>
          </input>
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email</label>
          <input
          type="email"
          value={contactInfo.email}
          onChange={e => setContactInfo (prev => ({...prev, email: e.target.value}))}
          required>
          </input>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Address Line 1</label>
          <input
            type="text"
            value={contactInfo.address1}
            onChange={e => setContactInfo (prev => ({...prev, address1: e.target.value}))}
            placeholder="110 E 92nd St #3"
            required
          />
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label>Address Line 2</label>
          <input
            type="text"
            value={contactInfo.address2}
            onChange={e => setContactInfo (prev => ({...prev, address2: e.target.value}))}
            placeholder=""
            required
          />
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label>CIty, State, Zip</label>
          <input
            type="text"
            value={contactInfo.cityStateZip}
            onChange={e => setContactInfo (prev => ({...prev, cityStateZip: e.target.value}))}
            placeholder="New York, NY 10028"
            required
          />
        </div>
        {/* <!-- Input --> */}
        {notification && 
      <div className={`notification ${notificationType}`} role='alert'>{notification}</div>} 
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>

    
  );
};

export default ContactInfoBox;
