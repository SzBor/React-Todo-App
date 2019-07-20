import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import Footer from './Footer';
import TaskListItem from './TaskListItem';
import data from './tasks.json';

console.log(data);

const options = [
  {
    href: '',
    isActive: true,
    labe: 'All'
  },
  {
    href: 'active',
    label: 'Active'
  },
  {
    href: 'completed',
    label: 'Completed'
  }
];

const Header = props => (
  <header className="header">
    <h1>Todo</h1>
    {props.children}
  </header>
);

const Main = props => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">{props.children}</ul>
  </section>
);

const Controls = props => (
  <footer className="footer">
    <span className="todo-count" />
    <ul className="filters">
      {options.map(option => (
        <li key={option.href}>
          <a
            href={`#/${option.href}`}
            className={option.isActive ? 'selected' : ''}
          >
            {option.label}
          </a>
        </li>
      ))}
    </ul>
    <button className="clear-completed">Clear completed</button>
  </footer>
);

class Todo extends Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <Header>
            <AddTaskForm />
          </Header>
          <Main>
            {data.tasks.map(task => (
              <TaskListItem
                key={task.id}
                isEditing={false}
                taskTitle={task.title}
                isDone={task.isDone}
              />
            ))}
          </Main>

          <Controls />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Todo;
