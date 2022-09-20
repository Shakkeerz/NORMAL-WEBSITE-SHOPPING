import React from "react";
import {
  MdProductionQuantityLimits,
  MdMiscellaneousServices,
  MdMedicalServices,
} from "react-icons/md";
import { GrDeliver } from "react-icons/gr";

function ServicesAndIcons() {
  const IconParentStyle = "flex items-center flex-row justify-evenly";
  const IconStyle =
    "text-Text200 h-full shadow-2xl  rounded-full  bg-white p-4";

  const cardStyle = " text-center p-10";
  const cardH1Style = "text-6xl font-bold";

  return (
    <div>
      <section className="text-center mt-10">
        <h6 className="text-2xl">HELLO THERE</h6>
        <h1 className="text-7xl leading-tight">We Are Glint</h1>
        <div className="w-1/5 m-auto h-1  bg-slate-500"></div>
        <p className="text-xl opacity-50 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
      </section>
      {/* Cards */}
      <section className="flex divide-x-4 shadow-md justify-center mt-10 ">
        <div className="">
          <div className={cardStyle}>
            <h1 className={cardH1Style}>1Cr</h1>
            <p>Customers</p>
          </div>
          <div className={cardStyle}>
            <h1 className={cardH1Style}>75 lakh</h1>
            <p>Regular Customers</p>
          </div>
        </div>
        <div>
          <div className={cardStyle}>
            <h1 className={cardH1Style}>40 lakh</h1>
            <p>Happy Customers</p>
          </div>
          <div className={cardStyle}>
            <h1 className={cardH1Style}>50%</h1>
            <p>Market Shares</p>
          </div>
        </div>
      </section>
      <section className="m-10 flex flex-col justify-between  gap-6">
        <div className={`${IconParentStyle} + flex-row-reverse`}>
          <MdProductionQuantityLimits className={IconStyle} />
          <h1 className="text-3xl ">Best Shopping experiance</h1>
        </div>
        <div className={IconParentStyle}>
          <MdMiscellaneousServices className={IconStyle} />
          <h1 className="text-3xl ">Best Services</h1>
        </div>
        <div className={`${IconParentStyle} flex-row-reverse`}>
          <MdMedicalServices className={IconStyle} />
          <h1 className="text-3xl ">After Sales Services</h1>
        </div>
        <div className={IconParentStyle}>
          <GrDeliver className={IconStyle} />
          <h1 className="text-3xl ">Fast Home Delivery</h1>
        </div>
      </section>
    </div>
  );
}

export default ServicesAndIcons;
