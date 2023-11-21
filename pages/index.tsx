import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import AddTaskDialog from '../components/AddTaskDialog';
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

  return (
    <main
      className={`flex flex-col min-h-screen p-24 ${inter.className}`}
    >
      <Header />
      <div className="flex-grow">
        {user.tasks.map((task, index) => (
          <div key={index}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.points}</p>
            <AddTaskDialog taskToEdit={task} onEdit={handleEdit} index={index} />
          </div>
        ))}
      </div>
    </main>
  )
}