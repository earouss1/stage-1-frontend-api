import "./ToggleMobileMenu.css";
import { Link } from "react-router-dom";
import closeButton from "../../images/back.png";
// import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";
// import { useContext } from "react";
// import signOutButton from "../../images/signout.png";

function ToggleMobileMenu({
  isShowMobileMenu,
  onSignInClick,
  toggleMobileMenu,
  //   isNewsArticlesSavedPage,
  //   isHomeNewsArticlesPage,
  //   handleSignout,
  //   isLoggedIn,
}) {
  //   const { currentUser } = useContext(CurrentUserContext);

  return (
    <nav
      className={`nav-mobile-menu ${
        isShowMobileMenu ? "nav-mobile-menu_active" : ""
      }`}
    >
      <div className="nav-mobile-menu-links">
        <h2 className="nav-mobile-menu__logo">NewsExplorer</h2>
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
      </div>
      <div className="nav-mobile-menu__rechts">
        <Link to="/" className="nav-mobile-menu__rechts-home">
          Home
        </Link>
        <button
          className="nav-mobile-menu__rechts-signin-button"
          onClick={onSignInClick}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default ToggleMobileMenu;
