import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createUserWithEmailAndPassword, sendEmailVerification, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import FormContent from './FormContent';
import Link from 'next/link';
import { auth, db } from '../../../../utils/firebase'

const Register = () => {
  const [regError, setRegError] = useState('');
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [isConfirmationSent, setIsConfirmationSent] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleRegistration = async (email, password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,}$/;
  
    try {
      if (!passwordRegex.test(password)) {
        setRegError(
          'Password should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number'
        );
        throw new Error(
          'Password should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number'
        );
      }
  
      const auth = getAuth(); // Use getAuth without passing the app instance
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      console.log('Registration successful', userCredential.user);
      setRegError(''); // Clear any previous registration error
  
      // Send email verification
      await sendEmailVerification(auth.currentUser);
      setIsConfirmationSent(true);
      setEmailAddress(email);
      setIsEmailConfirmed(auth.currentUser.emailVerified); // Update the email verification status
  
      // Store the user's selected role in the database
      const docRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(docRef, {
        role: selectedRole,
      });
  
      // Email verification sent
      // Redirect the user or display a success message
    } catch (err) {
      console.log('Registration error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setRegError('Email already in use. Try logging in or resetting your password.');
      } else if (err.code === 'auth/weak-password') {
        setRegError('Password should be at least 6 characters');
      } else {
        setRegError(
          'Password should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number'
        );
      }
    }
  };

  const handleSubmit = async (email, password) => {
    handleRegistration(email, password);
  };

  return (
    <div className="form-inner">
      {isConfirmationSent ? (
        <div className="text-center">
          <h3>Please confirm your email</h3>
          <p>
            A confirmation email has been sent to <strong>{emailAddress}</strong>. If this is not your email, please Retry Registration
          </p>
          <br />
          <p>Please check your inbox and follow the instructions to verify your account.</p>
          <br />
          <p>Check spam/Junk folders. Confirmation Link will expire in 15 minutes</p>
          <div className="d-flex my-2 gap-1">
            <button className="theme-btn btn-style-four">
              <Link
                href="#"
                className="call-modal login"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                data-bs-target="#loginPopupModal"
              >
                Already Confirmed? LogIn
              </Link>
            </button>
            <button className="theme-btn btn-style-two" onClick={() => setIsConfirmationSent(false)}>
              Retry Registration
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Create a Free Account</h3>
          <Tabs>
            <div className="form-group register-dual">
              <TabList className="btn-box row">
                <Tab className="col-lg-6 col-md-12" onClick={() => setSelectedRole('candidate')}>
                  <button className="theme-btn btn-style-four">
                    <i className="la la-user"></i> Candidate
                  </button>
                </Tab>
                <Tab className="col-lg-6 col-md-12" onClick={() => setSelectedRole('employer')}>
                  <button className="theme-btn btn-style-four">
                    <i className="la la-briefcase"></i> Employer
                  </button>
                </Tab>
              </TabList>
            </div>

            <TabPanel>
              <FormContent onSubmit={handleSubmit} regError={regError} />
            </TabPanel>

            <TabPanel>
              <FormContent onSubmit={handleSubmit} regError={regError} />
            </TabPanel>
          </Tabs>

          <div className="bottom-box">
            <div className="text">
              Already have an account?{' '}
              <Link
                href="#"
                className="call-modal login"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                data-bs-target="#loginPopupModal"
              >
                LogIn
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
