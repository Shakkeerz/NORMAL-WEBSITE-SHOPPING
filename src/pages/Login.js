import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

// PROJECTS LINK :-    https://users.wix.com/signin?redirectTo=https:%2F%2Fmanage.wix.com%2Fedit-template%2Ffrom-intro%3ForiginTemplateId%3D10acbe26-e3cf-40ee-8c20-d6d69bfd3482%26editorSessionId%3D88e075b1-5d10-4445-96d2-1b0243742340&originUrl=https:%2F%2Fmanage.wix.com%2Fedit-template%2Ffrom-intro%3ForiginTemplateId%3D10acbe26-e3cf-40ee-8c20-d6d69bfd3482%26editorSessionId%3D88e075b1-5d10-4445-96d2-1b0243742340&overrideLocale=en&forceRender=true
function Login() {
  return (
    <div>
      <section className="flex flex-col items-center   ">
        {/* SIGN UP */}
        <div className="mt-11 w-80 flex flex-col md:w-4/5 md:flex justify-evenly items-center h-screen">
          {/* title */}
          <div className="w-80 text-center ">
            <div className="text-4xl mb-6 font-bold">Log In</div>
            <div className="text-lg flex justify-center">
              <p>Don't have an account?</p>
              <Link to="" className="text-blue-500 font-bold">
                <p>Sign Up</p>
              </Link>
            </div>
          </div>

          {/* using social account */}
          <div className="md:flex md:items-center md:justify-evenly md:flex-row-reverse  w-4/5 relative">
            <div className="flex flex-col md:w-1/3 gap-4">
              <button
                type="button"
                className="flex justify-evenly bg-blue-500 h-12 items-center "
              >
                <div className="">
                  <FcGoogle className="text-4xl" />
                </div>
                <div>Continue with Google</div>
              </button>
              <button
                type="button"
                className="flex justify-evenly bg-blue-500 h-12 items-center "
              >
                <div className="">
                  <BsFacebook className="text-4xl" />
                </div>
                <div>Continue with Facebook</div>
              </button>
              <button
                type="button"
                className="flex justify-evenly bg-blue-500 h-12 items-center "
              >
                <div className="">
                  <BsApple className="text-4xl" />
                </div>
                <div>Continue with Apple</div>
              </button>
            </div>

            {/* middle line */}
            <div className="md:flex md:h-full md:flex-col md:items-center absolute ">
              {" "}
              {/* this display only medium devices */}
              <span className="md:border-r-2 md:border-slate-200 md:h-1/2"></span>
              <p className="hidden md:block">Or</p>
              <span className="md:border-r-2 md:border-slate-200 md:h-1/2"></span>
            </div>
            {/* using Email */}
            <div className="md:w-2/3 ">
              <form className="flex flex-col justify-center items-center gap-2  h-96">
                <div className="text-center md:hidden">
                  ----- <span>Or Use email</span>------
                </div>{" "}
                {/* This text only display on mubile */}
                <input
                  type="text"
                  className="bg-transparent border-b-2 outline-none focus:border-blue-500 pl-2  w-full md:w-1/2 md:mx-auto"
                  // size="4"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="bg-transparent border-b-2 outline-none focus:border-blue-500 pl-2 w-full md:w-1/2 md:mx-auto mt-6"
                  // size="38"
                  placeholder="Password"
                />
                <div className="text-xs   mt-6">
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
                  className="px-12 py-1 rounded-2xl border-2 border-blue-600 mt-6 hover:bg-blue-500 hover:border-slate-100"
                >
                  Log In
                </button>
              </form>
            </div>
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
