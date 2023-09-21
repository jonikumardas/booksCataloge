// import React from "react";
// import { IBook } from "../../types/Book";
import { Link } from "react-router-dom";
import'../../style/book.css'
import { useAppDispatch } from "../../redux/hooks";
import { addToCard } from "../../redux/Api/fetures/CardSlice";
import { toast } from "react-toast";
import { IBook } from "../../types/Book";

interface AllBooksProps {
  book: IBook;
}

const AllBooks= ({ book }:AllBooksProps) => {
  const dispatch=useAppDispatch()
  const hendleAddtoCard=(book:IBook)=>{
    dispatch(addToCard(book))
    toast('Book Added');
  }

  
  return (
    <div className=" w-96 bg-base-100 shadow-xl m-5 rounded-md">
     <figure>
        <Link to={`/bookDetails/${book._id}`}>
           <img src={book.image} alt="Shoes" style={{width:"360px", height:"320px", marginLeft:"10px"}} className="rounded-md mt-3" />
         </Link>
       </figure>
       <div className="divider"></div> 
       <div className="card-body">
         <h2 className="card-title">{book.Title}</h2>
         <p>{book.Author}</p>
         <p>{book.Description.slice(0,80)}</p>
         <p>Price: ${book.price}</p>
         <p>revew:5.0 </p>
           <button onClick={()=>hendleAddtoCard(book)} className="btn coustom-button">Add To Card</button>
        </div>
       </div>
  );
};

export default AllBooks;
