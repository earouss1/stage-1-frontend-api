import { handleRequest } from "./APi";
import { APiKey } from "./Constants";

export const getNewsArticles = ({ keyword }) => {
  const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${APiKey}&from=${fromDate()}&to=${currentDate()}$pageSize=100`;
  return handleRequest(url);
};

const currentDate = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const fromDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export function getSavedNewsArticles() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        title: article.title,
        description: article.description,
        source: { name: article.source.name },
        keyword: article.title,
        // ...etc, whatever properties it's supposed to have
      },
      {
        _id: "65f7368dfb74bd6a92114c87", // I just generated this at random from a mongodb id generator website
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        title: article.title,
        description: article.description,
        source: { name: article.source.name },
        keyword: article.title,
      },
      // and have however many you want to show on the saved-news page
    ])
  );
}

export function saveNewsArticles(article) {
  console.log(article);
  // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      // Use the properties the newsAPI gives you, I just made these up
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      title: article.title,
      description: article.description,
      source: { name: article.source.name },
      keyword: article.title,
      // whatever other properties from the newsAPI-given article object you saved to the database
    });
  });
}
