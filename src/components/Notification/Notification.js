import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={s.notification}>{message}</p>
);

export default Notification;

Notification.PropTypes = {
  message: PropTypes.string.isRequired,
};
