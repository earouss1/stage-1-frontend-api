import { useContext } from "react";
import "./HeaderSavedNewsArticles.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";

function HeaderSavedNewsArticles({
  isLoggedIn,
  savedNewsArticles = [],
  handleSignOut,
  keywords,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header header__for_saved-articles">
      <Navigation isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      <div className="header__for-saved-articles">
        <h2 className="header__for-saved-articles-title">Saved articles</h2>
        <p className="header__for-saved-articles-text">
          {currentUser.username}, you have {savedNewsArticles.length} saved
          articles
        </p>
        <p className="header__for-saved-articles-keywords">
          By keywords:{" "}
          <span className="header__for-saved-articles-span-keywords">
            {keywords.length <= 2
              ? keywords.join(", ")
              : `${keywords[0]}, ${keywords[1]}, and ${
                  keywords.length - 2
                } others`}
          </span>
        </p>
      </div>
    </header>
  );
}

export default HeaderSavedNewsArticles;
