import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import firebase from '../../../../utils/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from './FormContent';
import Link from 'next/link';
import LoginWithSocial from './LoginWithSocial';

const Register = () => {
  const handleRegistration = async (email, password) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // User registration successful, you can perform additional actions here
      console.log('Registration successful', userCredential.user);
    } catch (err) {
      console.log('Registration error:', err);
    }
  };

  const handleSubmit = async (email, password) => {
    handleRegistration(email, password);
  };

  return (
     <div className="form-inner">
      <h3>Create a Free Account</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <Form onSubmit={handleRegistration} />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <Form onSubmit={handleRegistration} />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

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
        <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;
