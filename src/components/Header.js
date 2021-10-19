import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src={"./images/logo.png"} alt="logo" />

      <div className="header__nav">
        <div className="header__option">Home</div>
        <div className="header__option">Projects</div>
        <div className="header__option">News</div>
        <div className="header__option">Events</div>
        <div className="header__option">Blog</div>
        <div className="header__option">Vacancy</div>
        <div className="header__option">About Us</div>
      </div>
    </div>
  );
};

export default Header;
