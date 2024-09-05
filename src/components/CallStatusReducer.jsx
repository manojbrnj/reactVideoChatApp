const initState = {
  current: 'idle', //idle waiting progress complete negotiationg
  video: false, // on off
  audio: false, // on off
  audioDevice: 'default', // enumerate media devices and choose one
  videoDevice: 'default', //enumerate media devices and choose one
  shareScreen: false, // on off
  haveMedia: false, // local stream hai ya nhi
};

export default (state = initState, action) => {
  if (action.type === 'UPDATE_CALL_STATUS') {
    const copyState = {...state};
    copyState[action.payload.prop] = action.payload.value;
    return copyState;
  } else if (action.type === 'LOGOUT_ACTION' || action.type === 'NEW_VERSION') {
    return initState;
  } else {
    return state;
  }
};
