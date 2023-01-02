import styles from "./Picture.module.scss";

function Picture({ name, image }) {
  return (
    <div className={styles.picture}>
      <img className={styles.image} src={image} alt={name} />
    </div>
  );
}
export default Picture;
