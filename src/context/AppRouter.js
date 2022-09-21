import React from "react";
import { Routes, Route } from "react-router-dom";
import FullBookDetails from "../components/FullBookDetails";
import MoreBooks from "../components/MoreBooks";
import Params from "../components/Params";
import Books from "../pages/Books";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books/>} />

                {/* path="/morebooks/:book_count" */}
        <Route path="/morebooks" element={<MoreBooks/>} />
        
        <Route path="*" element={<PageNotFound/>} />

        <Route path="/params/:bookId" element={<Params/>}/>
        <Route path='/fullbookdetails/:id' element={<FullBookDetails/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
