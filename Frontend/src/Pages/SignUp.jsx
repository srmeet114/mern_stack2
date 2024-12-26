import React from "react";
import logo from "../../public/Img/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="instagram">
      <section>
        <div class="h-lvh flex  pt-16">
          <div class="container mx-auto">
            <div class="form-signin m-auto  border border-gray-300 rounded-md py-4 px-6 w-1/3 max-[768px]:w-1/2 max-[608px]:w-full max-[425px]:border-0 bg_bolar">
              <form>
                <div class="flex justify-center mb-4">
                  <img
                    className="w-[40%] object-contain py-10"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div class="space-y-2 mt-4">
                  <input
                    type="email"
                    id="floatingInput"
                    placeholder="Email"
                    class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    id="floatingInput"
                    placeholder="Full Name"
                    class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    id="floatingInput"
                    placeholder="Username"
                    class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    id="floatingPassword"
                    placeholder="Password"
                    class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div class="text-center text-xs text-gray-500 mt-2">
                  <p>
                    By signing up, you agree to our
                    <a
                      href="javascript:void(0)"
                      class="text-blue-500 hover:underline pl-1"
                    >
                      Terms
                    </a>
                    ,
                    <a
                      href="javascript:void(0)"
                      class="text-blue-500 hover:underline pr-1"
                    >
                      Privacy Policy 
                    </a>
                     and 
                    <a
                      href="javascript:void(0)"
                      class="text-blue-500 hover:underline pl-1"
                    >
                      Cookies Policy
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="submit"
                  class="w-full bg-[#4cb5f9] hover:bg-[#0b5ed7] text-white rounded-md transition duration-300  py-2 mt-4"
                >
                  Sign up
                </button>
              </form>
            </div>
            <div class="form-signin m-auto  border border-gray-300 rounded-md p-4 w-1/3 max-[768px]:w-1/2 max-[425px]:w-full mt-4 bg_bolar">
              <p class="text-center text-sm">
                Have an account ?
                <Link to="/signin" class="text-blue-500 hover:underline pl-1">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
