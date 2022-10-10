import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

function Login() {
  const btnStyle = "flex justify-evenly bg-slate-300 hover:bg-slate-400 h-12 items-center"
  return (
    <div>
      <section className="flex flex-col items-center  overflow-hidden ">
        {/* SIGN UP */}
        <div className="mt-2 w-80 flex flex-col md:w-4/5  justify-evenly items-center h-screen">
          {/* title */}
          <div className="w-80 text-center ">
            <div className="text-4xl mb-6 font-bold">Log In</div>
            <div className="text-lg flex justify-center">
              <p>Don't have an account?</p>
              <Link to="" className="text-blue-400 font-bold">
                <p>Sign Up</p>
              </Link>
            </div>
          </div>

          {/* using social account */}
          <div className="lg:flex gap-4 lg:items-center lg:justify-evenly  md:flex-row-reverse w-[400px] md:w-[500px] lg:w-[800px] relative ">
            <div className="flex flex-col w-full lg:w-1/2 gap-4">
              <button
                type="button"
                className={btnStyle}
              >
                <div className="">
                  <FcGoogle className="text-4xl" />
                </div>
                <div>Continue with Google</div>
              </button>
              <button
                type="button"
                className={btnStyle}
              >
                <div className="">
                  <BsFacebook className="text-4xl" />
                </div>
                <div>Continue with Facebook</div>
              </button>
              <button
                type="button"
                className={btnStyle}
              >
                <div className="">
                  <BsApple className="text-4xl" />
                </div>
                <div>Continue with Apple</div>
              </button>
            </div>

            {/* middle line position abosolute*/}
            <div className="md:flex md:h-full md:flex-col md:items-center absolute ">
              {" "}
              {/* this display only medium devices */}
              <span className="md:border-r-2 md:border-slate-200 md:h-1/2"></span>
              <p className="hidden lg:block">Or</p>
              <span className="md:border-r-2 md:border-slate-200 md:h-1/2"></span>
            </div>
            {/* using Email */}
            
              <form className="flex flex-col justify-center items-center gap-2 w-full lg:w-1/2 h-96 ">
                <div className="text-center md:hidden text-gray-400">
                  ----- <span>Or Use email</span>------
                </div>{" "}
                {/* This text only display on mubile */}
                <input
                  type="text"
                  className="mt-10 bg-transparent border-b-2 outline-none focus:border-blue-500 pl-2  w-full  md:mx-auto"
                  // size="4"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="bg-transparent border-b-2 outline-none focus:border-blue-500 pl-2 w-full  md:mx-auto mt-6"
                  // size="38"
                  placeholder="Password"
                />
                <div className="text-xs mt-6 h-20 w-full flex flex-col gap-2 justify-center items-center  ">
                  <div>
                    <input type="checkbox" id="checkId" />
                    <label for="checkId">Remeber me</label>
                  </div>
                  <div>
                    <Link to="" className="active:text-blue-600 underline">
                      Forgot Password or Email{" "}
                    </Link>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-12 py-1 rounded-2xl border-2 border-gray-600 mt-6 hover:bg-gray-500 hover:text-white hover:border-slate-100"
                >
                  Log In
                </button>
              </form>
           
          </div>
        </div>

        <div className="text-center text-sm md:text-lg">
          <Link to="" className="text-blue-900 text-xs underline">
            Terms of use
          </Link>
          <Link to="" className="text-blue-900 text-xs underline">
            Privacy Policy
          </Link>
          <p>
            This site is protected by reCAPTCHA Enterprise and the Google{" "}
            <Link to="" className="text-blue-900 text-xs underline">
              Privacy Policy
            </Link>{" "}
            And{" "}
            <Link to="" className="text-blue-900 text-xs underline">
              {" "}
              Terms of Use apply
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
