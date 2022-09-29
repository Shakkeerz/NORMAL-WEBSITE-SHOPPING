import React from "react";
import homeImage from "../data/images/jacek-dylag-jo8C9bt3uo8-unsplash.aebf97ff8a35927900f7.jpg";

function HomeHero() {
  const liStyle = "list-none text-3xl lg:text-6xl font-bold";
  const liTextStyle = "text-sm md:text-xl lg:text-3xl font-normal "

  const divStyle = "p-10 bg-slate-300 mb-4 text-center";
  return (
    <section>
      <div className="md:h-96 overflow-hidden ">
        <img src={homeImage} alt="Home Image" />
      </div>

      <div className="text-center mt-6 lg:mt-10">
        <h6 className="text-xl lg:text-2xl">HELLO THERE</h6>
        <h1 className="text-3xl  md:4xl lg:text-7xl ">We Are Glint</h1>
        <div className="h-1 w-1/5 m-auto bg-slate-300"></div>
        <p className="opacity-50 text-sm text-start md:text-lg mt-6 lg:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
      </div>

      <div className="flex gap-2 justify-center mt-10">
        <div>

          <div className={divStyle}>
            <li className={liStyle}>1Cr</li>
            <li className={`${liStyle} ${liTextStyle}`}>Customers</li>
          </div>
          <div className={divStyle}>
            <li className={liStyle}>40 lakh</li>
            <li className={`${liStyle} ${liTextStyle}`}>
              Happy Customers
            </li>
          </div>

        </div>
        <div>

          <div className={divStyle}>
            <li className={liStyle}>75 lakh</li>
            <li className={`${liStyle} ${liTextStyle}`}>
              Regular Customers
            </li>
          </div>
          <div className={divStyle}>
            <li className={liStyle}>50%</li>
            <li className={`${liStyle} ${liTextStyle} `}>Market Shares</li>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeHero;
