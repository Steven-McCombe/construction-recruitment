import React, { useState } from 'react';

const FormContent = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="email">Email Address</label>
        <input type="email" name="username" placeholder="Username" value={email} onChange={handleEmailChange} required />
      </div>
      {/* name */}

      <div className="form-group">
      <label htmlFor="password">Password</label>
        <input
          id="password-field"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          name="password"
          placeholder="Password"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
