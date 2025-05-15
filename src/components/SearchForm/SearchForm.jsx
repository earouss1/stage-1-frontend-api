import React, { useState } from "react";
import "./SearchForm.css";
// import useForm from "../../hooks/useForm";

function SearchForm({ onNewsArticlesSearched }) {
  const [news, setNews] = useState("");

  const handleChange = (event) => {
    setNews(event.target.value);
  };

  const handleNewsArticlesSearchSubmit = (event) => {
    event.preventDefault();
    if (!news.trim()) {
      return;
    }
    onNewsArticlesSearched(news);
  };

  return (
    <div className="form">
      <form
        action=""
        className="form__articles"
        onSubmit={handleNewsArticlesSearchSubmit}
      >
        <input
          type="text"
          className="form__articles-input"
          placeholder="Enter topic"
          required
          aria-label="News Search"
          id="search"
          name="search"
          value={news}
          onChange={handleChange}
        />
        <button className="form__articles-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
