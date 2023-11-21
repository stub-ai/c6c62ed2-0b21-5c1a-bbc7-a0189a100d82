import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Login: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  // Now you can use `user` and `setUser` in this component

  return (
    <div>
      {/* Login form goes here */}
    </div>
  );
};

export default Login;