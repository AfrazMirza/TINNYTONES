import React, { useState } from 'react';

const CreateAccountPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Implement account creation logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Account created for:', { name, email });
  };

  return (
    <div className="create-account-page" style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleCreateAccount}>
        <div className="form-group">
          <label>Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
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
        <div className="form-group">
          <label>Re-enter password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#f0c14b', border: '1px solid #a88734' }}>
          Create Account
        </button>
      </form>
      <p>By creating an account, you agree to our Conditions of Use and Privacy Notice.</p>
    </div>
  );
};

export default CreateAccountPage;
