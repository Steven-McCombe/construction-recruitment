// .\components\common\form\login\FormContent.jsx
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

const FormContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(); // Assuming Firebase has already been initialized

      // Sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Check if the user's email is verified
      if (!userCredential.user.emailVerified) {
        setErrorMessage('Please verify your email before logging in.');
        return;
      }

      // User is logged in and email is verified
      console.log('Login successful:', userCredential.user);
      setLoginSuccess(true);
    } catch (error) {
      // Handle login errors
      console.log('Login error:', error.code, error.message);

      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setErrorMessage('Invalid username or password.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="form-inner">
      <h3>Login</h3>
      

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" value={email} onChange={handleEmailChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
        </div>
        {isLoginSuccess ? (
          <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
          <strong>Success</strong> You are now logged in
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
          ) : (
          errorMessage && 
          <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
          <strong>Error:</strong> <span className="error-label text-red">{errorMessage}</span>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        
          )}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit" name="log-in">
            Log In
          </button>
        </div>
      </form>

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{' '}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormContent
