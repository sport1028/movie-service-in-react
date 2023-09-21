import PropType from "prop-types";
import styles from "./Button.Module.css";

const Button = ({ text }) => {
  return <button className={styles.title}>{text}</button>;
}

Button.propTypes = {
  text : PropType.string.isRequired,
}




export default Button;