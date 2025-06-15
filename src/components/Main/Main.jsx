import "./Main.css";
import NewsCardArticles from "../NewsCardArticles/NewsCardArticles";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
// import NotFoundWithText from "../../images/NotFoundWithText.png";
// import { defaultArticles } from "../../utils/constants";
import NotFoundImage from "../../images/NotFound.svg";

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
            src={NotFoundImage}
            alt="Not Found"
            className="main__news-cards-notfound-image"
          />
          <h3 className="main__news-cards-notfound-text">Nothing found</h3>
          <p className="main__news-cards-notfound-subtext">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      )}
      <section className="main__news-cards">
        {displayedNewsArticles.length > 0 && (
          <h2 className="main__news-cards-title">Search results</h2>
        )}
        <NewsCardArticles
          cardList={cardList}
          displayedNewsArticles={displayedNewsArticles}
          isLoggedIn={isLoggedIn}
          handleSavedNewsArticles={handleSavedNewsArticles}
          newsArticlesCounts={newsArticlesCounts}
          handleDeleteNewsArticles={handleDeleteNewsArticles}
        />
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
