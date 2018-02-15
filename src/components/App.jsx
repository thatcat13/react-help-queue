import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket){
    var newTicketId = v4()
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicket.id]: newTicket
    });
    newMasterTicketList[newTicket.id].formattedWaitTime = newMasterTicketList[newTicket.id].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }
  //handleAddingNewTicketToList() callback from App.jsx is triggered when our form in NewTicketForm is submitted
  //We can only alter state using setState(). And setState() takes a key value pair: The state value we're updating (masterTicketList in our case), and the new value we'd like to update it to.

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  render() {
    console.log(this.state.masterTicketList);
    const container = {
      margin: '15px 35px'
    };
    return (
      <div>
        <style jsx global>{`
        body {
          font-family: 'Roboto Mono', monospace;
        }
        `}</style>
        <Header/>
        <div style={container}>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/newticket' render={()=> <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
            <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
              onTicketSelection={this.handleChangingSelectedTicket}
              selectedTicket={this.state.selectedTicket}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;


//In webpack.config.js, we declared index.jsx as our entry point responsible for loading our application. It does this by loading our parent component. The parent component, in turn, loads child components, which then load their child components, so on, and so forth.

//Since we're breaking our application into multiple components, our index.jsx entry point will only need to load our App.jsx parent. We'll move most of the contents of index.jsx into App.jsx.
