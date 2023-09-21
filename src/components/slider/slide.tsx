import "../../style/shere.css";
import { IBook } from "../../types/Book";

const Slide: React.FC<{ slidedata: IBook }> = ({ slidedata }) => {
  // console.log(slidedata);
  const { image, Title, Description, price, Author } = slidedata;
  return (
    <>
      <div className="lg:flex justify-between w-96 border-4 rounded-lg my-20 bg-white">
        <div className="image lg:w-80 ">
          <img src={image} className="lg:w-60 h-64 w-80 mx-auto" alt="boock image " />
        </div>
        <div className="m-3">
            <h2 className="card-title">{Title.slice(0, 10)}</h2>
            <h4 className="text-sm">{Author.slice(0, 10)}</h4>
            <p>{Description.slice(0, 80)}</p>
            <p>Price:${price}</p>
            <p>Revews:5</p>
            <div className="card-actions justify-end">
              <button className="btn coustom-button">Add to card</button>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Slide;
