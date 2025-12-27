import React, { useState } from 'react';
import './App.css';
import logoImg from './logo.jpeg'; // Hapa tunaichukua picha yako

function App() {
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
    alert("Hongera " + formData.fullName + "! Karibu kwenye mradi wa X-FATA & KAYANZA.");
  };

  return (
    <div className="form-container">
      {/* Hapa ndipo Logo inapoingia */}
      <img src={logoImg} alt="X-Fata & Kayanza Logo" className="logo-img" />

      <h1>OUR COMMUNITY</h1>
      <p>Join our tech community</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <button type="submit">SIGN UP NOW</button>
      </form>
    </div>
  );
}

export default App;