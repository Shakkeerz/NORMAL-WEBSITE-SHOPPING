import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="flex justify-evenly font-bold items-center bg-slate-50 h-20 shadow-md">
        <div className="w-1/5">
            <NavLink activeClassName="Text-red-800" to='/'>Logo</NavLink>
        </div>
        <ul className="flex justify-between items-center w-3/5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
