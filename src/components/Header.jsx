import React from 'react';


function Header(){
  var anotherStyledComponentStyles = {
    backgroundColor: '#8595af',
    fontFamily: 'monospace',
    paddingTop: '100px'
  }
  return (
    <h1 style={anotherStyledComponentStyles}>Help Queue</h1>
  );
}

export default Header;
