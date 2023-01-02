import styles from "./Button.module.scss";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}

export default Button;
