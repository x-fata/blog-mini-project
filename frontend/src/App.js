import React, { useState } from 'react';
import './App.css';
import logoImg from './logo.jpeg';
import { supabase } from './supabaseClient';

function App() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  // Hii itatusaidia kujua kama mtu ameshaingia (Logged In)
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegistering) {
        // USAJILI
        const { data, error } = await supabase
          .from('users')
          .insert([{ name: formData.fullName, email: formData.email, password: formData.password }])
          .select();

        if (error) {
          alert("Kuna tatizo: " + error.message);
        } else {
          setUser(data[0]); // Tunampeleka kwenye Page ya Karibu
        }
      } else {
        // LOGIN
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', formData.email)
          .eq('password', formData.password)
          .single();

        if (data) {
          setUser(data); // Tunampeleka kwenye Page ya Karibu
        } else {
          alert("Email au Password ni makosa!");
        }
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // 1. UKURASA WA KUKARIBISHA (Baada ya Login/Register)
  if (user) {
    return (
      <div className="welcome-container">
        <div className="welcome-card">
          <img src={logoImg} alt="Logo" className="logo-img-small" />
          <h1>Karibu Nyumbani, {user.name}! 🚀</h1>
          <p>Umefanikiwa kuingia kwenye mradi wa <strong>X-Fata & Kayanza</strong>.</p>
          <div className="status-badge">Account Active</div>
          <button className="logout-btn" onClick={() => setUser(null)}>Log Out</button>
        </div>
      </div>
    );
  }

  // 2. UKURASA WA FOMU (Kama hajaingia bado)
  return (
    <div className="form-container">
      <img src={logoImg} alt="Logo" className="logo-img" />
      <h1 className="fade-in">{isRegistering ? 'CREATE ACCOUNT' : 'WELCOME BACK'}</h1>

      <form onSubmit={handleSubmit} className="form-animate">
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

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? <div className="spinner"></div> : (isRegistering ? 'JOIN NOW' : 'SIGN IN')}
        </button>
      </form>

      <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Tayari una akaunti? Ingia hapa" : "Huna akaunti? Jisajili hapa"}
      </p>
    </div>
  );
}

export default App;