import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center h-screen flex-col gap-y-10">
        <h1 className="text-gray-300 text-2xl font-bold">Register</h1>
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            id=""
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl bg-black"
          />
          <label
            htmlFor="name"
            className="text-gray-500 text-lg mt-1 ml-3 absolute pointer-events-none"
          >
            Name
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            id=""
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl"
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
        </div>

        <button type="submit" className="text-white bg-green-500 h-10 w-75 rounded-2xl font-semibold text-xl text-center cursor-pointer hover:bg-green-600 outline-none">Register</button>
        <h1 className="text-lg text-white">Already have an account ? <a href="/" className="text-green-400 underline">Login</a></h1>
      </div>
    </div>
  )
}

export default Register