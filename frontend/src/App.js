import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>X-FATA BLOG REGISTRATION</h1>
      <p>Please enter your details below:</p>

      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto', gap: '10px' }}>
        <input type="text" placeholder="Full Name" style={{ padding: '10px' }} />
        <input type="email" placeholder="Email Address" style={{ padding: '10px' }} />
        <input type="password" placeholder="Password" style={{ padding: '10px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default App;