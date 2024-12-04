"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { MdOutlineCastForEducation } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  

  return (
    <nav className="p-4 bg-background/100 sticky  top-0   backdrop-blur  shadow-lg  text-white font-bold flex justify-between items-center py-8 px-16 flex-wrap sm:flex-nowrap lg:flex-nowrap md:flex-nowrap">
      <div className="logo font-bold text-xl">

       <Link  href="/"> Educate-<span className="text-red-700 font-extrabold text-4xl">O</span>ne
    </Link>
      </div>
      <Link href="#" className="text-gray-400 hover:text-white">
      <MdOutlineCastForEducation  className='text-gray-400 hover:text-white' size={29} />
            </Link>

      {/* Hamburger Icon */}
      <div className="sm:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-red-700 focus:outline-none">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row sm:gap-10 gap-4 sm:w-auto w-full justify-center sm:justify-start items-center`}
      >
        <li  className="font-extrabold text-xl cursor-pointer transition duration-300 ease-in-out text-red-700 hover:text-purple-600 hover:underline">
        </li> 
        <li className="font-extrabold cursor-pointer text-xl  transition duration-300 ease-in-out text-red-700 hover:text-purple-600 hover:underline">
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-light rounded-e-xl text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link href="/about" onClick={closeMenu}>Other Course</Link>
      </button>
        </li>
        <li className="font-extrabold text-xl cursor-pointer transition duration-300 ease-in-out text-red-700 hover:text-purple-600 hover:underline">
        <button className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-light  rounded-e-xl   text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link href="/web" onClick={closeMenu}>Web Devlopment</Link>
      </button>
        </li>
       
        
        <div className="relative">
        {session && <>
        
        <Link href={'/profile'}>
        <button 
            className="text-white mx-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-e-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

            type="button">

            Your Account

            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button> </Link> </>
        }

        {!session && <Link href={"/login"}>
          <button
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-light  rounded-e-xl   text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button></Link>}

      </div>
</ul>
    </nav>
  )
}
export default Navbar
