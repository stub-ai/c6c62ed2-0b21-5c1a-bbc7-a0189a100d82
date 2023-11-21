import React, { useContext } from 'react';
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

const Shop: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <p>You have {user.points} points.</p>
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
  );
};

export default Shop;