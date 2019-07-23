import React, { Component } from 'react';

class Controls extends Component {
  state = {
    options: [
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
    ]
  };

  render() {
    return (
      <footer className="footer">
        <span className="todo-count" />
        <ul className="filters">
          {this.state.options.map(option => (
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
  }
}

export default Controls;
