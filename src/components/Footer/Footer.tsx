import styles from "./Footer.module.css";
import logo from "../../assets/maia_logo_black.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://maiamarketing.se/" target="_blank">
        Powered by
        <img src={logo} alt="Maia Marketing logo" />
      </a>
    </footer>
  );
};

export default Footer;
