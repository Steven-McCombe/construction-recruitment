import React, { useState } from 'react';

const FormContent = ({ onSubmit, regError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="username" placeholder="Username" value={email} onChange={handleEmailChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password-field"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          name="password"
          placeholder="Password"
          required
        />
      </div>

      {regError && <span className="error-label text-red ">{regError}</span>}
      {errorMessage && <span className="error-label text-red">{errorMessage}</span>}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default FormContent;
