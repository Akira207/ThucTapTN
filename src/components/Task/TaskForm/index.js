import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      id: Date.now(),
      title,
      description,
      status: "Todo",
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form>
      <h3>Nhập công việc</h3>

      <input
        placeholder="Tên công việc"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Mô tả công việc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Thêm</button>
    </form>
  );
}

export default TaskForm;
