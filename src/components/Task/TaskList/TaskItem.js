function TaskItem({ task, onEdit, onDelete, onUpdateStatus }) {
  return (
    <li>
      <strong>{task.title}</strong>
      <select
        value={task.status}
        onChange={(e) => onUpdateStatus?.(task.id, e.target.value)}
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={() => onEdit(task)}>Chi tiết</button>
      <button onClick={() => onDelete?.(task.id)}>Xóa</button>
    </li>
  );
}

export default TaskItem;
