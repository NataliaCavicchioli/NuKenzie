import "./style.css";
import { FiSun } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="container_footer">
      <p className="container_footer_p">Designed by </p>
      <p className="container_footer_name">
        Natalia Cavicchioli <FiSun />
      </p>
    </footer>
  );
};

export default Footer;
