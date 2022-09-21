import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function FullBookDetails() {
  const span_style = "font-bold underline mr-2";
  const { } = useContext(AppContext);
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState("");
        const [loading,setLoading] = useState(false)
  const fetchBookDetails = async () => {
    setLoading(true)
    await axios
      .get(`https://example-data.draftbit.com/books?_limit=10&id=${id}`)
      .then((res) => {
        setBookDetails(res.data);
        console.log(bookDetails);
        setLoading(false)
      });

  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <div className="bg-slate-300 relative">
      <Link
        to="/"
        className="absolute  right-4 top-4 px-2  bg-red-400 hover:bg-red-500 hover:text-white"
      >
        {" "}
        <button type="button">Close</button>
      </Link>
      {loading && <div className="text-center flex h-screen justify-center items-center font-bold">
        Loading...
      </div>}
      {Array.from(bookDetails)?.map((book) => {
        const {
          title,
          image_url,
          authors,
          description,
          genres,
          rating,
          num_pages,
        } = book;
        return (
          <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row p-10  md:items-center justify-center  border-4 border-slate-500 ">
            <div className="md:w-1/2">
              <img src={image_url} alt={title} />
            </div>
            <div className="mt-5 md:mt-0 md:w-1/2 flex flex-col gap-2 text-sm md:text-lg">
              <h1>
                <span className={span_style}>Book Name:-</span>
                {title}
              </h1>
              <p>
                <span className={span_style}>Author:-</span>
                {authors}
              </p>
              <p>{rating}</p>
              <p>
                <span className={span_style}>No.of pages:-</span>
                {num_pages}
              </p>
              <p>{genres}</p>
              <div>
                <span className={span_style}>About this book :-</span>
                {description}
              </div>
              <div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FullBookDetails;
