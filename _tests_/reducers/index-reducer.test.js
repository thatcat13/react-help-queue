//THIS IS THE MODULE INDEX; retrieves logic from all over the place and imports it into one big module

import rootReducer from './../../src/reducers/index';
import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTicketList: {},
      selectedTicket: {}
    });
  });

  test('should contain ticketListReducer logic', () => {
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });

  test('should contain selectedTicketReducer logic', () => {
    expect(store.getState().selectedTicket).toEqual(selectedTicketReducer(undefined, { type: null }));
  });

});
