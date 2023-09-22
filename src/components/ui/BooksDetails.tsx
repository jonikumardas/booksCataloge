import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetBooksQuery,
  useGetRevewQuery,
  usePostRevewMutation,
} from "../../redux/Api/fetures/Books/Books";
import "../../style/shere.css";
import { IBook } from "../../types/Book";
import { useAppDispatch } from "../../redux/hooks";
import { addToCard } from "../../redux/Api/fetures/CardSlice";

const BooksDetails = () => {
  // post comment here
  const [comment, setComment] = useState("");
  const { id } = useParams<{ id: string }>();
  // to get all book to show in details
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  // to add book into the card iam usng dispatch
  const dispatch = useAppDispatch();
  // to add comment in database
  const [postReview] = usePostRevewMutation();

  // comment
  const comments = useGetRevewQuery(id);
  // hendle comments here
  const handleCommentSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const reviewData = {
      _id: id,
      data: { review: comment },
    };
    // on change data to add database
    postReview(reviewData);
    setComment("");
  };

  const handleCommentChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setComment(e.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: "error not data loading"</p>;
  }

  if (!Array.isArray(data?.data)) {
    return <p>Data is not an array.</p>;
  }

  if (data.data.length === 0) {
    return <p>No books available.</p>;
  }

  const books = data.data;
  const book = books.find((book: IBook) => book._id === id);
  // console.log(book)

  return (
    <div className="hero-content bg-base-100 shadow-xl mx-auto lg:my-5 sm:my-10">
      <div className="flex-col lg:flex-row">
        <img className="m-5 rounded-sm" src={book.image} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">
            {book.Title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h4>Author: {book.Author}</h4>
          <p> {book.Description}</p>
          <p>Genre: {book.Genre}</p>
          <p>Price: ${book.price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => dispatch(addToCard(book))}
              className="btn btn-sm coustom-button mx-5"
            >
              Add to cart
            </button>
          </div>
        </div>
        <form onSubmit={handleCommentSubmit}>
          <div className="flex justify-between lg:mx-10">
            <textarea
              placeholder="Comment here"
              onChange={handleCommentChange}
              value={comment}
              className="textarea textarea-bordered textarea-md w-full"
            ></textarea>
            <button
              type="submit"
              className="btn btn-sm coustom-button mx-5 mt-5"
            >
              Comment
            </button>
          </div>
        </form>
        <div className="mx-5  py-10">
          <h3 className="text-slate-400 mx-5 font-semibold">
            All Comments here
          </h3>

          {comments.data.data.Reviews.map((comment: string) => (
            <>
              <div className="flex mt-5">
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt=" abater image"
                    />
                  </div>
                </div>
                <p className="mx-5 mt-2">{comment}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
