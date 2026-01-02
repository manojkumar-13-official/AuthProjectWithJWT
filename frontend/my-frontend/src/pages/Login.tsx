import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../config/api";
import "../App.css"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.text();

      if (response.ok && data !== "Login Failed") {
        // Store JWT token in localStorage
        localStorage.setItem('token', data);
        localStorage.setItem('username', formData.username);
        console.log('Login successful, token stored');
        // Navigate to home page
        navigate('/home');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('Error connecting to server. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative flex justify-center items-center h-screen flex-col gap-y-10">
        <div className="border-2 border-green-500 rounded-2xl flex flex-col h-120 w-100 p-10">
        <h1 className="text-green-500 text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <div className="flex flex-col inputbox mt-10 ml-1">
          <input
            type="email"
            name="username"
            id="username"
            placeholder=" "
            value={formData.username}
            onChange={handleChange}
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl focus:border-green-500"
            required
          />
          <label
            htmlFor="username"
            className="text-gray-500 text-lg mt-1 ml-3 absolute pointer-events-none"
          >
            Email
          </label>
        </div>
        <div className="flex flex-col inputbox mt-10 ml-1">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl focus:border-green-500 "
            required
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
          disabled={loading}
          className="text-white bg-green-500 mt-10 ml-1 h-10 w-75 rounded-2xl font-semibold text-xl text-center cursor-pointer hover:bg-green-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <h1 className="text-lg text-gray-400 mt-5 text-center">
          Don't have an account ?{" "}
          <a href="/register" className="text-green-400 underline">
            Register
          </a>
        </h1>
      </div>
      </form>
    </div>
  );
};

export default Login;
