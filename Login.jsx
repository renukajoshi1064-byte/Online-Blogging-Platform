import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).+$/;

    if (!emailPattern.test(email)) {
      alert('Please enter a valid Gmail address (must end with @gmail.com)');
      return;
    }
    if (!passwordPattern.test(password)) {
      alert('Password must contain at least one uppercase letter and one number');
      return;
    }

    // ✅ store login info
    localStorage.setItem('isAdmin', 'true');
    setIsAuthenticated(true);
    alert('Login Successful!');
    navigate('/admin');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-xl shadow-primary/15">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">
            <span className="text-primary">Admin</span> Login
          </h1>
          <p className="font-light">Enter your credentials to access the admin panel</p>
        </div>
        <form onSubmit={handleSubmit} className="text-gray-600">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your Email"
            className="border-b-2 border-gray-300 p-2 outline-none mb-6 w-full"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your Password"
            className="border-b-2 border-gray-300 p-2 outline-none mb-6 w-full"
          />

          <button
            type="submit"
            className="w-full py-3 font-medium bg-primary text-white rounded hover:bg-primary/90 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
