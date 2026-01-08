import styles from "./Header.module.css";
import logo from "../../assets/adsmockup_logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt={"Ads mockup logo"} />
      <span>
        <strong>ads</strong>mockup
      </span>
    </header>
  );
};

export default Header;
