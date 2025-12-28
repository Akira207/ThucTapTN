import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";
import TaskDetail from "../components/Task/TaskDetail";
import TaskSearch from "../components/Task/TaskSearch";
import TaskFilter from "../components/Task/TaskFilter";
import { useState, useEffect } from "react";
import { getTasks, saveTasks } from "../services/taskService";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addTask = (task) => {
    const next = [...tasks, task];
    setTasks(next);
    saveTasks(next);
  };

  const updateTask = (updated) => {
    const next = tasks.map((t) => (t.id === updated.id ? updated : t));
    setTasks(next);
    saveTasks(next);
    setSelectedTask(null);
  };

  const deleteTask = (id) => {
    const next = tasks.filter((t) => t.id !== id);
    setTasks(next);
    saveTasks(next);
    setSelectedTask(null);
  };

  const updateStatus = (id, status) => {
    const next = tasks.map((t) => (t.id === id ? { ...t, status } : t));
    setTasks(next);
    saveTasks(next);
  };

  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      {/* Trái */}
      <div style={{ flex: 1 }}>
        <TaskForm
          onAddTask={addTask}
          editingTask={selectedTask}
          onUpdateTask={updateTask}
        />
      </div>

      {/* CỘT GIỮA */}
      <div style={{ flex: 2 }}>
        {!selectedTask && (
          <TaskList
            tasks={tasks}
            onEdit={setSelectedTask}
            onDelete={deleteTask}
            onUpdateStatus={updateStatus}
          />
        )}

        {selectedTask && (
          <TaskDetail
            task={selectedTask}
            onUpdate={updateTask}
            onDelete={deleteTask}
            onClose={() => setSelectedTask(null)}
          />
        )}
      </div>

      {/* Phải */}
      <div style={{ flex: 1 }}>
        <TaskSearch />
        <TaskFilter />
      </div>
    </div>
  );
}

export default Home;
