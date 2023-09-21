// import React from "react";
import AllBooks from "../components/ui/AllBooks";
import { useGetBooksQuery } from "../redux/Api/fetures/Books/Books";
import { IBook } from "../types/Book";
import "../style/book.css";
import { NavLink } from "react-router-dom";

const Books = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error:somthings is wrong</p>;
  }

  if (!Array.isArray(data?.data)) {
    return <p>Data is not an array.</p>;
  }

  if (data.data.length === 0) {
    return <p>No books available.</p>;
  }
  return (
    <div>
      <p className="text-center text-3xl text-slate-700 font-semibold p-4">
        Letest Books
      </p>

      <div className="flex flex-wrap mx-auto justify-evenly">
        {data.data.map((book: IBook) => (
          <AllBooks key={book._id} book={book} />
        ))}
      </div>
      <div className="flex mx-auto justify-center my-5 ">
        <NavLink to="">
        < button className="join-item btn mx-2 coustom-button ">1</button>
        </NavLink>
       <NavLink to =""><button className="join-item btn mx-2 coustom-button ">2</button></NavLink> 
       <NavLink to=""><button className="join-item btn mx-2 coustom-button ">3</button></NavLink> 
        <NavLink to=""><button className="join-item btn mx-2 coustom-button ">4</button></NavLink>
      </div>
    </div>
  );
};

export default Books;
