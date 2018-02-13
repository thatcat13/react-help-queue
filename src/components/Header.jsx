import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  var anotherStyledComponentStyles = {
    backgroundColor: '#8595af',
    fontFamily: 'monospace',
    paddingTop: '100px'
  };
  return (
    <div>
      <h1 style={anotherStyledComponentStyles}>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
