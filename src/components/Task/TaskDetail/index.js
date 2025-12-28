import { useEffect, useState } from "react";

function TaskDetail({ task, onUpdate, onDelete, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || "");
      setStatus(task.status);
    }
  }, [task]);

  if (!task) return null;

  const handleUpdate = () => {
    onUpdate({
      ...task,
      title,
      description,
      status,
    });
  };

  return (
    <div>
      <h3>Chi tiết công việc</h3>

      <div>
        <label>Tên công việc</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Mô tả</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Trạng thái</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={handleUpdate}>Cập nhật</button>
        <button onClick={() => onDelete(task.id)}>Xóa</button>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
}

export default TaskDetail;
