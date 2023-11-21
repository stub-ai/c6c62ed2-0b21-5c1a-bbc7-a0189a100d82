import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import AddTaskDialog from './AddTaskDialog';
import Link from 'next/link';

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
        <AddTaskDialog />
        <Link href="/shop">
          <a className="bg-yellow-500 px-4 py-2 rounded ml-2">Shop</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;