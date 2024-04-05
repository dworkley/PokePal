import "./button.css";

const Button = ({ onClick, buttonText }) => {
  return (
    <button type="button" onClick={onClick} className="button-default">
      {buttonText}
    </button>
  );
};

export default Button;
