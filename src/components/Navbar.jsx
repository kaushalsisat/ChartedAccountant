import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AccountantDetailsPage from '../pages/AccountantDetailsPage';
import Image from '../assets/Logo.png';
import LoginForm from '../pages/Loginform';
import RegisterForm from '../pages/RegisterForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleBackClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  return (
    <nav className="bg-gray-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 font-serif">
        <div className="ml-0 text-2xl font-bold flex">
          <img src={Image} className="h-10 w-28" alt="Logo" />
          Chartered Accountants
        </div>

        {/* ---------------Menu for large screens---------------------- */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/alist" className="hover:underline">CAList</NavLink>
          <NavLink to="/about" className="hover:underline">About</NavLink>
          <NavLink to="/contactuspage" className="hover:underline">Contact Us</NavLink>
          <NavLink to="/accountant/:id" element={<AccountantDetailsPage />} />
        </div>

        {/* -------------------Login Button --------------------------------*/}
        <div className="hidden md:block">
          <button
            onClick={handleLoginClick}
            className="text-white bg-blue-500 px-4 py-2 rounded-md mb-4"
          >
            Login
          </button>
        </div>

        {/* --------------------Mobile Menu Button ------------------------------*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/*---------------------------------------- Mobile Menu ---------------------------*/}
      {isOpen && (
        <div className="md:hidden bg-gray-700 sm:mr-2">
          <a href="/" className="block px-4 py-2 hover:bg-gray-900">Home</a>
          <a href="alist" className="block px-4 py-2 hover:bg-gray-900">CAList</a>
          <a href="about" className="block px-4 py-2 hover:bg-gray-900">About</a>
          <a href="contactuspage" className="block px-4 py-2 hover:bg-gray-900">Contact Us</a>
          <button
            onClick={handleLoginClick}
            className="w-full bg-white text-gray-600 px-4 py-2 rounded-lg mt-2 hover:bg-gray-200"
          >
            Login
          </button>
        </div>
      )}

      {/* -----------Render Login Form or Register Form based on the state ---------------*/}
      {showLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              onClick={handleBackClick}
              className="text-gray-600 mb-4"
            >
              Back
            </button>
            <LoginForm />
            <p className="text-center mt-4 text-gray-400">
              Don't have an account?{" "}
              <button
                onClick={handleRegisterClick}
                className="text-blue-500"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      )}

      {showRegisterForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              onClick={handleBackClick}
              className="text-gray-600 mb-4"
            >
              Back
            </button>
            <RegisterForm />
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <button
                onClick={handleLoginClick}
                className="text-blue-500"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
