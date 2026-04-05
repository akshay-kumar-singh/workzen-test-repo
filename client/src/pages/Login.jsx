import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input className="block w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
          <input className="block w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg" type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="w-full p-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700" type="submit">Login</button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default Login;