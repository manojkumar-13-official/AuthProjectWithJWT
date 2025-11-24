import React from "react";
import "../App.css"
const Login = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center h-screen flex-col gap-y-10">
        <h1 className="text-gray-300 text-2xl font-bold">Login</h1>
        <div className="flex flex-col inputbox">
          <input
            type="email"
            name="email"
            id=""
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl focus:border-green-500"
          />
          <label
            htmlFor="email"
            className="text-gray-500 text-lg mt-1 ml-3 absolute pointer-events-none"
          >
            Email
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="password"
            id=""
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl"
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
          className="text-white bg-green-500 h-10 w-75 rounded-2xl font-semibold text-xl text-center cursor-pointer hover:bg-green-600 outline-none"
        >
          Login
        </button>
        <h1 className="text-lg text-white">
          Don't have an account ?{" "}
          <a href="/register" className="text-green-400 underline">
            Register
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Login;
