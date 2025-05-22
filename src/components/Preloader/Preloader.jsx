import "./Preloader.css";

function Preloader({}) {
  return (
    <div className="circle-preloader">
      <div className="circle-preloader__spin"></div>;
      <p className="cicle-preloader__text">Searching for News ...</p>
    </div>
  );
}

export default Preloader;
