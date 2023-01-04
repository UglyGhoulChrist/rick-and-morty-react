import "./Picture.scss";

function Picture({ name, image }) {
  return (
    <div className="picture">
      <img className="image" src={image} alt={name} />
    </div>
  );
}
export default Picture;
