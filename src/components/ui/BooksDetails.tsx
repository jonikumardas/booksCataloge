import { useParams } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/Api/fetures/Books/Books";
import "../../style/shere.css";
import { IBook } from "../../types/Book";
const BooksDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error:" error not data loading"</p>;
  }

  if (!Array.isArray(data?.data)) {
    return <p>Data is not an array.</p>;
  }

  if (data.data.length === 0) {
    return <p>No books available.</p>;
  }
  const books = data.data;
  const book = books.find((book: IBook) => book._id == id);
  return (
    <div className=" hero-content bg-base-100 shadow-xl mx-auto lg:my-10 sm:my-10" >
      <div className=" flex-col lg:flex-row">
        <img className="m-5 rounded-sm" src={book.image} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">
            {book.Title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h4>Auther: {book.Author}</h4>
          <p> {book.Description}</p>
          <p>Genre: {book.Genre}</p>
          <p>Price: ${book.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm coustom-button mx-5">Add to cart</button>
          </div>
        </div>


        <div className="flex justify-between lg:mx-10">
        <textarea
          placeholder="Comment here"
          className="textarea textarea-bordered textarea-md w-full"
        ></textarea>
        <button type="submit" className="btn btn-sm coustom-button mx-5">
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
     
    </div>
  );
};

export default BooksDetails;
