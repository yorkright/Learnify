/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Scroll detection
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-16 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "backdrop-blur-sm bg-white/60"
      }`}
    >
      <div className="logo text-xl font-bold text-gray-900">
        <Link href="/" className="font-sarif font-extrabold">
          <span className="text-green-600 text-4xl font-extrabold font-serif">L</span>
          earnify
        </Link>
      </div>

      {/* <Link href="#" className="text-gray-600 hover:text-green-600 transition hidden sm:block">
        <img src="/icons8-code-96.png" alt="code-icon" width={50} height={40} />
      </Link> */}

      {/* Hamburger Icon */}
      <div className="sm:hidden" onClick={toggleMenu}>
        <button className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row sm:gap-6 gap-4 sm:w-auto w-full justify-center items-center mt-4 sm:mt-0 transition-all duration-300`}
      >
        {[
          { label: "Quiz", href: "/quiz" },
          { label: "Ask AI", href: "/guide" },
          { label: "Blogs", href: "/guide" },
        ].map(({ label, href }, i) => (
          <li key={i}>
            <Link href={href} onClick={closeMenu}>
              <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold rounded-xl shadow-md transition-all duration-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:from-green-600 hover:to-green-500 hover:text-white border border-gray-700">
                {label}
              </button>
            </Link>
          </li>
        ))}

        {/* Account / Login Button */}
        <li>
          {session ? (
            <Link href="/profile" onClick={closeMenu}>
              <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold rounded-xl shadow-md transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700">
                Your Account
              </button>
            </Link>
          ) : (
            <Link href="/login" onClick={closeMenu}>
              <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold rounded-xl shadow-md transition-all duration-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:from-green-600 hover:to-green-500 border border-gray-700">
                Login
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
