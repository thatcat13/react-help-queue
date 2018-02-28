const persistDataLocally = store => next => action => {
  next(action);
  localStorage['reduxStore'] = JSON.stringify(store.getState());
  console.log('local storage:', localStorage['reduxStore']);
}

export default persistDataLocally;
