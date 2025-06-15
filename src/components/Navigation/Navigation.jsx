import { useContext, useState } from "react";
import "./Navigation.css";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";
import signoutButton from "../../images/signout.png";
import logoutButton from "../../images/logout.png";
import ToggleMobileMenu from "../ToggleMobileMenu/ToggleMobileMenu";
import { NavLink } from "react-router-dom";

function Navigation({
  onSignInClick,
  isLoggedIn,
  handleSignOut /*activeModal*/,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const isHomeNewsArticlesPage = location.pathname === "/";
  const isNewsArticlesSavedPage = location.pathname === "/saved-news";

  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setIsShowMobileMenu(!isShowMobileMenu);

  // const toggleMobileMenu = () => {
  //   if (!activeModal) {
  //     setIsShowMobileMenu(null);
  //   }
  //   return setIsShowMobileMenu(!isShowMobileMenu);
  // };

  return (
    <nav
      className={`nav ${
        isNewsArticlesSavedPage ? "nav_news-articles_saved" : ""
      }`}
    >
      <NavLink
        to="/"
        className={`nav__logo ${
          isNewsArticlesSavedPage ? "nav__logo-news-articles_saved" : ""
        }`}
      >
        NewsExplorer
      </NavLink>

      <div className="nav__rechts">
        <NavLink
          to="/"
          className={`nav__rechts-home ${
            !isNewsArticlesSavedPage ? "nav__rechts-home_active" : ""
          }`}
        >
          Home
        </NavLink>
        {!isLoggedIn && isHomeNewsArticlesPage ? (
          <button
            onClick={onSignInClick}
            type="button"
            className="nav__rechts-button-to-signin"
          >
            Sign in
          </button>
        ) : (
          <div className="nav__rechts-news-articles-signin">
            <NavLink
              to="/saved-news"
              className={`nav__rechts-news-articles-saved ${
                isLoggedIn && !isHomeNewsArticlesPage
                  ? "nav__rechts-news-articles-saved_active"
                  : ""
              }`}
            >
              Saved articles
            </NavLink>
            <button
              className={`nav__rechts-button-signout ${
                isLoggedIn && isHomeNewsArticlesPage
                  ? "nav__rechts-button-signout_home"
                  : ""
              }`}
              onClick={handleSignOut}
            >
              {currentUser.username}
              <img
                src={
                  isLoggedIn && isHomeNewsArticlesPage
                    ? logoutButton
                    : signoutButton
                }
                alt="Signout Button"
                className="nav__rechts-button-image"
              />
            </button>
          </div>
        )}
      </div>
      {currentUser && isHomeNewsArticlesPage && (
        <button
          className="nav-mobile-menu__toggle-button"
          onClick={toggleMobileMenu}
        ></button>
      )}
      {isLoggedIn && currentUser && isNewsArticlesSavedPage && (
        <button
          className="nav-mobile-menu__savednews-button"
          onClick={toggleMobileMenu}
          //   onClick={() => {
          //     if (activeModal) {
          //       setIsShowMobileMenu(null);
          //     }
          //     return toggleMobileMenu;
          //   }}
        ></button>
      )}
      {isShowMobileMenu && (
        <ToggleMobileMenu
          onSignInClick={onSignInClick}
          isShowMobileMenu={isShowMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          handleSignout={handleSignOut}
          isLoggedIn={isLoggedIn}
          isHomeNewsArticlesPage={isHomeNewsArticlesPage}
          isNewsArticlesSavedPage={isNewsArticlesSavedPage}
          currentUser={currentUser?.username}
        />
      )}
    </nav>
  );
}

export default Navigation;
