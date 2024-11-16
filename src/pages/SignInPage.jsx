import React, { useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement sign-in logic here
    console.log('Signed in with:', { email, password });
  };

  return (
    <div className="sign-in-page" style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Sign-In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label>Email or mobile phone number</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#f0c14b', border: '1px solid #a88734' }}>
          Sign-In
        </button>
      </form>
      <p>By continuing, you agree to our Conditions of Use and Privacy Notice.</p>
      <hr />
      <button
        onClick={() => window.location.href = '/create-account'}
        style={{ width: '100%', padding: '10px', backgroundColor: '#e7e9ec', border: '1px solid #adb1b8' }}
      >
        Create your Account
      </button>
    </div>
  );
};

export default SignInPage;
