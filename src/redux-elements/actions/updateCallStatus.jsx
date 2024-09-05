export default (prop, value) => {
  console.log('Updating call status', prop, value);
  return {
    type: 'UPDATE_CALL_STATUS',
    payload: {
      prop,
      value,
    },
  };
};
