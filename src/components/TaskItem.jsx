import React from "react";

const TaskItem = ({ task, onDelete, onEdit, onUpdateStatus }) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      <span style={{ marginRight: "10px" }}>
        {task.title}
      </span>

      <select
        value={task.status}
        onChange={(e) => onUpdateStatus(task.id, e.target.value)}
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <button onClick={() => onEdit(task)}>Sửa</button>
      <button onClick={() => onDelete(task.id)}>Xóa</button>
    </li>
  );
};

export default TaskItem;
