import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link} from "react-router-dom";
import { decrement, increment, removeFromCart } from "../../redux/Api/fetures/CardSlice";
import { IBook } from "../../types/Book";
const Card = () => {
  const {books}=useAppSelector((state)=>state.books)
  const dispatch=useAppDispatch()
  const hendleIncrement=(book:IBook)=>{
    dispatch(increment(book))
    
  }
  const hendleDecrement=(book:IBook)=>{
    dispatch(decrement(book))

  }
  return (
    <>
    <p className="text-center text-2xl">Total Books: {books.length}</p>
    {
      books.map((book)=> <div className="flex align-middle" style={{border:"2px solid #ffce1a",padding:"10px", margin:"10px"}}>
      <div>
        <img src={book.image} alt="" />
      </div>
      <div>
        <p className="mt-2">{book.Title.slice(0,9)}</p>
      </div>
      <div>
      <div className="flex">
        <button onClick={()=>hendleIncrement(book)} className="btn btn-sm text-xl m-1 coustom-button">+</button>
        <p className="text-xl mt-2">{book.quantity}</p>
        <button onClick={()=>hendleDecrement(book)}  className="btn btn-sm text-xl m-1 coustom-button" >-</button>
      </div>
      <p className="text-center">price:{book.price} $</p>
      </div>
      <div>
        <button onClick={()=>dispatch(removeFromCart(book))} className="btn btn-sm text-xl text-red-800 m-1 coustom-button">
          <AiFillDelete />
        </button>
      </div>
    </div>)
    }
    <button  className="btn btn-md coustom-button"><Link to="/check-out">checkout</Link> </button>
    </>
    
  );
};

export default Card;
