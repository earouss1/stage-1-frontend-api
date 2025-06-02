import "./ToggleMobileMenu.css";
import { Link } from "react-router-dom";
import closeButton from "../../images/back.png";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";
import { useContext } from "react";
import signOutButton from "../../images/signout.png";

function ToggleMobileMenu({
  isShowMobileMenu,
  onSignInClick,
  toggleMobileMenu,
  isNewsArticlesSavedPage,
  isHomeNewsArticlesPage,
  handleSignout,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <nav
      className={`nav-mobile-menu ${
        isShowMobileMenu ? "nav-mobile-menu_active" : ""
      }`}
    >
      <ul className="nav-mobile-menu__logo-and-button">
        <li className="nav-mobile-menu__logo">NewsExplorer</li>
        <button
          className="nav-mobile-menu__close-button"
          type="button"
          onClick={() => toggleMobileMenu()}
        >
          <img
            src={closeButton}
            alt="Close Button"
            className="nav-mobile-menu__closebutton"
          />
        </button>
      </ul>
      {isLoggedIn ? (
        <ul className="nav-mobile-menu__links">
          <li>
            <Link
              to="/"
              className={`nav-mobile-menu__rechts ${
                isHomeNewsArticlesPage ? "nav-mobile-menu__rechts_home" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/saved-news"
              className={`nav-mobile-menu__rechts ${
                isNewsArticlesSavedPage
                  ? "nav-mobile-menu__rechts_savednews"
                  : ""
              }`}
            >
              Saved articles
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-mobile-menu__links">
          {/* <li className="nav-mobile-menu__logo">NewsExplorer</li> */}
          <li>
            <Link
              to="/"
              className={`nav-mobile-menu__rechts ${
                isHomeNewsArticlesPage ? "nav-mobile-menu__rechts_home" : ""
              }`}
            >
              Home
            </Link>
          </li>
        </ul>
      )}
      {isLoggedIn ? (
        <button
          className="nav-mobile-menu__rechts-signout-button"
          onClick={() => {
            toggleMobileMenu();
            handleSignout();
          }}
        >
          {currentUser.username}
          <img
            src={signOutButton}
            alt="Sign-Out Button"
            className="nav-mobile-menu__rechts-signout-button-icon"
          />
        </button>
      ) : (
        <button
          className="nav-mobile-menu__rechts-signin-button"
          onClick={() => {
            toggleMobileMenu();
            onSignInClick();
          }}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default ToggleMobileMenu;
