import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// import main elements
import Header from "../Header/Header";
// import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import MainSavedNewsArticles from "../MainSavedNewsArticles/MainSavedNewsArticles";
import HeaderSavedNewsArticles from "../HeaderSavedNewsArticles/HeaderSavedNewsArticles";

// import modals
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import SuccessfulSignUpModal from "../SuccessfulSignUpModal/SuccessfulSignUpModal";

// import APIs, Constants and Contexts
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";
import { signIn, signUp, handleToken } from "../../utils/APi";
// import { defaultArticles } from "../../utils/Constants";
import { getNewsArticles, saveNewsArticles } from "../../utils/NewsArticlesAPi";
import { checkFakeToken } from "../../utils/Auth";

function App() {
  // Set up state (useState)
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [searchedNewsArticles, setSearchedNewsArticles] = useState(false);
  const [newsArticlesSearchedResults, setNewsArticlesSearchedResults] =
    useState([]);
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);
  // const [hasSearchedNewsArticles, setHasSearchedNewsArticles] = useState(false);
  const [newsArticlesCounts, setNewsArticlesCounts] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  // useNavigate
  const navigate = useNavigate();

  //handle functionality of the app
  function handleSearchNewsArticles(news) {
    console.log("this is the news", news);
    setKeyword(news);
    setKeywords([...keywords, news]);

    setIsLoading(true);
    getNewsArticles({ keyword: news })
      .then((res) => {
        if (!searchedNewsArticles) {
          setSearchedNewsArticles(true);
        }
        setNewsArticlesSearchedResults(res.articles);
        setNewsArticlesCounts(3);
      })
      .catch((error) => {
        console.error("There are no articles", error);
        setNewsArticlesSearchedResults([]);
        setSearchedNewsArticles(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignIn({ email, password, username }) {
    setIsLoading(true);
    console.log({ email, password, username });
    setIsLoggedIn(true);
    setCurrentUser({ email: email, username: username });
    setIsLoading(false);
    closeActiveModal();
  }

  function handleSignUp({ email, password, username }) {
    setIsLoading(true);
    console.log({ email, password, username });
    setIsLoggedIn(true);
    setCurrentUser({ email: email, username: username });
    setIsLoading(false);
    closeActiveModal();
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setCurrentUser({});
    setSavedNewsArticles([]);
    navigate("/");
  }

  function handleSavedNewsArticles(article) {
    if (!currentUser) {
      return;
    }
    console.log(keyword);
    // Check if article is already saved
    const checkIfSavedNewsArticles = savedNewsArticles.some(
      (news) => news.title === article.title
    );
    console.log(checkIfSavedNewsArticles);
    //  if so, remove it
    if (checkIfSavedNewsArticles) {
      return;
    }
    // If not
    //   then save
    article.keyword = keyword;
    saveNewsArticles(article).then(() => {
      console.log(article);
      console.log([...savedNewsArticles, article]);
      setSavedNewsArticles([...savedNewsArticles, article]);
      // console.log([...savedNewsArticles, article]);
    });
  }

  function handleDeleteNewsArticles(deletedArticle) {
    // const {deletedNewsArticles} = useContext(CurrentUserContext)
    const filteredNewsArticles = savedNewsArticles.filter((news) => {
      console.log("this is the news", news);
      console.log("u deleted me", deletedArticle);
      return news.title !== deletedArticle.title;
    });

    console.log("filteredNewsArticles", filteredNewsArticles);
    setSavedNewsArticles(filteredNewsArticles);

    // filteredNewsArticles.filter((news) => {
    //   news.title !== deletedArticle.title;
    // });
    //});
  }

  function handleNewsArticlesCounts() {
    setNewsArticlesCounts((prevNews) => prevNews + 3);
  }

  // handle modals
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignInModal = () => {
    setActiveModal("sign-in");
    console.log("modal");
  };

  const handleSignUpModal = () => {
    setActiveModal("sign-up");
  };

  const handleSuccessfulSignUpModal = () => {
    setActiveModal("sign-up-successfully");
  };

  // useEffect CurrentUser
  useEffect(() => {
    checkFakeToken().then(({ data }) => {
      setCurrentUser(data);
    });
  }, [isLoggedIn]);

  // useEffect for modal
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };
    const handleOverlay = (event) => {
      if (event.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlay);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
    >
      <div className="app">
        <div className="app__page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    onSignInClick={handleSignInModal}
                    onNewsArticlesSearched={handleSearchNewsArticles}
                    isLoggedIn={isLoggedIn}
                    onSignUpClick={handleSignUpModal}
                    handleSignOut={handleSignOut}
                    keywords={keywords}
                  />
                  <Main
                    cardList={newsArticlesSearchedResults}
                    isLoading={isLoading}
                    isLoggedIn={isLoggedIn}
                    handleSavedNewsArticles={handleSavedNewsArticles}
                    handleNewsArticlesCounts={handleNewsArticlesCounts}
                    searchedNewsArticles={searchedNewsArticles}
                    handleDeleteNewsArticles={handleDeleteNewsArticles}
                    newsArticlesCounts={newsArticlesCounts}
                    keywords={keywords}
                  />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <>
                  <HeaderSavedNewsArticles
                    isLoggedIn={isLoggedIn}
                    savedNewsArticles={savedNewsArticles}
                    handleSignOut={handleSignOut}
                    currentUser={currentUser}
                    newsArticlesCounts={newsArticlesCounts}
                    keywords={keywords}
                  />
                  <MainSavedNewsArticles
                    isLoggedIn={isLoggedIn}
                    savedNewsArticles={savedNewsArticles}
                    handleSavedNewsArticles={handleSavedNewsArticles}
                    handleDeleteNewsArticles={handleDeleteNewsArticles}
                    searchedNewsArticles={searchedNewsArticles}
                    handleNewsArticlesCounts={handleNewsArticlesCounts}
                    newsArticlesCounts={newsArticlesCounts}
                    keywords={keywords}
                  />
                </>
              }
            />
          </Routes>
          <Footer />
          <SignInModal
            isOpen={activeModal === "sign-in"}
            onClose={closeActiveModal}
            onSignInClick={handleSignInModal}
            onSignUpClick={handleSignUpModal}
            handleSignIn={handleSignIn}
          />
          <SignUpModal
            isOpen={activeModal === "sign-up"}
            onClose={closeActiveModal}
            onSignUpClick={handleSignUpModal}
            onSignInClick={handleSignInModal}
            handleSignUp={handleSignUp}
            onSuccessfulSignUpModal={handleSuccessfulSignUpModal}
          />
          <SuccessfulSignUpModal
            isOpen={activeModal === "sign-up-successfully"}
            onClose={closeActiveModal}
            handleSignIn={handleSignIn}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
