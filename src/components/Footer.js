import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-head">
          <Link to="#">
            <img
              className="footer_logo"
              src={"./images/logo-small.png"}
              alt="logo"
            />
          </Link>

          <div className="footer-location">
            <p>
              <LocationOnIcon /> <span>Kupondole,Lalitpur,Nepal</span>
            </p>
          </div>

          <div className="footer-call">
            <p>
              <CallIcon /> <span>+987456123 / 01-123456</span>
            </p>
          </div>

          <div className="footer-mail">
            <p>
              <EmailIcon /> <span>riu@acem.org.np</span>
            </p>
          </div>
        </div>

        <div className="footer-about">
          <h4>About RIU</h4>
          <Link to="#">Lorem Ipsum</Link>
          <Link to="#">Lorem Ipsum</Link>
          <Link to="#">Lorem Ipsum</Link>
        </div>

        <div className="footer-projects">
          <h4>Projects</h4>
          <Link to="#">Lorem Ipsum</Link>
          <Link to="#">Lorem Ipsum</Link>
        </div>

        <div className="footer-news">
          <h4>News</h4>
          <Link to="#">Lorem Ipsum</Link>
          <Link to="#">Lorem Ipsum</Link>
          <Link to="#">Lorem Ipsum</Link>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="#">Lorem Ipsum</Link>
          <Link to="#">Lorem Ipsum</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>
            riu.org.np | &copy; Research and Innovation Unit, All Rights
            Reserved
          </p>
        </div>

        <div className="footer-icons">
          <FacebookIcon />
          <TwitterIcon />
          <GoogleIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
