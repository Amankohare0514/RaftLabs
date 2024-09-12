import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: tasks.length + 1,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <hr className="my-4" />
      <h2 className="text-xl font-bold mb-2">Task List</h2>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
