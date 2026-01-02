import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_ENDPOINTS } from '../config/api'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(API_ENDPOINTS.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Registration successful:', data)
        // Clear form
        setFormData({ name: '', username: '', password: '' })
        // Redirect to home page
        navigate('/home')
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Registration failed')
      }
    } catch (err) {
      setError('Error connecting to server. Please try again.')
      console.error('Registration error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative flex justify-center items-center h-screen">
        <div className="border-2 border-green-500 rounded-2xl flex flex-col h-120 w-100 p-10">
        <h1 className="text-green-500 text-2xl font-bold text-center">Register</h1>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <div className="flex flex-col mt-10 ml-1 inputbox">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl focus:border-green-500"
            required
          />
          <label
            htmlFor="name"
            className="text-gray-500 text-lg mt-1 ml-3 absolute pointer-events-none"
          >
            Name
          </label>
        </div>
        <div className="flex flex-col mt-10 ml-1 inputbox">
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
        <div className="flex flex-col mt-10 ml-1 inputbox">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border-2 border-gray-500 outline-none pl-2.5 text-white h-10 w-75 rounded-xl focus:border-green-500"
            required
          />
          <label
            htmlFor="password"
            className="text-gray-500 text-lg mt-1 ml-3 absolute pointer-events-none"
          >
            Password
          </label>
        </div>

        <button type="submit" disabled={loading} className="text-white bg-green-500 mt-10 ml-1 h-10 w-75 rounded-2xl font-semibold text-xl text-center cursor-pointer hover:bg-green-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? 'Registering...' : 'Register'}
        </button>
        <h1 className="text-lg text-center mt-2 text-gray-400">Already have an account ? <a href="/" className="text-green-400 underline">Login</a></h1>
      </div>
      </form>
    </div>
  )
}

export default Register