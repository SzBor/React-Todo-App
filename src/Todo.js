import React, { Component } from "react";
import AddTaskForm from "./AddTaskForm";
import Footer from "./Footer";
import TaskListItem from "./TaskListItem";
import data from "./tasks.json";

console.log(data);

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
              <li>
                <a href="#/" className="selected">
                  All
                </a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
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
