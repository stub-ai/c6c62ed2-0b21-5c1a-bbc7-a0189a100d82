import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import AddTaskDialog from '../components/AddTaskDialog';
import { useContext, useState } from 'react';
import { UserContext, Task } from '../components/UserContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [filter, setFilter] = useState('All');

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

  const handleCreate = (newTask: Task) => {
    setUser(prevUser => ({
      ...prevUser,
      tasks: [...prevUser.tasks, newTask]
    }));
  };

  const filteredTasks = user.tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return task.status === 'Incomplete';
    if (filter === 'Completed') return task.status === 'Complete';
    return true;
  });

  return (
    <main
      className={`flex flex-col min-h-screen p-24 ${inter.className}`}
    >
      <Header />
      <div className="flex-grow">
        <div className="mb-4">
          <button onClick={() => setFilter('All')} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">All</button>
          <button onClick={() => setFilter('Active')} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Active</button>
          <button onClick={() => setFilter('Completed')} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Completed</button>
        </div>
        <AddTaskDialog onCreate={handleCreate} />
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  )
}