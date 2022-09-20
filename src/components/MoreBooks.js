import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BookCard from "./BookCard";

function MoreBooks() {
  const { books, loading, error } = useContext(AppContext);
  return (
    <div className="relative p-5">
      <Link to="/">
        <p className="absolute cursor-pointer hover:text-blue-500">Back page</p>
      </Link>
      <div className="flex gap-2 flex-wrap w-full mt-8 ">
        {loading && (
          <div className="text-center font-bold text-5xl"> Loading...</div>
        )}
        {error && <div>Error</div>}

        {books?.map((book) => {
          const { id, title, image_url } = book;
          return (
            <div key={id}>
              <div className="w-40">
                <img src={image_url} alt={title} className="w-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreBooks;
