import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={"./images/logo-small.png"} alt="logo" />
      </Link>

      <div className="header__nav">
        <div className="header__option">
          <Link to="/">Home</Link>
        </div>
        <div className="header__option">
          <Link to="#">Projects</Link>
        </div>
        <div className="header__option">
          <Link to="#">News</Link>
        </div>
        <div className="header__option">
          <Link to="#">Events</Link>
        </div>
        <div className="header__option">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="header__option">
          <Link to="#">Vacancy</Link>
        </div>
        <div className="header__option">
          <Link to="#">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
