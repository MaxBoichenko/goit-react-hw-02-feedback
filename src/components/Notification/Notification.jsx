import PropTypes from 'prop-types'; // ES6

export const Notification = ({ message }) => {
  return <div>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
