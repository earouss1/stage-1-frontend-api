import { useContext, useState } from "react";
import "./Navigation.css";
import { useLocation, Link } from "react-router-dom";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";
import signoutButton from "../../images/signout.png";
import logoutButton from "../../images/logout.png";
import ToggleMobileMenu from "../ToggleMobileMenu/ToggleMobileMenu";

function Navigation({ onSignInClick, isLoggedIn, handleSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const isHomeNewsArticlesPage = location.pathname === "/";
  const isNewsArticlesSavedPage = location.pathname === "/saved-news";

  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setIsShowMobileMenu(!isShowMobileMenu);

  return (
    <nav
      className={`nav ${
        isNewsArticlesSavedPage ? "nav__news-articles-saved" : ""
      }`}
    >
      <Link
        to="/"
        className={`nav__logo ${
          isNewsArticlesSavedPage ? "nav__logo-news-articles_saved" : ""
        }`}
      >
        NewsExplorer
      </Link>

      <div className="nav__rechts">
        <Link
          to="/"
          className={`nav__rechts-home ${
            isNewsArticlesSavedPage ? "nav__rechts-home_saved" : ""
          }`}
        >
          Home
        </Link>
        {!isLoggedIn && isHomeNewsArticlesPage ? (
          <button
            onClick={onSignInClick}
            type="button"
            className="nav__rechts-button-to-signin"
          >
            Sign in
          </button>
        ) : (
          <div className="nav__rechts_news-articles-signin">
            <Link
              to="/saved-news"
              className={`nav__rechts_news-articles-saved ${
                isLoggedIn && isHomeNewsArticlesPage
                  ? "nav__rechts_news-articles-saved_home"
                  : ""
              }`}
            >
              Saved articles
            </Link>
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
          className="nav-mobile-menu__homepage-button"
          onClick={toggleMobileMenu}
        ></button>
      )}
      {isLoggedIn && currentUser && isNewsArticlesSavedPage && (
        <button
          className="nav-mobile-menu__savednews-button"
          onClick={toggleMobileMenu}
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
          currentUser={currentUser.username}
        />
      )}
    </nav>
  );
}

export default Navigation;
