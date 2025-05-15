import React, { useContext } from "react";
import "./Navigation.css";
import { useLocation, Link } from "react-router-dom";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";
import signoutButton from "../../images/signout.png";
import logoutButton from "../../images/logout.png";

function Navigation({ onSignInClick, isLoggedIn, handleSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const isHomeNewsArticlesPage = location.pathname === "/";
  const isNewsArticlesSavedPage = location.pathname === "/saved-news";

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
    </nav>
  );
}

export default Navigation;
