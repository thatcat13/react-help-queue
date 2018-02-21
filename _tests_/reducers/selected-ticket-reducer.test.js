import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';

describe('selectedTicketReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, { type: null })).toEqual({});
  });

  test('should record which ticket has been selected by user', () => {
    expect(selectedTicketReducer({}, { type: 'SELECT_TICKET', ticketId: 1})).toEqual(1);
  });
  
});
