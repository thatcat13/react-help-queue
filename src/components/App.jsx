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

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
    //^map through the masterTicketList that App receives as props from Redux store
    //^use each key (called ticketId in context above) to locate its corresponding ticket and timeOpen timestamp property, then calc a newFormattedWaitTime using Moment's fromNow()
    //^then dispatch 'UPDATE_TIME' action to update ticket's store entry to include the updated wait time

  }

  render() {
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
            <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname}
            />} />

          </Switch>
        </div>
      </div>
    );
  }
}


App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
  //key is React prop: value is Redux state items mapping to those props
};

export default withRouter(connect(mapStateToProps)(App));
//wrap connect() with a React-Router method called withRouter
