import "../style/hero.css";
import "../style/shere.css";
import book1 from "../assets/Screenshot_20.png";
import book2 from "../assets/science.jpg";
import book3 from "../assets/img.jpg";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="cube-container">
          <div className="cube">
            <div className="face front">
              <img
                src={book1}
                style={{ width: "200px", height: "200px" }}
                alt="book"
              />
            </div>
            <div className="face back">
              <img
                src={book2}
                style={{ width: "200px", height: "200px" }}
                alt="boock"
              />
            </div>
            <div className="face right">
              <img
                src={book3}
                alt="book"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="face left">
              <img
                src={book1}
                alt="book"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="face top">
              <img
                src={book2}
                alt="boock"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="face bottom">
              <img
                src={book3}
                alt="book"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-5xl font-bold">New Releases This Week!</h1>
          <p className="py-6">
            {" "}
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world.From heart-pumping thrillers
            to captivating memoirs, this week's releases offer something for
            everyone..
          </p>
          <NavLink to="/books"><button className="btn coustom-button">explore more &rarr;</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
