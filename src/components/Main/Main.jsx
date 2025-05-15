import React from "react";
import "./Main.css";
import NewsCardArticles from "../NewsCardArticles/NewsCardArticles";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFoundWithText from "../../images/NotFoundWithText.png";
// import { defaultArticles } from "../../utils/constants";

function Main({
  cardList,
  isLoggedIn,
  isLoading,
  handleSavedNewsArticles,
  handleNewsArticlesCounts,
  searchedNewsArticles,
  newsArticlesCounts,
  handleDeleteNewsArticles,
}) {
  const displayedNewsArticles = cardList.slice(0, newsArticlesCounts);
  console.log(newsArticlesCounts, displayedNewsArticles.length);
  return (
    <main className={`${searchedNewsArticles ? "main" : ""}`}>
      <section className="main__news-cards">
        {isLoading && <Preloader />}
        {searchedNewsArticles && displayedNewsArticles.length === 0 && (
          <div className="main__news-cards-notfound">
            <img
              src={NotFoundWithText}
              alt="Not Found"
              className="main__news-cards-notfound-image"
            />
          </div>
        )}
        {displayedNewsArticles.length > 0 && (
          <p className="main__news-cards-title">Search results</p>
        )}

        <ul className="news__cards-list">
          <NewsCardArticles
            cardList={cardList}
            displayedNewsArticles={displayedNewsArticles}
            isLoggedIn={isLoggedIn}
            handleSavedNewsArticles={handleSavedNewsArticles}
            newsArticlesCounts={newsArticlesCounts}
            handleDeleteNewsArticles={handleDeleteNewsArticles}
          />
        </ul>
        {newsArticlesCounts < cardList.length && (
          <button
            className="main__news-cards-button"
            onClick={handleNewsArticlesCounts}
          >
            Show more
          </button>
        )}
        {/* </ul> */}
      </section>
      <About />
    </main>
  );
}

export default Main;
