import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedTicket: null
    };
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

  // updateTicketElapsedWaitTime() {
  //   var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
  //   Object.keys(newMasterTicketList).forEach(ticketId => {
  //     newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
  //   });
  //   this.setState({masterTicketList: newMasterTicketList});
  // }

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

        <div style={container}>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
            <Route path='/newticket' render={()=><NewTicketControl />} />
            <Route path='/admin' render={(props)=><Admin ticketList={this.props.masterTicketList} currentRouterPath={props.location.pathname}
              onTicketSelection={this.handleChangingSelectedTicket}
              selectedTicket={this.state.selectedTicket}/>} />

          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
  //key is React prop: value is Redux state items mapping to those props
};

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
//wrap connect() with a React-Router method called withRouter
