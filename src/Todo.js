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

class Todo extends Component {
  state = {
    tasks: data.tasks
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

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header>
            <AddTaskForm handleData={this.addTask} />
          </Header>
          <Main>
            {this.state.tasks.map(task => (
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
