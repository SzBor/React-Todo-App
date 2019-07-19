import React, { Component } from "react";
import AddTaskForm from "./AddTaskForm";
import Footer from "./Footer";
import TaskListItem from "./TaskListItem";
import data from "./tasks.json";

console.log(data);

const options = [
  {
    href: "",
    isActive: true,
    labe: "All"
  },
  {
    href: "active",
    label: "Active"
  },
  {
    href: "completed",
    label: "Completed"
  }
];

class Todo extends Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>Todos</h1>
            <AddTaskForm />
          </header>
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {data.tasks.map(task => (
                <TaskListItem
                  isEditing={false}
                  taskTitle={task.title}
                  isDone={task.isDone}
                />
              ))}
            </ul>
          </section>
          <footer className="footer">
            <span className="todo-count" />
            <ul className="filters">
              {options.map(option => (
                <li>
                  <a
                    href={`#/${option.href}`}
                    className={option.isActive ? "selected" : ""}
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Todo;
