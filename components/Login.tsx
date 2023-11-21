import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Login: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  // Now you can use `user` and `setUser` in this component

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {/* Login form goes here */}
    </div>
  );
};

export default Login;