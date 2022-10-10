import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProductsContextProvider>

        <App />
      </ProductsContextProvider>
    </Router>
  </React.StrictMode>
);
