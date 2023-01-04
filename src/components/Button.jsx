import "./Button.scss";

function Button({ text, onClick, active }) {
  return (
    <button onClick={onClick} className={`button ${active && "button_active"}`}>
      {text}
    </button>
  );
}

export default Button;
