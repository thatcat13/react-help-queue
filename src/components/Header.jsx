import React from 'react';
import { Link } from 'react-router-dom';
import benders from './../benders.jpg';


function Header(){
  const anotherStyledComponentStyles = {
    backgroundImage: `url(${benders})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  };
  return (
    <div style={anotherStyledComponentStyles}>
      <style jsx global>{`

          .hq {
            color: white;
            text-shadow: 3px 2px 3px black;
            font-size: 100px;
            text-align: center;
          }
          .links {
            display: flex;
            justify-content: center;
            background-color: #8080809c;
            margin-bottom: 25px;
          }
          .links:hover {
            background-color: #8080805c;
          }
          a {
            color: white;
            text-shadow: 3px 2px 3px black;
            font-size: 2em;
            text-decoration: none;
            padding: 20px;
          }
          a:hover {
            text-decoration: underline;
          }
            `}</style>
      <h1 className="hq">Help Queue</h1><br></br>
      <div className="links">
        <Link to="/">Home </Link>  <Link to="/newticket">Create Ticket</Link>  <Link to="/admin">Admins Only</Link>
      </div>
    </div>
  );
}

export default Header;
