import React from "react";
import "../App.css"
const Login = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center h-screen flex-col gap-y-10">
        <div className="border-2 border-green-500 rounded-2xl flex flex-col h-120 w-100 p-10">
        <h1 className="text-green-500 text-2xl font-bold text-center">Login</h1>
        <div className="flex flex-col inputbox mt-10 ml-1">
          <input
            type="email"
            name="email"
            id=""
            placeholder=" "
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl focus:border-green-500"
          />
          <label
            htmlFor="email"
            className="text-gray-500 text-lg mt-1 ml-3 absolute pointer-events-none"
          >
            Email
          </label>
        </div>
        <div className="flex flex-col inputbox mt-10 ml-1">
          <input
            type="text"
            name="password"
            id=""
            placeholder=" "
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl focus:border-green-500 "
          />
          <label
            htmlFor="password"
            className="text-gray-500 text-lg mt-1 ml-3 absolute pointer-events-none"
          >
            Password
          </label>
          <div>
            <h1 className="text-white text-md mt-2 ml-42">
              <a href="" className="text-green-400 underline">forgot password ?</a>
            </h1>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-green-500 mt-10 ml-1 h-10 w-75 rounded-2xl font-semibold text-xl text-center cursor-pointer hover:bg-green-600 outline-none"
        >
          Login
        </button>
        <h1 className="text-lg text-gray-400 mt-5 text-center">
          Don't have an account ?{" "}
          <a href="/register" className="text-green-400 underline">
            Register
          </a>
        </h1>
      </div>
      </div>
    </div>
  );
};

export default Login;
