import React, { useState } from 'react';
import './App.css';
import logoImg from './logo.jpeg';

function App() {
  // isRegistering itakuwa TRUE kama mtumiaji anajisajili, na FALSE kama anataka ku-Login
  const [isRegistering, setIsRegistering] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      alert("Usajili wa " + formData.fullName + " umekamilika!");
    } else {
      alert("Karibu tena! Unaingia kama " + formData.email);
    }
  };

  return (
    <div className="form-container">
      <img src={logoImg} alt="X-Fata & Kayanza Logo" className="logo-img" />

      <h1>{isRegistering ? 'SIGN UP' : 'LOGIN'}</h1>
      <p>{isRegistering ? 'Join our tech community' : 'Welcome back, Engineer'}</p>

      <form onSubmit={handleSubmit}>
        {/* Jina linaonekana tu wakati wa Registration */}
        {isRegistering && (
          <div className="input-group">
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} required />
          </div>
        )}

        <div className="input-group">
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        </div>

        <button type="submit">
          {isRegistering ? 'REGISTER' : 'LOG IN'}
        </button>
      </form>

      {/* Kitufe cha kubadilisha kati ya Register na Login */}
      <p style={{ marginTop: '20px', cursor: 'pointer', color: '#4cc9f0' }}
        onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering
          ? "Already have an account? Log in here"
          : "Don't have an account? Sign up here"}
      </p>
    </div>
  );
}

export default App;