import "./Modal.scss";

import Title from "./Title";
import Picture from "./Picture";
import Button from "./Button";

function Modal({
  status,
  name,
  image,
  created,
  species,
  gender,
  onClick,
  show,
}) {
  return (
    <div className={`modal ${show && "modal_hidden"}`}>
      <div className="modal__content">
        <div className={`modal__header modal__header_${status}`}>
          <Title title={name} />
          <button onClick={onClick} className="modal__close">
            &times;
          </button>
        </div>

        <div className="modal__body">
          <Picture name={name} image={image} />
          <p className="modal__created">
            created: {created && created.slice(0, 10)}
          </p>
          <p>
            {species} ({gender})
          </p>
        </div>
        <div className="modal__footer">
          <Button text="Закрыть" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
