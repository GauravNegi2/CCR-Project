import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModeToggle from "./components/ModeToggle";

const NavLinks = ({ onClick }) => (
  <>
    <NavLink to="/" label="Dashboard" onClick={onClick} />
    <NavLink to="/add" label="Add Transaction" onClick={onClick} />
    <NavLink to="/transactions" label="Transactions" onClick={onClick} />
    <NavLink to="/settings" label="Settings" onClick={onClick} />
  </>
);

const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-500 hover:text-gray-700 block py-2 px-4 text-lg dark:text-white dark:hover:text-gray-300"
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Side */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white flex-shrink-0"
            >
              Expense Tracker
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            {/* Navbar links for larger screens */}
            <div className="hidden sm:flex sm:space-x-4 sm:ml-6 sm:items-center">
              <NavLinks onClick={() => setShowMenu(false)} />
            </div>

            {/* Hamburger Menu for smaller screens */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-900 dark:text-white"
              >
                Menu
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
                  <NavLinks onClick={() => setShowMenu(false)} />
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
