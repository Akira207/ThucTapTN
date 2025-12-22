import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { getTasks, saveTasks } from "../services/taskService";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
    setEditingTask(null);
  };
  const updateStatus = (id, status) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return (
    <div>
      <h1>Task Management</h1>

      <TaskForm
        onAddTask={addTask}
        editingTask={editingTask}
        onUpdateTask={updateTask}
      />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={setEditingTask}
        onUpdateStatus={updateStatus}
      />
    </div>
  );
};

export default Home;
