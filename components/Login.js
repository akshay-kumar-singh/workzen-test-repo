import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type='submit'>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;