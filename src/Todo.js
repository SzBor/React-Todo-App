import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import Footer from './Footer';
import TaskListItem from './TaskListItem';
import Header from './Header.js';
import Main from './Main.js';
import Controls from './Controls.js';

import './base.css'
import './index.css'

import data from './tasks.json';


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
