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
    avatar: '',
    name: '',
    designation: '',
    location: '',
    hourlyRate: '',
    tags: [],
    email: '',
    experience: '',
    age: '',
    educationLevels: '',
    languages: [],
    allowInSearch: 'Yes',
    description: '',
  });

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
      avatar: avatarUrl // Set the avatar to the passed prop
    };
    // Ensure the user is logged in
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
    }

    // Reference to your 'candidates' collection with the user's UID as the document ID
    const docRef = doc(db, 'candidates', user.uid);

    try {
      // Write or overwrite the user's data
      await setDoc(docRef, candidate, { merge: true }); // The merge option ensures data fields not provided in the candidate object are retained in Firestore
      console.log("Data saved successfully.");
      setCandidate({});
    } catch (error) {
      console.error("Error writing document: ", error);
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
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Current Job Title</label>
          <input
            type="text"
            value={candidate.designation}
            placeholder="Apprentice Carpenter"
            onChange={e => setCandidate(prev => ({ ...prev, designation: e.target.value }))}
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Location</label>
          <input
            type="text"
            value={candidate.location}
            onChange={e => setCandidate(prev => ({ ...prev, location: e.target.value }))}
            placeholder="New York, NY"
          // required
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
          <label>Email address</label>
          <input
            type="text"
            value={candidate.email}
            onChange={e => setCandidate(prev => ({ ...prev, email: e.target.value }))}
            placeholder="creativelayers@example.com"
          // required
          />
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
          // required
          >
            <option value="">Select Age Range</option>
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
          <label>Education Levels</label>
          <input
            type="text"
            value={candidate.educationLevels}
            placeholder="High School"
            onChange={e => setCandidate(prev => ({ ...prev, educationLevels: e.target.value }))}
          // required
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <Select
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            options={languages}
            value={candidate.languages}
            onChange={e => setCandidate(prev => ({ ...prev, languages: e.map(item => item.value) }))}
            placeholder="e.g English, Spanish"
          // required
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
    onChange={e => setCandidate(prev => ({ ...prev, tags: e.map(item => item.value) }))}
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
          <label>Description (Tell us about yourself.)</label>
          <textarea
            value={candidate.description}
            onChange={e => setCandidate(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Ever since I can remember, I've been fascinated by the beauty and strength of wood. This passion led me to begin an apprenticeship in 2022, guided by the expertise of Master Carpenter John Smith. Every day, I am privileged to dive deep into the world of carpentry, exploring the balance between traditional techniques and modern design. My hands-on experiences, from crafting custom furniture to creating detailed wood carvings, have cemented my respect for this ancient art form.

              Under John's mentorship, I've learned not only the technical aspects of the craft but also the values of patience, precision, and sustainability. I'm particularly interested in using sustainable materials and practices, ensuring that our beloved craft leaves a minimal footprint on the environment. Outside the workshop, I love venturing into nature, drawing inspiration from the world around me to bring into my work. I believe that every piece of wood has a story to tell, and it's my mission to bring that story to life through my creations."
          ></textarea>
        </div>
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
