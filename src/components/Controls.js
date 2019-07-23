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

  activate = href => {
    this.setState({
      options: this.state.options.map(option =>
        option.href !== href
          ? option.isActive === true
            ? {
                ...option,
                isActive: false
              }
            : option
          : {
              ...option,
              isActive: true
            }
      )
    });
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
                onClick={() => this.activate(option.href)}
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
