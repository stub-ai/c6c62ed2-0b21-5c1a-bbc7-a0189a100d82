import React, { createContext, useState, ReactNode } from 'react';

export type Task = {
  title: string;
  description: string;
  points: number;
  status: string;
  dueDate: string;
};

type User = {
  points: number;
  level: number;
  tasks: Task[];
};

const defaultUser: User = { points: 0, level: 1, tasks: [] };

export const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}>({
  user: defaultUser,
  setUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};