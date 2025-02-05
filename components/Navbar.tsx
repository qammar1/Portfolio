"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgba(240,240,240,0.05)] p-4 z-50">
      <div className="flex justify-between items-center">
        {/* Portfolio title */}
        {/* <div className="text-white text-2xl font-bold">Portfolio</div> */}

        {/* Mobile menu toggle (hamburger) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu (for small screens) */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex justify-center space-x-8 text-white mt-4 lg:mt-0 absolute lg:relative top-full left-0 right-0 bg-transparent lg:bg-transparent lg:p-0 p-6 lg:flex-row flex-col`}
      >
        <li className={`${isOpen?'ml-8':null}`}>
          <Link href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
