import BookSlider from "../components/slider/Slider";

const Fetures = () => {
  return (
    <div className="sm:mt-20">
      <p className="lg:ms-40 text-gray-800 text-3xl font-light ">Top seller</p>
      <select id="dropdown" className=" lg:ms-40 m-2 select select-info w-full max-w-xs  ">
        <option value="option1">Fiction</option>
        <option value="option2">Romance</option>
        <option value="option3">Mystrey</option>
        <option value="option3">Horror</option>
      </select>
     <div>
        <BookSlider/>
     </div>
      
    </div>
  );
};

export default Fetures;
