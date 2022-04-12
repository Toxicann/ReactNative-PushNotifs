export const fetchNotificationData = (notificationData) => {
  return (dispatch) => {
    dispatch({
      type: "fetchNotificationData",
      payload: notificationData,
    });
  };
};
