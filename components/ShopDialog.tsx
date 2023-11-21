import React, { useContext, useState } from 'react';
import { UserContext, User } from './UserContext';

type ShopItem = {
  name: string;
  description: string;
  cost: number;
};

const items: ShopItem[] = [
  { name: 'Item 1', description: 'This is item 1', cost: 100 },
  { name: 'Item 2', description: 'This is item 2', cost: 200 },
  { name: 'Item 3', description: 'This is item 3', cost: 300 },
  // Add more items as needed
];

const ShopDialog: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePurchase = (item: ShopItem) => {
    if (user.points >= item.cost) {
      setUser((prevUser: User) => ({
        ...prevUser,
        points: prevUser.points - item.cost,
      }));
      alert(`You purchased ${item.name}!`);
    } else {
      alert('You do not have enough points to purchase this item.');
    }
  };

  return (
    <div>
      <button onClick={handleOpen} className="bg-yellow-500 px-4 py-2 rounded ml-2">Shop</button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Shop
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        You have {user.points} points.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {items.map((item, index) => (
                          <div key={index} className="border p-4 rounded">
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Cost: {item.cost} points</p>
                            <button onClick={() => handlePurchase(item)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Purchase</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopDialog;