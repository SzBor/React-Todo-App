import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm.js';
import Footer from './components/Footer.js';
import TaskListItem from './components/TaskListItem.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Controls from './components/Controls.js';

import './base.css';
import './index.css';

import data from './tasks.json';


const defaultOptions = [{
  options: [
    {
      href: '',
      isActive: true,
      label: 'All'
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
}];

class Todo extends Component {
  state = {
    tasks: data.tasks,
    searchPhrase: '',
    activeFilterName: ''
  };

  activateFilter = filterName => {
    this.setState({
      activeFilterName: filterName,
    });
  };

  toggleIsDone = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id !== taskId
          ? task
          : {
              ...task,
              isDone: !task.isDone
            }
      )
    });
  };

  addTask = taskTitle => {
    this.setState({
      tasks: this.state.tasks.concat({
        id: Date.now(),
        title: taskTitle,
        isDone: false
      })
    });
  };

  removeTask = taskId => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId)
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.isDone === false)
    });
  };

  updateTask = (taskId, taskTitle) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id !== taskId
          ? task
          : {
              ...task,
              title: taskTitle
            }
      )
    });
  };

  handleSearchChange = event => {
    this.setState({
      searchPhrase: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchPhrase}
          onChange={this.handleSearchChange}
        />
        <section className="todoapp">
          <Header>
            <AddTaskForm handleData={this.addTask} />
          </Header>
          <Main>
            {this.state.tasks
              .filter(task => task.title.includes(this.state.searchPhrase))
              .filter(task =>
                this.state.activeFilterName === 'completed'
                  ? task.isDone
                  : this.state.activeFilterName === 'active'
                  ? task.isDone === false
                  : true
              )
              .map(task => (
                <TaskListItem
                  key={task.id}
                  isEditing={false}
                  taskTitle={task.title}
                  isDone={task.isDone}
                  onToggle={() => this.toggleIsDone(task.id)}
                  onRemove={() => this.removeTask(task.id)}
                />
              ))}
          </Main>

          <Controls
            onClearCompleted={this.clearCompleted}
            onActivateFilter={this.activateFilter}
            options={defaultOptions}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Todo;
