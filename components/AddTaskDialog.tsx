import React, { useState, useContext } from 'react';
import { UserContext, Task, SubTask } from './UserContext';

interface AddTaskDialogProps {
  taskToEdit?: Task;
  onEdit?: (task: Task, index: number) => void;
  onDelete?: (index: number) => void;
  index?: number;
  onCreate?: (task: Task) => void;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({ taskToEdit, onEdit, onDelete, index, onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Task>(taskToEdit || { title: '', description: '', points: 0, status: '', dueDate: '', subTasks: [] });

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
    if (onEdit && typeof index === 'number') {
      onEdit(task, index);
    } else if (onCreate) {
      onCreate(task);
    }
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen} className="mr-2 bg-green-500 px-4 py-2 rounded">Edit</button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          {/* ...existing code... */}
          <form onSubmit={handleSubmit}>
            <input name="title" value={task.title} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" placeholder="Title" required />
            <input name="description" value={task.description} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" placeholder="Description" required />
            <input name="points" type="number" value={task.points} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" placeholder="Points" required />
            <input name="status" value={task.status} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" placeholder="Status" required />
            <input name="dueDate" type="date" value={task.dueDate} onChange={handleChange} className="w-full px-2 py-1 mb-2 border rounded" required />
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Save Task</button>
          </form>
          {/* ...existing code... */}
        </div>
      )}
    </div>
  );
};

export default AddTaskDialog;