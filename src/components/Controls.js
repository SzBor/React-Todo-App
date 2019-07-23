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
    const oldOptions = this.state.options;

    const newOptions = oldOptions.map(option => {
      if (option.href !== href) {
        if (option.isActive) {
          return {
            ...option,
            isActive: false,
          };
        }
        return option
      }
      return {
        ...option,
        isActive:true,
      }
    });
    this.setState({
      options: newOptions,
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
        <button className="clear-completed"
        onClick={this.props.onClearCompleted}>Clear completed</button>
      </footer>
    );
  }
}

export default Controls;
