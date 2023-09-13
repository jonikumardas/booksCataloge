import "../style/hero.css";
import "../style/shere.css";
import book1 from "../assets/Screenshot_20.png";
import book2 from "../assets/science.jpg";
import book3 from "../assets/img.jpg";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 shadow-sm">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar-group -space-x-7">
          <div className="z-30 ">
            <div >
              <img
                src={book1}
                className="rounded-xl w-36 h-40 lg:w-72 lg:h-72 borderImage1"
              />
            </div>
          </div>
          <div className="z-20 shadow-lg hover:z-30 ">
            <div >
              <img
                src={book2}
                className="rounded-xl w-36 mt-1 h-36 lg:w-72 lg:h-64 borderImage2"
              />
            </div>
          </div>
          <div className="z-10 shadow-lg hover:z-40">
            <div>
              <img
                src={book3}
                className="rounded-xl w-36 h-32 mt-2 lg:w-72 lg:h-60 borderImage3 "
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl">New Releases This Week</h1>
          <p>
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world. From heart-pumping
            thrillers to captivating memoirs, this week's releases offer
            something for everyone.
          </p>
          <button className="btn mt-2 coustom-button">
            explore more &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
