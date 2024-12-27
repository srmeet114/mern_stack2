import React, { useEffect } from "react";
import logo from "../../public/Img/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="instagram">
      <section>
        <div className="h-lvh flex  pt-16">
          <div className="container mx-auto max-[608px]:px-5">
            <div className="form-signin m-auto  border border-gray-300 rounded-md py-4 px-6 w-1/3 max-[768px]:w-1/2 max-[608px]:w-full max-[425px]:border-0 bg_bolar">
              <form>
                <div className="flex justify-center mb-4">
                  <img
                    className="w-[40%] object-contain py-10"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="texd"
                    placeholder="Username"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">
                  <p>
                    By signing up, you agree to our
                    <a className="text-blue-500 hover:underline pl-1">Terms</a>,
                    <a className="text-blue-500 hover:underline pr-1">
                      Privacy Policy
                    </a>
                    and
                    <a className="text-blue-500 hover:underline pl-1">
                      Cookies Policy
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4cb5f9] hover:bg-[#0b5ed7] text-white rounded-md transition duration-300  py-2 mt-4"
                >
                  Sign up
                </button>
              </form>
            </div>
            <div className="form-signin m-auto  border border-gray-300 rounded-md p-4 w-1/3 max-[768px]:w-1/2 max-[425px]:w-full mt-4 bg_bolar">
              <p className="text-center text-sm text-gray-500 ">
                Have an account ?
                <Link
                  to="/signin"
                  className="text-blue-500 hover:underline pl-1"
                >
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
