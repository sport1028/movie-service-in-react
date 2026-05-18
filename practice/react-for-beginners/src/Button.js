import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => (
  <button className={styles.button_title} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: propTypes.string.isRequired
};

export default Button;