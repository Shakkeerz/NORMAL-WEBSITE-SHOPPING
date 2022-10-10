import React from "react";

function About() {
    const btnStyle = "px-4 py-2 md:px-8 md:py-4 rounded-3xl border-2 border-red-500 font-bold md:text-xl"
  return (
    <>
      <div className="flex flex-col items-center justify-center px-10 py-5 mb-10">
        <div className="w-[300px] md:w-[400px] border-8 border-red-500 rounded-3xl">
          <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/21a5da24640953dd8319ac86/g.jpg" alt="company profile" className=""/>
        </div>
        <div className="text-center">
         
          <h1 className="text-[2rem] md:text-[3rem]">About Company</h1>
          <p className="md:text-[1.125rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacusat augue aliquet posuere. Aliquam fringilla elementum varius. Nunclobortis nisl in nibh commodo, quis placerat nisi feugiat.</p>
            <div className="mt-5">
                <button className={`${btnStyle}  mr-2  bg-transparent  hover:bg-orange-500 hover:text-white`}>Book call</button>
                <button className={`${btnStyle} bg-orange-500 hover:bg-white text-white hover:text-black`}>Our website</button>
            </div>

        </div>
      </div>
    </>
  );
}

export default About;
