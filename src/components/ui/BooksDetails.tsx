// import { useParams } from "react-router-dom";
import "../../style/shere.css";
const BooksDetails = () => {
  //   const params = useParams();
  return (
    <div className="max-w-lg bg-base-100 shadow-xl mx-auto my-32">
      <div className="hero-content flex-col lg:flex-row">
        <figure>
          <img className="m-5 rounded-sm"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h4>Auther:Mc Khalumans</h4>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>Price:$50</ p>
          <div className="card-actions justify-end">
            <div className="btn btn-sm coustom-button mx-5">Add to cart</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:mx-10 px-5">
      <textarea placeholder="Comment here" className="textarea textarea-bordered textarea-md w-full" ></textarea>
        <button type="submit" className="btn coustom-button mx-5">
          Comment
        </button>
      </div>
      <div className="mx-5  py-10">
        <h3 className="text-slate-400 mx-5 font-semibold">All Comments here</h3>
        <p>shoes does he choose</p>
        <p>dam koto </p>
        <p>Amer onk valo lagc choose</p>
        <p>best chose forever choose</p>
        <p>dam ta onk basi hoiya gesa</p>
      </div>
      
    </div>
  );
};

export default BooksDetails;
