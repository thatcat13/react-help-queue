//This is the entry point file:

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from 'react-hot-loader';

//define render function here:
  const render = (Component) => {
    //Component is a constructor or a function; the word "Component" is a parameter and can be called anything
    ReactDOM.render(
      <AppContainer>
        <Component/>
      </AppContainer>,
      document.getElementById('react-app-root')
    );
  };
//AppContainer is a wrapper component;
//call render function here:
  render(App);

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      render(App)
    });
  }
//This code is required for HMR to work successfully.
// <AppContainer> is a wrapper component from React-Hot-Loader that handles reloading the application and sending errors if anything goes awry.
// The if statement below render() triggers the swapping process. Take a look at the HMR documentation for optional further explanation about how this works behind the scenes.





  //call ReactDOM to invoke react-dom library; call render() method that renders React elements to the real life DOM
  //Arg#1: tell it what to render; in this case our app element
  //Arg#2: tell it where to render; we state document.getElementById('react-app-root') to refer to ROOT DOM NODE we created
  //(can also take Arg#3 as a callback function, but no worry no now)
