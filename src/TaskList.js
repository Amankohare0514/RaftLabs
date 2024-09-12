import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="p-2 mb-2 border rounded-md">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
