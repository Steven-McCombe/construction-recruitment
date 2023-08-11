import Select from "react-select";
import { useState } from "react";
import firebase from 'firebase/app'
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../../../../../../utils/firebase";
import { getAuth } from 'firebase/auth';
const FormInfoBox = () => {

      const [candidate, setCandidate] = useState({
        avatar: '',
        name: '',
        designation: '',
        phone: '',
        email: '',
        website: '',
        currentSalary: '',
        expectedSalary: '',
        experience: '',
        age: '',
        educationLevels: '',
        languages: '',
        categories: [],
        allowInSearch: 'Yes',
        description: ''
      });
      

    const handleSubmit = async (e) => {
      e.preventDefault();
  
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
  
    const catOptions = [
      { value: "Banking", label: "Banking" },
      { value: "Digital & Creative", label: "Digital & Creative" },
      { value: "Retail", label: "Retail" },
      { value: "Human Resources", label: "Human Resources" },
      { value: "Managemnet", label: "Managemnet" },
      { value: "Accounting & Finance", label: "Accounting & Finance" },
      { value: "Digital", label: "Digital" },
      { value: "Creative Art", label: "Creative Art" },
    ];

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
            <label>Job Title</label>
            <input 
              type="text" 
              value={candidate.designation} 
              placeholder="Carpenter"
              onChange={e => setCandidate(prev => ({ ...prev, designation: e.target.value }))} 
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Phone</label>
            <input
              type="number"
              value={candidate.phone}
              onChange={e => setCandidate(prev => ({...prev, phone: e.target.value}))}
              placeholder="0 123 456 7890"
              // required
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Email address</label>
            <input
              type="text"
              value={candidate.email}
              onChange={e => setCandidate(prev => ({...prev, email: e.target.value}))}
              placeholder="creativelayers@example.com"
              // required
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Website</label>
            <input
              type="text"
              value={candidate.website}
              onChange={e => setCandidate(prev => ({...prev, website: e.target.value}))}
              placeholder="www.jerome.com"
              // required
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Experience</label>
            <input 
              type="text" 
              value={candidate.experience}
              placeholder="5-10 Years"
              onChange={e => setCandidate(prev => ({...prev, experience: e.target.value}))}
              // required
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Age</label>
            <select 
              value={candidate.age} 
              onChange={e => setCandidate(prev => ({...prev, age: e.target.value}))}
              className="chosen-single form-select" 
              // required
            >
              <option value="23 - 27 Years">23 - 27 Years</option>
              <option value="24 - 28 Years">24 - 28 Years</option>
              <option value="25 - 29 Years">25 - 29 Years</option>
              <option value="26 - 30 Years">26 - 30 Years</option>
            </select>
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Education Levels</label>
            <input 
              type="text" 
              value={candidate.educationLevels}
              placeholder="Certificate"
              onChange={e => setCandidate(prev => ({...prev, educationLevels: e.target.value}))}
              // required
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Languages</label>
            <input
              type="text"
              value={candidate.languages}
              onChange={e => setCandidate(prev => ({...prev, languages: e.target.value}))}
              placeholder="English, Turkish"
              // required
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Categories </label>
            <Select
              value={candidate.categories}
              isMulti
              name="categories"
              options={catOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={e => setCandidate(prev => ({...prev, categories: e}))}
              // required
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Allow In Search & Listing</label>
            <select 
              value={candidate.allowInSearch} 
              onChange={e => setCandidate(prev => ({...prev, allowInSearch: e.target.value}))}
              className="chosen-single form-select" 
>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group col-lg-12 col-md-12">
            <label>Description</label>
            <textarea 
              value={candidate.description}
              onChange={e => setCandidate(prev => ({...prev, description: e.target.value}))}
              placeholder="Description here..."
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
