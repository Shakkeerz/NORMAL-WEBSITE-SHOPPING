import { useEffect, useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

function HomeFinal() {
  //absolute hidden  :- true
  // static           :-false
  const [toggle, setToggle] = useState(false);

  // transition ease-in-out delay-150
  const divStyle = "p-5  md:p-7 lg:p-10 ";
  const h4Style =
    "p-5 shadow-2xl flex justify-between cursor-pointer md:text-xl relative ";
  const pStyle = `${
    toggle ? "absolute hidden" : "static"
  } pt-5 pl-4 shodow-inner md:text-lg static`;

  const toggleDescription = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    toggleDescription();
  }, []);

  const h1Style = "font-bold text-xl";
  const h2Style = "text-lg mb-5"
  const inputStyle = "border-none h-10 pl-4 rounded-lg"
  return (
    <>
      <section className="">
        <h1 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h1>
        <div>
          <div className={divStyle}>
            <h4 className={h4Style} onClick={toggleDescription}>
              Lorem ipsum dolor sit amet +
              {toggle ? <BsChevronCompactDown /> : <BsChevronCompactUp />}
            </h4>
            <p className={pStyle}>
              Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, voluptas explicabo molestiae tempore natus velit sed
              aliquam ut!{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row p-5">
        <div className="lg:w-1/2 ">
          <h6 className="text-xl">CALL US </h6>
          <div className="font-bold text-2xl mb-5"> (123)456 789 01 </div>

          <h1 className={h1Style}> Address 1:</h1>
          <h2 className={h2Style}>Boise 2336 Young Road</h2>

          <h1 className={h1Style}> Address 2:</h1>
          <h2 className={h2Style}>Liberty 3924 Traders Alley </h2>

          <h1 className={h1Style}>Address 3:</h1>
          <h2 className={h2Style}>Chicago 2655 Farland Street Email: info@yoursite.com</h2>

        </div>
        <div className="bg-slate-300 py-10 px-5 md:py-20 rounded-lg lg:w-1/2 ">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className={inputStyle} />
            <input type="email" placeholder="Email"className={inputStyle} />
            <input type="text" placeholder="Subject" className={inputStyle}/>
            <input type="Phone" placeholder="Phone" className={inputStyle}/>

            <textarea placeholder="Message"  className={`${inputStyle} h-32 `}></textarea>
            <button type="button" className="bg-blue-700  rounded-xl text-white hover:text-slate-200 hover:bg-blue-800 py-1">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomeFinal;
