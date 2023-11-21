import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import { useContext } from 'react';
import { UserContext, Task } from '../components/UserContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, setUser } = useContext(UserContext);

  const handleEdit = (editedTask: Task, index: number) => {
    const newTasks = [...user.tasks];
    newTasks[index] = editedTask;
    setUser({ ...user, tasks: newTasks });
  };

  const handleDelete = (index: number) => {
    const newTasks = [...user.tasks];
    newTasks.splice(index, 1);
    setUser({ ...user, tasks: newTasks });
  };

  return (
    <main
      className={`flex flex-col min-h-screen p-24 ${inter.className}`}
    >
      <Header />
      <div className="flex-grow">
        {user.tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  )
}