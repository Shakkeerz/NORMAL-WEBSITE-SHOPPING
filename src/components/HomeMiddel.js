import React, { useState } from "react";
import { whyUs } from "../data/Data";
import {BsChevronCompactDown} from "react-icons/bs"

function HomeMiddel() {
  const tdStyle = "text-sm md:text-lg lg:text-xl py-5 lg:py-7";
  const trStyle = " border-b-2 border-black border-opacity-60 hover:border-opacity-80 opacity-80 hover:opacity-100 hover:opacity cursor-pointer hover:bg-slate-100"
  const [oddEvenRow, setOddEvenRow] = useState(false);
 
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5 bg-slate-100 mx-4">
        <h1 className="text-5xl font-bold">Why Us</h1>
        <div className="h-1 w-1/5 m-auto bg-slate-300"></div>

        <div className="flex flex-wrap justify-center md:text-2xl lg:text-2xl gap-4 my-10">
          {whyUs.map((item) => {
            const { title, icon, id } = item;
              // id % 2 ==0 && setOddEvenRow(true) 
            return (
              <div
                key={id}
                className={`flex items-center bg-white  justify-evenly p-10  shadow-2xl rounded-2xl w-full lg:w-1/2 ${oddEvenRow && 'flex-row-reverse'}`}
              >
                <p className="">{title}</p>
                <div className="shadow-lg p-5">{icon}</div>
              </div>
            );
          })}
        </div>
      </div>

      <section>
        <video className="w-full" controls  poster="https://assets.entrepreneur.com/content/3x2/2000/20190614154016-GettyImages-861164910.jpeg">
          <source
            src="https://storage.coverr.co/videos/8CqrHcEbsvz4BBkoHhUwmDTovT5aHWe5?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4NjQwOTc2fQ.cfU5z5jA-a4yaEApvWfFlVOJEVhJqwJTfdKreI1I33o "
            type="video/mp4"
          />
        </video>
      </section>

      {/* NEWS */}
      <section className="my-12 w-4/5 m-auto bg-white p-5 lg:p-10 rounded-2xl">
        <h4 className="text-sm md:text-2xl">NEWS CENTER</h4>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Our Latest News</h1>

        {/* <div> */}
        <table className="text-center w-full mt-5 text-xl ">
          <tbody>
            <tr className={trStyle}>
              <td className={tdStyle}>10 Jul</td>
              <td className={tdStyle}>Lorem ipsum dolor sit amet</td>
              <td className={tdStyle}>Full Article </td>
            </tr>
            <tr className={trStyle}>
              <td className={tdStyle}>10 Jul</td>
              <td className={tdStyle}>Lorem ipsum dolor sit amet</td>
              <td className={tdStyle}>Full Article </td>
            </tr>
            <tr className={trStyle}>
              <td className={tdStyle}>10 Jul</td>
              <td className={tdStyle}>Lorem ipsum dolor sit amet</td>
              <td className={tdStyle}>Full Article </td>
            </tr>
          </tbody>
        </table>
        <div className="h-8 bg-gray-200 hover:bg-gray-300 flex items-center justify-center mt-4 cursor-pointer transition ease-in-out delay-150">
        <BsChevronCompactDown className="animate-none hover:animate-bounce w-full"/>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default HomeMiddel;
