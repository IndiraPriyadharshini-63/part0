import React from "react";

const Notification = ({ msg, type }) => {
  const notificationSuccess = {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#d4edda",
    color: "#155724",
  };
  const notificationError = {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#f8d7da",
    color: "#721c24",
  };

  if (msg === null) {
    return null;
  }
  return (
    <div style={type === "error" ? notificationError : notificationSuccess}>
      {msg}
    </div>
  );
};

export default Notification;
