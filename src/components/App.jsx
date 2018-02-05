import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";
//TicketList has to be BEFORE Header, FYI

function App(){
  return (
    <div>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;


//In webpack.config.js, we declared index.jsx as our entry point responsible for loading our application. It does this by loading our parent component. The parent component, in turn, loads child components, which then load their child components, so on, and so forth.

//Since we're breaking our application into multiple components, our index.jsx entry point will only need to load our App.jsx parent. We'll move most of the contents of index.jsx into App.jsx.
