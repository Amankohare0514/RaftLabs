import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-500">
                  Due: <span className="font-medium">{task.dueDate}</span> | 
                  Priority: <span className={`font-medium ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{task.priority}</span>
                </p>
                <p className={`text-sm font-semibold mt-2 ${task.status === 'Completed' ? 'text-green-500' : 'text-blue-500'}`}>
                  Status: {task.status}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => onEdit(task)}
                  className="bg-yellow-400 text-white py-1 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
