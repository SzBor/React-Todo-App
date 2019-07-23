import React, { Component } from 'react';

class AddTaskForm extends Component {
  state = {
    taskTitle: ''
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({
      taskTitle: inputValue
    });
  };

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.props.handleData(this.state.taskTitle);
      this.setState({
        taskTitle: ''
      });
    }
  };

  render() {
    return (
      <input
        value={this.state.taskTitle}
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    );
  }
}

export default AddTaskForm;
