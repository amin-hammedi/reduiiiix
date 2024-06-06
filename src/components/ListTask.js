import React from "react";
import Task from "./Task";

const ListTask = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        <li>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ListTask;
