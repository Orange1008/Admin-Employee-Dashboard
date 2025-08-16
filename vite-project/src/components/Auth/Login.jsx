import React, { useState } from 'react';
import Orb from './Orb';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.77}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Login Form Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
         
        <div className="bg-white p-6 shadow-md border-b-blue-700 border-2 w-96 h-60 rounded-full pointer-events-auto flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full gap-4"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email"
              className="p-2 border-2 rounded w-3/4"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
              className="p-2 border-2 rounded w-3/4"
            />
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
