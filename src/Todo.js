import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>Todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </header>
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              <li className="editing">
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked />
                  <label>Be awesome</label>
                  <button className="destroy" />
                </div>
                <input className="edit" defaultValue="Be awesome" />
              </li>

              <li className="">
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked />
                  <label>Be awesome</label>
                  <button className="destroy" />
                </div>
                <input className="edit" defaultValue="Be awesome" />
              </li>
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
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>
            Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a>
          </p>
          <p>
            Refactored by
            <a href="https://github.com/cburgmer">Christoph Burgmer</a>
          </p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Todo;
