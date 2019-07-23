import React from 'react';

const TaskListItem = ({ isDone, isEditing, taskTitle, onToggle, onRemove }) => {
  const className = isDone ? 'completed' : isEditing ? 'editing' : '';

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          onChange={onToggle}
          type="checkbox"
          defaultChecked={isDone}
        />
        <label>{taskTitle}</label>
        <button className="destroy" onClick={onRemove} />
      </div>
      <input className="edit" defaultValue={taskTitle} />
    </li>
  );
};

export default TaskListItem;
