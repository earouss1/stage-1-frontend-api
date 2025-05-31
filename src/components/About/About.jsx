import "./About.css";
import picofauthor from "../../images/img1.jpg";

function About() {
  return (
    <section className="about">
      <img src={picofauthor} alt="author pic" className="about__image" />
      <div className="about__content">
        <h3 className="about__content-title">About the author</h3>
        <p className="about__content-text">
          {" "}
          The author's name is Ridy Rousseau. The author is in a journey to
          become a full-stack Software Engineer at Tripleten. Throughout the
          program, he studied and continue to learn the following programming
          languages HTML, CSS, JavaScript and its integrated libraries such as
          React.js, Node.js, Vite, Express.js, and the use of Databases such as
          MongoDB. He created website with responsive layout with Flexbox and
          Grid, Media queries, the use of BEM methodology. In addition, he
          acquired full knowledge Git, GitHub, Repositories, and IDE such as VS
          Code.
        </p>
        <p className="about__content-sub-text">
          This App is built using React.jsx (Vite)...
        </p>
      </div>
    </section>
  );
}

export default About;
