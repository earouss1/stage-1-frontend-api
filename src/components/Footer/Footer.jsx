import "./Footer.css";
import { Link } from "react-router-dom";
import githubIcon from "../../images/github.png";
import facebookIcon from "../../images/facebook.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__signature">
        &#169; 2025 Supersite, Powered by News API
      </p>
      <div className="footer__to-links">
        <div className="footer__to">
          <Link
            to="/"
            className="footer__to-first-links footer__to-first-links_home"
          >
            Home
          </Link>
          <a
            href="https://tripleten.com/"
            className="footer__to-first-links footer__to-first-links_tripleten"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tripleten
          </a>
        </div>
        <div className="footer__to-icons">
          <a
            href="https://github.com/"
            className="footer__to-icons-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="Github Icon"
              className="footer__to-icons-links"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            className="footer__to-icons-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="footer__to-icons-links"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
