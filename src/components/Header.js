import React from 'react';

const Header = props => (
    <header className="header">
      <h1>Todo</h1>
      {props.children}
    </header>
  );


  export default Header;