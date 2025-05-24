import { useContext } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { CurrentUserContext } from "../../Contexts/CurrentUserContexts";

function Header({
  onSignInClick,
  onNewsArticlesSearched,
  handleSignOut,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header header_type_home">
      <div className="header__home">
        <Navigation
          onSignInClick={onSignInClick}
          currentUser={currentUser}
          handleSignOut={handleSignOut}
          isLoggedIn={isLoggedIn}
        />
      </div>
      <div className="header__page">
        <h1 className="header__title">What's going on in the world?</h1>
        <h2 className="header__sub-title">
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
        <SearchForm onNewsArticlesSearched={onNewsArticlesSearched} />
      </div>
    </header>
  );
}

export default Header;
