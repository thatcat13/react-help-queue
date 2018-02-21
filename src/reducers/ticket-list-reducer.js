import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case c.ADD_TICKET:
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

  case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    //^using Object.assign() to construct a copy of the ticket we're updating that ALSO includes an up-to-date formattedWaitTime
    newState = Object.assign({}, state, {
      [id]: newTicket
    });
    //^using Object.assign() AGAIN to reconstruct entire state object to include the newTicket entry we just compiled
    //remember the reducer returns a slice it's responsible for; b/c this reducer is responsible for our list of tickets it must return the whole list, even though we're updating only ONE property on ONE ticket
    return newState;

  default:
    return state;
  }
};
//this reducer will construct a new masterTicketList containing both current data and the new ticket. Redux will automatically reset our store to reflect the updated state returned from our reducer.
