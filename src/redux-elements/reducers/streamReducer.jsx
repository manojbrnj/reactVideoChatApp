const initialState = {
  stream: '', //tranks play in video tag
  who: '',
  peerConection: '', // peerconnection connect c1 2 c2
};
export default (state = initialState, action) => {
  if (action.type === 'ADD_STREAM') {
    let copyState = {...state};

    copyState = {
      ...copyState,
      who: action.payload.who,
      stream: action.payload.stream,
    };
    console.log('reducer' + {...copyState.stream});
    return copyState;
  } else if (action.type === 'LOGOUT_ACTION' || action.type === 'NEW_VERSION') {
    return initialState;
  } else {
    return state;
  }
};
