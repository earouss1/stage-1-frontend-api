import React, { useContext } from "react";
import "./MainSavedNewsArticles.css";
import NewsCardArticles from "../NewsCardArticles/NewsCardArticles";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";

function MainSavedNewsArticles({
  isLoggedIn,
  handleSavedNewsArticles,
  savedNewsArticles = [],
  searchedNewsArticles,
  handleDeleteNewsArticles,
  newsArticlesCounts,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <main className="main__saved-news-articles">
      <NewsCardArticles
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        handleSavedNewsArticles={handleSavedNewsArticles}
        handleDeleteNewsArticles={handleDeleteNewsArticles}
        savedNewsArticles={savedNewsArticles}
        newsArticlesCounts={newsArticlesCounts}
        searchedNewsArticles={searchedNewsArticles}
      />
    </main>
  );
}

export default MainSavedNewsArticles;
