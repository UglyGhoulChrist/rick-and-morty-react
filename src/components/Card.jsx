import "./Card.scss";
import Title from "./Title";
import Picture from "./Picture";
import Button from "./Button";

function Card({ name, image, type, created, episode, air_date, onClick }) {
  if (image)
    return (
      <div className="card card_img">
        <Picture name={name} image={image} />
        <div className="card__body">
          <Title title={name} />
          <Button text="Подробнее" onClick={onClick} />
        </div>
      </div>
    );
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__header">
          <Title title={episode || type} />
          <Title title="-" />
          <Title title={name} />
        </div>
        <p className="card__created">
          {(air_date && `air date: ${air_date}`) ||
            `created: ${created && created.slice(0, 10)}`}
        </p>
      </div>
    </div>
  );
}

export default Card;
