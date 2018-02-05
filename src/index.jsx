import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//CREATE ELEMENTS HERE:

  // var heading = React.createElement('h1', {}, 'Help Queue');
  //call React to invoke core library
  //createElement() method creates a new React element in its VIRTUAL DOM, YO.
  //Arg#1: type of element we're creating
  //Arg#2: where da props go (props = properties of our element); cannot omit this      argument, must include empty curly braces
  //Arg#3: children of the element; in this case, it's the text inside the h1
  // var app = React.createElement('div', {}, heading);
  //var app is created to house both greeting and clock elements to keep da code DRY, YO.
  //app element has multiple arguments for the children, just separate them by a comma

  //RENDER ELEMENTS HERE:
  ReactDOM.render(

    document.getElementById('react-app-root')
  );
  //call ReactDOM to invoke react-dom library; call render() method that renders React elements to the real life DOM
  //Arg#1: tell it what to render; in this case our app element
  //Arg#2: tell it where to render; we state document.getElementById('react-app-root') to refer to ROOT DOM NODE we created
  //(can also take Arg#3 as a callback function, but no worry no now)

  //ReactDOM.render() is actually creating HTML elements using a method in JavaScript's web API called Document.createElement(). This method takes a single argument and returns a single HTML element. That means the corresponding React method, React.createElement() calls Document.createElement() for each argument provided to it.
