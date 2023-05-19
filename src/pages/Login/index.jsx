import initialImg from "../../assets/Group 262.svg";

import "./style.css";
import Button from "../../components/Button";

const Login = ({ setIsLoggedIn }) => {
  const accessDashboard = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <div className="container_initial">
        <div className="container_initial_text">
          <p className="container_initial_text_logo">
            <span className="container_initial_text_logo--pink">Nu</span>Kenzie
          </p>
          <h1 className="container_initial_text_title">
            Centralize o controle das suas finanças
          </h1>

          <p>De forma rápida e segura.</p>
          <div className="container_btn_login">
            <Button
              hover="hvr-shutter-out-horizontal"
              handleClick={accessDashboard}
              color="#fff"
              backgroundColor="#fd377e"
            >
              Iniciar
            </Button>
          </div>
        </div>
        <div className="container_initial_img">
          <img src={initialImg} alt="Imagem decorativa" />
        </div>
      </div>
    </>
  );
};

export default Login;
