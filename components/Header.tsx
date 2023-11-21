import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import ShopDialog from './ShopDialog';

const Header: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center p-5 bg-blue-500 text-white">
      <div>
        <h1 className="text-2xl font-bold">Gamified Todo</h1>
        <p>Welcome, {user.username}</p>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <p>Points: {user.points}</p>
          <p>Level: {user.level}</p>
        </div>
        <ShopDialog />
      </div>
    </header>
  );
};

export default Header;