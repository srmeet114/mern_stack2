import React from 'react'
import logo from "../../public/Img/logo.png";
import { Link } from 'react-router-dom';


const SignIn = () => {
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
                        type="password"
                        id="floatingPassword"
                        placeholder="Password"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full bg-[#4cb5f9] hover:bg-[#0b5ed7] text-white rounded-md transition duration-300  py-2 mt-4"
                    >
                      Sign In
                    </button>
                  </form>
                </div>
                <div class="form-signin m-auto  border border-gray-300 rounded-md p-4 w-1/3 max-[768px]:w-1/2 max-[425px]:w-full mt-4 bg_bolar">
                  <p class="text-center text-sm">
                    Don't have an account ?
                    <Link href="/signup" class="text-blue-500 hover:underline pl-1">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
  )
}

export default SignIn
