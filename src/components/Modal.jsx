import Title from "./Title";
import styles from "./Modal.module.scss";
import Picture from "./Picture";
import Button from "./Button";

function Modal({
  name,
  image,
  created,
  status,
  species,
  gender,
  closeModal,
  showModal,
}) {
  return (
    <div className={`${styles.modal} ${!showModal && styles.hidden}`}>
      <div className={styles.content}>
        <div
          style={
            (status === "Alive" && { backgroundColor: "#00800050" }) ||
            (status === "Dead" && { backgroundColor: "#80000050" }) || {
              backgroundColor: "#00000050",
            }
          }
          className={styles.header}
        >
          <Title title={name} />
          <button onClick={closeModal} className={styles.close}>
            &times;
          </button>
        </div>

        <div className={styles.body}>
          <Picture name={name} image={image} />
          <p className={styles.created}>created: {created.slice(0, 10)}</p>
          <p>
            {species} ({gender})
          </p>
        </div>
        <div className={styles.footer}>
          <Button text="Закрыть" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
