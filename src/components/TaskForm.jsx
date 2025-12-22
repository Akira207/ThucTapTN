import React, { useEffect, useState } from "react";

const TaskForm = ({ onAddTask, editingTask, onUpdateTask }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        title,
      });
    } else {
      onAddTask({
        id: Date.now(),
        title,
        status: "Todo",
        createdAt: new Date().toISOString(),
      });
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">
        {editingTask ? "Cập nhật" : "Thêm"}
      </button>
    </form>
  );
};

export default TaskForm;
