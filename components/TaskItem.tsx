import React from 'react';
import { Task } from './UserContext';
import AddTaskDialog from './AddTaskDialog';

interface TaskItemProps {
  task: Task;
  index: number;
  onEdit: (task: Task, index: number) => void;
  onDelete: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded mb-4">
      <div>
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p>Status: {task.status}</p>
        <p>Points: {task.points}</p>
        <p>Due date: {task.dueDate}</p>
      </div>
      <div>
        <AddTaskDialog taskToEdit={task} onEdit={onEdit} onDelete={onDelete} index={index} />
      </div>
    </div>
  );
};

export default TaskItem;