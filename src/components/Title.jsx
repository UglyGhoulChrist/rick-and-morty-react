import styles from "./Title.module.scss";

function Title({ title }) {
  return <h3 className={styles.title}>{title}</h3>;
}

export default Title;
