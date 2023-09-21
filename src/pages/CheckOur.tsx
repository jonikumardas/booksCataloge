import { AiFillDelete } from "react-icons/ai";
import { useAppSelector } from "../redux/hooks";
import "../style/checkkOut.css";
const CheckOur = () => {
  const { books,total } = useAppSelector((state) => state.books);
  return (
    <div className="master-container">
      <div className="card cart">
        <label className="title">Your Books</label>
        <div className="products">
          {books.map((book) => (
            <div
              className="flex align-middle"
              style={{
                border: "2px solid #ffce1a",
                padding: "10px",
                margin: "10px",
              }}
            >
              <div>
                <img src={book.image} alt="book image" />
              </div>
              <div>
                <p className="mt-2 p-2">{book.Title}</p>
              </div>
              <div className="flex mt-10">
                <button className="btn btn-sm text-xl m-1 coustom-button">
                  +
                </button>
                <p className="text-xl mt-2">{book.quantity}</p>
                <button className="btn btn-sm text-xl m-1 coustom-button">
                  -
                </button>
              </div>
              <div className="mt-10">
                <button className="btn btn-sm text-xl text-red-800 m-1 coustom-button">
                  <AiFillDelete />
                </button>
              </div>
            </div>
            
          ))}
        </div>
      </div>

      <div className="card checkout mt-2 px-10">
        <label className="title">Checkout</label>
        <div className="details">
          <span>Your cart subtotal:</span>
          <span>{total}$</span>
          <span>Discount through applied coupons:</span>
          <span>0$</span>
          <span>Shipping fees:</span>
          <span>0$</span>
        </div>
        <div className="checkout--footer">
          <label className="price">
            <sup>$</sup>{total}
          </label>
          <button className="btn btn-md coustom-button">Place order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOur;
