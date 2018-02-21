import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import Moment from 'moment';
import c from './../../src/constants'

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names: 'Cat & Adam',
    location: 'upsideDown',
    issue: 'surely you jest, we have no issues',
    timeOpen: 15000000000,
    id: 0
  };

  test('new ticket should include Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

  test('should add freshly-calculated Moment-formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    //^payload includes id and formattedWaitTime
    expect(ticketListReducer({ [id] : sampleTicketData }, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });
  //1st argument in expect holds iniital state; by passing [id]:sampleTicketData we ensure store includes a single ticket when this test runs

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
  };
  expect(ticketListReducer({}, action)).toEqual({
    [id] : {
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    }
  });
});

});
