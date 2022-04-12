const reducer = (state = "", action) => {
  if (action.type == "fetchNotificationData") {
    return (state = action.payload);
  } else {
    return state;
  }
};

export default reducer;
