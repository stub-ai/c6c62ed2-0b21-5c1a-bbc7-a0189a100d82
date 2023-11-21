import React, { createContext, useState, ReactNode } from 'react';

export type SubTask = {
  title: string;
  status: string;
};

export type Task = {
  title: string;
  description: string;
  points: number;
  status: string;
  dueDate: string;
  subTasks: SubTask[];
};

export type User = {
  points: number;
  level: number;
  tasks: Task[];
};

const defaultUser: User = { points: 0, level: 1, tasks: [] };

export const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateUserPointsAndLevel: (task: Task) => void;
}>({
  user: defaultUser,
  setUser: () => {},
  updateUserPointsAndLevel: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUserPointsAndLevel = (task: Task) => {
    if (task.status === 'Complete') {
      const newPoints = user.points + task.points;
      const newLevel = Math.floor(newPoints / 100) + 1;
      setUser(prevUser => ({
        ...prevUser,
        points: newPoints,
        level: newLevel
      }));
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUserPointsAndLevel }}>
      {children}
    </UserContext.Provider>
  );
};