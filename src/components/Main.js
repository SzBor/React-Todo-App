import React from 'react';

const Main = props => (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{props.children}</ul>
    </section>
  );


  export default Main;