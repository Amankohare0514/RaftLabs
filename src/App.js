import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const addTask = (task) => {
    if (editTask) {
      setTasks(tasks.map((t) => (t.id === editTask.id ? { ...task, id: editTask.id } : t)));
      setEditTask(null);
    } else {
      const newTask = { ...task, id: tasks.length + 1 };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTaskHandler = (task) => {
    setEditTask(task);
  };

  return (
    <div className="bg-sky-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">React Developer Intern Test</h1>
        <h1 className="text-2xl font-semibold mb-4 text-center">Task Manager</h1>
        <TaskForm onSubmit={addTask} taskToEdit={editTask} />
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Your Task List</h2>
          <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTaskHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
