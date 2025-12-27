import React, { useState } from 'react';

function App() {
  // Hii ndio sehemu ya kutengeneza "kumbukumbu"
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // Hii ni function ya kuchukua unachokiandika na kukiweka kwenye kumbukumbu
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data iliyorekodiwa:", formData);
    alert("Hongera " + formData.fullName + "! Data zako zimepokelewa.");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>X-FATA BLOG REGISTRATION</h1>
      <p>Kumbukumbu inafanya kazi sasa...</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto', gap: '10px' }}>
        <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} style={{ padding: '10px' }} />
        <input name="email" type="email" placeholder="Email Address" onChange={handleChange} style={{ padding: '10px' }} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} style={{ padding: '10px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'green', color: 'white', cursor: 'pointer' }}>
          SUBMIT DATA
        </button>
      </form>
    </div>
  );
}

export default App;