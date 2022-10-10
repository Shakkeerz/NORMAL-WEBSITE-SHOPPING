import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const liStyle =
    "hover:underline hover:shadow-lg cursor-pointer lg:hover:shadow-none";

  const [isMenuClick, setIsMenuClick] = useState(false);
  const toggleMenu = () => {
    setIsMenuClick(!isMenuClick);
  };
  useEffect(() => {
    toggleMenu();
  }, []);
  return (
    <>
      <header className="flex justify-between  shadow-lg items-center h-20 font-bold  relative z-20">
        <div>logo</div>
        <div
          className="lg:hidden z-10 absolute right-28 cursor-pointer"
          onClick={toggleMenu}
        >
          {/* className="text-3xl" */}
          {isMenuClick ? (
            <AiOutlineMenu className="text-xl transition-all " />
          ) : (
            <AiOutlineClose className="text-xl text-red-700 hover:text-red-900 hover:bg-slate-200" />
          )}
        </div>

        <ul
          className={`${
            isMenuClick && "hidden"
          }  flex gap-4 flex-col lg:flex-row lg:bg-transparent  bg-slate-400 p-4 absolute lg:static lg:flex left-0 right-0 text-center top-5 text-xl origin-top duration-300 `}
        >
          <Link to="/">
            {" "}
            <li className={liStyle}>Home</li>
          </Link>
          <Link to="/products">
            <li className={liStyle}>Products</li>
          </Link>

          <li className={liStyle}>About</li>
        </ul>

        <Link
          to="/login"
          className="bg-green-400 text-white p-2 capitalize rounded-lg"
        >
          Login
        </Link>
      </header>
    </>
  );
}

export default Header;
