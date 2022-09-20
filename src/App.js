import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./context/AppRouter";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <>
      <Router>

        <div className="w-4/5 m-auto bg-slate-50 font-mono">
          <ProductsContextProvider>
          <Header />

            <AppRouter />

          </ProductsContextProvider>
        </div>

      </Router>
    </>
  );
}

export default App;
