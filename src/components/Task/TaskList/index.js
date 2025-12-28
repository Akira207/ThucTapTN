import TaskItem from "./TaskItem";

function TaskList({ tasks = [], onEdit, onDelete, onUpdateStatus }) {
  return (
    <div>
      <h3>Danh sách công việc</h3>
      {tasks.length === 0 ? (
        <p>Chưa có công việc</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onUpdateStatus={onUpdateStatus}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
