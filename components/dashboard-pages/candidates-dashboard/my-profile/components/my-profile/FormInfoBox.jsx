import Select from "react-select";
import { useState, useEffect } from "react";
import firebase from 'firebase/app'
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from "../../../../../../utils/firebase";
import { getAuth } from 'firebase/auth';
import catOptions from "../../../../../../data/jobCategories";
import languages from "../../../../../../data/languages";

const FormInfoBox = ({ avatarUrl }) => {

  const [candidate, setCandidate] = useState({
    destination: {min:100 , max:0},
    id: '',
    avatar:'',
    name: '',
    designation: '',
    location: '',
    hourlyRate: '',
    tags: [],
    gender:"",
    experience: '',
    age: '',
    educationLevels: "",
    languages: [],
    allowInSearch: 'Yes',
    description: '',
  });
        //handle state for notifications
        const [notification, setNotification] = useState('');
        const [notificationType, setNotificationType] = useState('');
   console.log("avatarUrl " + avatarUrl) 

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        console.log("User ID from onAuthStateChanged:", user.uid);
        // Fetch the candidate's information here to prepopulate the form
        const docRef = doc(db, 'candidates', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Candidate data:", docSnap.data());
          setCandidate(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("User not authenticated from onAuthStateChanged.");
      }
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCandidate = {
      ...candidate,
      avatar: avatarUrl ,  // Set the avatar to the passed prop
    };

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Reference to your 'candidates' collection with the user's UID as the document ID
      const docRef = doc(db, 'candidates', user.uid);

      try {
        // Write or overwrite the user's data
        await setDoc(docRef, updatedCandidate, { merge: true }); // Use updatedCandidate here instead of candidate

        console.log("Data saved successfully.");
        setNotification('Saved successfully.');
        setNotificationType('alert alert-success')
        setCandidate({});
      } catch (error) {
        console.error("Error writing document: ", error);
        setNotification('Error saving Contact Info.');
        setNotificationType('alert alert-danger')
      }
    }
}

  return (
    <form action="#" className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input
            type="text"
            value={candidate.name}
            placeholder="Joe Blogs"
            onChange={e => setCandidate(prev => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Current Job Title </label>
          <input
            type="text"
            value={candidate.designation}
            placeholder="Apprentice Carpenter"
            onChange={e => setCandidate(prev => ({ ...prev, designation: e.target.value }))}
            required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Location</label>
          <input
            type="text"
            value={candidate.location}
            onChange={e => setCandidate(prev => ({ ...prev, location: e.target.value }))}
            placeholder="New York, NY"
          required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Hourly $ Rate (Leave blank if you prefer not to disclose)</label>
          <input
            type="number"
            value={candidate.hourlyRate}
            onChange={e => setCandidate(prev => ({ ...prev, hourlyRate: e.target.value }))}
          // required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select
            type="text"
            value={candidate.gender}
            onChange={e => setCandidate(prev => ({ ...prev, gender: e.target.value }))}
            required
            defaultValue="Male"
          >
            <option value = "Male"> Male</option>
            <option value = "Female"> Female</option>
            <option value = "Other"> Other</option>
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input
            type="text"
            value={candidate.experience}
            placeholder="5-10 Years"
            onChange={e => setCandidate(prev => ({ ...prev, experience: e.target.value }))}
          // required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <select
            value={candidate.age}
            onChange={e => setCandidate(prev => ({ ...prev, age: e.target.value }))}
            className="chosen-single form-select"
           required
          >
            <option value="16 - 20 Years">16 - 20 Years</option>
            <option value="20 - 24 Years">20 - 24 Years</option>
            <option value="25 - 29 Years">25 - 29 Years</option>
            <option value="30 - 34 Years">30 - 34 Years</option>
            <option value="35 - 39 Years">35 - 39 Years</option>
            <option value="40+ Years">40+ Years</option>
            <option value="Undisclosed">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Highest Level of Education</label>
          <select
            value={candidate.educationLevels}
            className="chosen-single form-select"
            onChange={e => setCandidate(prev => ({ ...prev, educationLevels: e.target.value}))}
          required
          >
        <option value="">Select Education Level</option>
        <option value="Certificate">Certificate</option>
        <option value="Associate Degree">Associate Degree</option>
        <option value="Bachelors Degree">Bachelors Degree</option>
        <option value="Masters Degree">Masters Degree</option>
        <option value="Doctorate Degree">Doctorate Degree</option>
        <option value="Other">Other</option>
        </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <Select
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            options={languages}
            value= {candidate.languages}
            onChange={e => setCandidate(prev => ({ ...prev, languages: e}))}
            
            
            
                        placeholder="e.g English, Spanish"
           required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Tag your profile (Select all that apply) </label>
          <Select
            value={candidate.tags}
            isMulti
            name="tags"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={e => setCandidate(prev => ({ ...prev, tags: e}))}
          // required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search & Listing</label>
          <select
            value={candidate.allowInSearch}
            onChange={e => setCandidate(prev => ({ ...prev, allowInSearch: e.target.value }))}
            className="chosen-single form-select"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label>Description (Tell us about yourself)</label>
          <textarea
            value={candidate.description}
            onChange={e => setCandidate(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Tell us about yourself"
          ></textarea>
        </div>
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

export default FormInfoBox;
