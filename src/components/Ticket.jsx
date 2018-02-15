import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
          {ticketInformation}
        </div>
      );
}
}
        Ticket.propTypes = {
          names: PropTypes.string,
          location: PropTypes.string,
          issue: PropTypes.string,
          formattedWaitTime: PropTypes.string.isRequired,
          currentRouterPath: PropTypes.string,
          onTicketSelection: PropTypes.func,
          ticketId: PropTypes.string.isRequired
        };

export default Ticket;
