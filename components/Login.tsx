import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Login: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUser({ ...user, username });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} className="px-2 py-1 mb-2 border rounded" placeholder="Username" required />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default Login;