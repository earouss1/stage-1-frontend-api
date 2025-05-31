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
      <section className="main__news-cards">
        {displayedNewsArticles.length > 0 && (
          <h2 className="main__news-cards-title">Search results</h2>
        )}

        <ul className="main__news-cards-lists">
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
