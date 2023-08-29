import slider1 from "../assets/slider.avif";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
const Hero = () => {
  return (
    <div className='carousel max-w-full'>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
              <div className="max-w-md relative top-20 lg:top-0">
                <h1 className="text-5xl text-lime-600 font-bold"> Are you searching leterature ?</h1>
                <p className="py-6 text-sm">
               "Dive into a world of wonder and enchantment where magic flows through every page. Follow young mage Elara as she discovers her true potential in a realm brimming with mythical creatures, ancient spells, and a looming darkness that threatens to consume all."
                </p>
                <button className="btn btn-secondary">Get Started &#8594;</button>
              </div>
           
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
              <div className="max-w-md relative top-20 lg:top-0">
                <h1 className="text-5xl text-lime-600 font-bold"> Science book ?</h1>
                <p className="py-6 text-sm">
              "Experience the whirlwind romance between Emily and Ethan against the backdrop of New York City's vibrant streets. From channs,fession this tale of love and destiny will sweep you off your feet."

                </p>
                <button className="btn btn-secondary">Get Started &#8594;</button>
              </div>
           
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
              <div className="max-w-md relative top-20 lg:top-0">
                <h1 className="text-5xl text-lime-600 font-bold"> Friction book ?</h1>
                <p className="py-6 text-sm">
              "Join Detective Sarah Turner as she tackles her most baffling case yet. With a mix of old-school detective work and cuttingride as you attempt to solve the enigma alongside the brilliant detective."
                </p>
                <button className="btn btn-secondary">Get Started &#8594;</button>
              </div>
           
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
              <div className="max-w-md relative top-20 lg:top-0">
                <h1 className="text-5xl text-lime-600 font-bold">Searching book ?</h1>
                <p className="py-6 text-sm">
                 "Venture into a future where humanity has reached the stars and encountered enigmatic alien civilizations. This collects tories expl technology, ethics, and the vastness of the cosmos."
                </p>
                <button className="btn btn-secondary">Get Started &#8594;</button>
              </div>
           
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
