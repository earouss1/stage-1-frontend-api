import React, { useContext } from "react";
import "./HeaderSavedNewsArticles.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";

function HeaderSavedNewsArticles({
  isLoggedIn,
  savedNewsArticles = [],
  handleSignOut,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const keywordCounts = {};
  savedNewsArticles.forEach((n) => {
    if (!n.keyword) {
      return;
    }
    keywordCounts[n.keyword] = (keywordCounts[n.keyword] || 0) + 1;
  });

  const sortedKeywords = Object.entries(keywordCounts)
    .sort(([, n], [, m]) => m - n)
    .map(([keyword]) => keyword);

  const formattedSortedKeywords =
    sortedKeywords.length > 3
      ? `${sortedKeywords.slice(0, 3).join(", ")}, and ${
          sortedKeywords.length - 3
        } others`
      : sortedKeywords.join(", ");

  return (
    <header className="header header__for_saved-articles">
      <Navigation isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      <div className="header__for-saved-articles">
        <h2 className="header__for-saved-articles-title">Saved articles</h2>
        <p className="header__for-saved-articles-text">
          {currentUser.usernane}, you have {savedNewsArticles.lenght} saved
          articles
        </p>
        <p className="header__for-saved-articles-keywords">
          By keywords:{" "}
          <span className="header__for-saved-articles-span-keywords">
            {formattedSortedKeywords}
          </span>
        </p>
      </div>
    </header>
  );
}

export default HeaderSavedNewsArticles;
