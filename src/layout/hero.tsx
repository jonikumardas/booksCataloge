import "../style/hero.css";
import book1 from "../assets/Screenshot_20.png";
import book2 from "../assets/science.jpg";
import book3 from "../assets/img.jpg";
const Hero = () => {
  return (
    <div className="container">
    <div className=" cartContainer">
      <h1 className="text-5xl">New Releases This Week</h1>
      <p>
        It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's releases offer something for everyone.
      </p>
      <button className="btn btn-accent btn-outline">explore &rarr;</button>
    </div>
    <div className="flex books">
      <div className="card">
        <img src={book1} alt="book image" />
      </div>
      <div className="card2">
        <img
          src={book2}
          className="max-h-full min-w-full"
          alt="book image two"
        />
      </div>
      <div className=" card3">
        <img src={book3} alt="latest book 3" />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
