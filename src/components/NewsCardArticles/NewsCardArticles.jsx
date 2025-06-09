import "./NewsCardArticles.css";
import NewsCard from "../NewsCard/NewsCard";
import { useLocation } from "react-router-dom";

function NewsCardArticles({
  cardList,
  newsArticlesCounts,
  savedNewsArticles = [],
  handleSavedNewsArticles,
  handleDeleteNewsArticles,
}) {
  const location = useLocation();
  const isNewsArticlesSavedPage = location.pathname === "/saved-news";

  const displayedNewsArticles = isNewsArticlesSavedPage
    ? savedNewsArticles
    : cardList.slice(0, newsArticlesCounts);
  console.log(cardList);
  console.log(newsArticlesCounts);

  return (
    <ul className="selected__news-articles">
      {displayedNewsArticles.map((item, index) => {
        return (
          <NewsCard
            handleSavedNewsArticles={handleSavedNewsArticles}
            handleDeleteNewsArticles={handleDeleteNewsArticles}
            item={item}
            key={index}
          />
        );
      })}
    </ul>
  );
}

export default NewsCardArticles;
