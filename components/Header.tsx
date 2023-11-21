import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Header: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center p-5 bg-blue-500 text-white">
      <div>
        <h1 className="text-2xl font-bold">Gamified Todo</h1>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <p>Points: {user.points}</p>
          <p>Level: {user.level}</p>
        </div>
        <button className="mr-2 bg-green-500 px-4 py-2 rounded">Add</button>
        <button className="bg-yellow-500 px-4 py-2 rounded">Shop</button>
      </div>
    </header>
  );
};

export default Header;