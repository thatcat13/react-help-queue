//index.js is a PUBLIC INTERFACE for all modules
//singular spokesperson that represents reducer logic to the rest of the app

import selectedTicketReducer from './selected-ticket-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  selectedTicket: selectedTicketReducer,
  masterTicketList: ticketListReducer
});


export default rootReducer;
