export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      const { names, location, issue, timeOpen, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id
        }
      });
      return newState;
    default:
        return state;
  }
};
//this reducer will construct a new masterTicketList containing both current data and the new ticket. Redux will automatically reset our store to reflect the updated state returned from our reducer.
