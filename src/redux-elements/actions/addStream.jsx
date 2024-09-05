export default (who, stream) => {
  return {
    type: 'ADD_STREAM',
    payload: {
      who: who,
      stream: stream,
    },
  };
};
