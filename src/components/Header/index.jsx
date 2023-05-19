import Button from "../Button";
import "./style.css";

const Header = ({ setIsLoggedIn }) => {
  const accessDashboard = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="container_header">
      <p className="container_initial_text_logo">
        <span className="container_initial_text_logo--pink">Nu</span>Kenzie
      </p>
      <div className="container_btn_header">
        <Button handleClick={accessDashboard}>Início</Button>
      </div>
    </header>
  );
};

export default Header;
