import React, { useState } from 'react';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type User = {
  points: number;
  level: number;
};

const Login: React.FC = () => {
  const [taskArray, setTaskArray] = useState<Task[]>([]);
  const [userInfo, setUserInfo] = useState<User>({ points: 0, level: 1 });

  return (
    <div>
      {/* Login form goes here */}
    </div>
  );
};

export default Login;