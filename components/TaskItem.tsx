import React, { useContext } from 'react';
import { Task, UserContext } from './UserContext';
import AddTaskDialog from './AddTaskDialog';

interface TaskItemProps {
  task: Task;
  index: number;
  onEdit: (task: Task, index: number) => void;
  onDelete: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onEdit, onDelete }) => {
  const { updateUserPointsAndLevel } = useContext(UserContext);

  const handleTaskCompletion = () => {
    if (task.status === 'Complete') {
      updateUserPointsAndLevel(task);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded mb-4">
      <div>
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p>Status: {task.status}</p>
        <p>Points: {task.points}</p>
        <p>Due date: {task.dueDate}</p>
        <div className="pl-4">
          {task.subTasks.map((subTask, subIndex) => (
            <p key={subIndex} className={`text-sm ${task.status === 'Incomplete' ? 'text-gray-500' : ''}`}>{subTask.title} - {subTask.status}</p>
          ))}
        </div>
      </div>
      <div>
        <AddTaskDialog taskToEdit={task} onEdit={onEdit} onDelete={onDelete} index={index} />
        <button onClick={handleTaskCompletion} className="ml-2 bg-green-500 px-4 py-2 rounded">Complete Task</button>
      </div>
    </div>
  );
};

export default TaskItem;