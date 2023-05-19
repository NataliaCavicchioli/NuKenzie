import "./style.css";

const Button = ({ hover, handleClick, children, backgroundColor, color }) => {
  return (
    <button
      onClick={handleClick}
      className="btn hvr-shutter-out-horizontal"
      style={{ backgroundColor, color }}
    >
      {children}
    </button>
  );
};

export default Button;
