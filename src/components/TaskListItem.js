import React from "react";

const TaskListItem = props => (
  <li className={props.isDone ? "completed" : props.isEditing ? "editing" : ""}>
    <div className="view">
      <input className="toggle" type="checkbox" defaultChecked={props.isDone} />
      <label>{props.taskTitle}</label>
      <button className="destroy" />
    </div>
    <input className="edit" defaultValue={props.taskTitle} />
  </li>
);

export default TaskListItem;
