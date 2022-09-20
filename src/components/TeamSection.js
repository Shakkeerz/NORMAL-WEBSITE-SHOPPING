import React from "react";

function TeamSection() {
  const cardStyle =
    "w-1/3 p-3 rounded-lg shadow-2xl flex flex-col items-center ";
  return (
    <>
      <section className="mt-10">
        <h1 className="text-2xl text-center underline mb-5">Our Teams</h1>

        <div className="flex flex-wrap gap-1 justify-center ">
          <div className={cardStyle}>
            <img
              src="https://mobirise.com/extensions/securem4/cctv-cameras/assets/images/team1.jpg"
              alt=""
            />
            <h1 className="text-2xl font-bold">James Ford</h1>
            <p>General Director</p>
          </div>
          <div className={cardStyle}>
            <img
              src="https://mobirise.com/extensions/securem4/cctv-cameras/assets/images/team2.jpg"
              alt=""
            />
            <h1 className="text-2xl font-bold">Ann Brown</h1>
            <p>Manager</p>
          </div>
          <div className={cardStyle}>
            <img
              src="https://mobirise.com/extensions/securem4/cctv-cameras/assets/images/team3.jpg"
              alt=""
            />
            <h1 className="text-2xl font-bold">Ben Jason</h1>
            <p>Developer</p>
          </div>
        </div>

        {/* CUSTOMER FEEDBACK */}
        <div className="flex justify-center ">
          <div className=" w-2/5 relative p-5 mt-4 border-4 border-slate-400">
            <p>
              "Don't compare yourself with anyone in this world ... if you do
              so, you are insulting yourself."
            </p>
            <p className="absolute right-2">Bill gates</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamSection;
