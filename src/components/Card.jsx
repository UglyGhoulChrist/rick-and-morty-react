import Title from "./Title";
import styles from "./Card.module.scss";
import Picture from "./Picture";
import Button from "./Button";

function Card({ id, name, image, setId }) {
  return (
    <div className={styles.card}>
      <Picture name={name} image={image} />
      <div className={styles.data}>
        <Title title={name} />
        <Button
          text="Подробнее"
          onClick={() => {
            setId(id);
          }}
        />
      </div>
    </div>
  );
}

export default Card;
