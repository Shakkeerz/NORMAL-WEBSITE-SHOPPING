import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

// this context storing all states and managing
const ContextProvider = ({ children }) => {
  const [name, setName] = useState("shakkeer");
  const [address, setAddress] = useState({
    place: "mappuram",
    pin: 676306,
    address: "palliyath kunnatheril house po mampuram",
  });
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [BookLimit, setBookLimit] = useState(10);

  const fetchBooks = async (limit) => {
    console.log(limit)
    console.log(BookLimit);
    setLoading(true);
    await axios
      .get(`https://example-data.draftbit.com/books?_limit=${BookLimit}`)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(console.log(error));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // const bookLimitFun=(e)=>{
  //   setBookLimit(50)
  //   console.log(BookLimit)
  // }
  // useEffect(()=>{
  //   bookLimitFun()
  //   // fetchBooks()

  // },[bookLimitFun])

  return (
    <AppContext.Provider
      value={{
        name,
        address,
        books,
        error,
        loading,
        fetchBooks,
        BookLimit,
        setBookLimit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
