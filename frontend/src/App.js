import React, { useState } from 'react';
import './App.css';
import logoImg from './logo.jpeg';
import { supabase } from './supabaseClient';

function App() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isRegistering) {
      // SEHEMU YA KUJISAJILI (Registration)
      // Nimetuma data moja kwa moja bila mabano ya [] ili kuzuia "Array Error"
      const { error } = await supabase
        .from('users')
        .insert({
          name: formData.fullName,
          email: formData.email,
          password: formData.password
        });

      if (error) {
        alert("Kuna tatizo: " + error.message);
      } else {
        alert("Hongera " + formData.fullName + "! Data zako zimehifadhiwa kwa Kayanza.");
      }
    } else {
      // SEHEMU YA LOGIN
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', formData.email)
        .eq('password', formData.password)
        .single();

      if (data) {
        alert("Karibu tena " + data.name + "!");
      } else {
        alert("Email au Password ni makosa!");
      }
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <img src={logoImg} alt="Logo" className="logo-img" />
      <h1>{isRegistering ? 'SIGN UP' : 'LOGIN'}</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit" disabled={loading}>
          {loading ? 'WAIT...' : (isRegistering ? 'REGISTER' : 'LOG IN')}
        </button>
      </form>

      <p style={{ marginTop: '20px', cursor: 'pointer', color: '#4cc9f0' }}
        onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Tayari una akaunti? Login hapa" : "Huna akaunti? Jisajili hapa"}
      </p>
    </div>
  );
}

export default App;