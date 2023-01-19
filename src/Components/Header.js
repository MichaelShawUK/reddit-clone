import Logo from "./Logo";
import Search from "./Search";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <div id="header-btns">
        <button id="app-btn">Get App</button>
        <button id="login-btn">Log In</button>
      </div>
    </div>
  );
};

export default Header;
