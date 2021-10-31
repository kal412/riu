import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={header ? "header active" : "header"}>

      <div className="header-inner">
      <Link to="#">
        <img className="header_logo" src={"./images/logo-small.png"} alt="logo" />
      </Link>

      <div className="menu-btn"></div>

      <div className={showMenu ? "header__nav active" : "header__nav"}>
        <div className="header__options">
          <NavLink exact={true} to="/" activeClassName="nav-active">
                Home
          </NavLink>
          <NavLink exact={true} to="#" activeClassName="nav-active">
                Projects
          </NavLink>
          <NavLink exact={true} to="#" activeClassName="nav-active">
                News
          </NavLink>
          <NavLink exact={true} to="#events" activeClassName="nav-active">
               Events
          </NavLink>
          <NavLink exact={true} to="/" activeClassName="nav-active">
                Home
          </NavLink>

          <Link to="#">Projects</Link>

          <Link to="#">News</Link>

          <Link to="#">Events</Link>

          <Link to="/blog">Blog</Link>

          <Link to="#">Vacancy</Link>

          <Link to="/about-us">About Us</Link>

          <Link
            to="#"
            className="close-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            <CloseIcon fontSize="large" />
          </Link>
        </div>
      </div>

      <div className="hamburger-menu">
          <MenuIcon fontSize="large" onClick={() => setShowMenu(!showMenu)}/>
      </div>
      

      </div>
    </div>
  );
};

export default Header;
