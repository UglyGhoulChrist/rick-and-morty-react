import Title from "./Title";
import styles from "./Modal.module.scss";
import Picture from "./Picture";
import Button from "./Button";

function Modal({ name, image, modified, description, closeModal, showModal }) {
  return (
    <div className={`${styles.modal} ${!showModal && styles.hidden}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Title title={name} />
          <button onClick={closeModal} className={styles.close}>
            &times;
          </button>
        </div>

        <div className={styles.body}>
          <Picture name={name} image={image} />
          <p className={styles.modified}>{modified}</p>
          <h5 className={styles.h5}>Описание:</h5>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          <Button text="Закрыть" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
