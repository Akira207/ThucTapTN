import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onEdit, onUpdateStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </ul>
  );
};

export default TaskList;
