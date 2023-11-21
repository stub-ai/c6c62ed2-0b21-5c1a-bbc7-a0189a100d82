import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

interface Task {
  title: string;
  description: string;
  points: number;
}

const AddTaskDialog: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Task>({ title: '', description: '', points: 0 });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add task to user's tasks
    // setUser({ ...user, tasks: [...user.tasks, task] });
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen} className="mr-2 bg-green-500 px-4 py-2 rounded">Add</button>
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
                      Add Task
                    </h3>
                    <div className="mt-2">
                      <form onSubmit={handleSubmit}>
                        <input name="title" value={task.title} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" placeholder="Title" required />
                        <input name="description" value={task.description} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" placeholder="Description" required />
                        <input name="points" type="number" value={task.points} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" placeholder="Points" required />
                        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Add Task</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" onClick={handleClose} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
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

export default AddTaskDialog;