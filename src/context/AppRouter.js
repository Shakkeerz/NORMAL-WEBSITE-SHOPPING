import React from "react";
import { Routes, Route } from "react-router-dom";
import MoreBooks from "../components/MoreBooks";
import Books from "../pages/Books";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/morebooks" element={<MoreBooks />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default AppRouter;
