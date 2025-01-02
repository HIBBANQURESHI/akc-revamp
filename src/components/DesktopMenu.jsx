import React, { useState } from 'react';
import { FaRocket } from 'react-icons/fa'; // Importing icon from react-icons

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div>
      {/* Overlay Dropdown for Mobile */}
      <div
        className={`fixed inset-0 bg-transparent flex flex-col ${isMobileNavOpen ? 'flex' : 'hidden'}`}
      >
        <div className="flex items-center h-16 px-5">
          <h1 className="text-4xl font-comforter">AKC</h1>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-8">
          <li>
            <a
              href="/home" // Replace with your route
              className="nav-link text-2xl text-black"
              onClick={closeMobileNav}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/about" // Replace with your route
              className="nav-link text-2xl text-black"
              onClick={closeMobileNav}
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="/services" // Replace with your route
              className="nav-link text-2xl text-black"
              onClick={closeMobileNav}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="/careers" // Replace with your route
              className="nav-link text-2xl text-black"
              onClick={closeMobileNav}
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="/contact" // Replace with your route
              className="nav-link text-2xl text-black"
              onClick={closeMobileNav}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 py-9 left-0 w-full h-16 bg-transparent flex items-center justify-between px-5 z-50 backdrop-blur-lg">
        <div className="flex items-center">
          <h1 className="text-4xl text-white font-comforter">AKC</h1>
        </div>

        <ul className="hidden md:flex justify-center w-full space-x-12 mr-28 py-18">
          {/* Services Dropdown */}
          <li className="relative group">
            <a
              href="#"
              className="nav-link text-white font-semibold"
            >
              Services
            </a>
            <ul className="absolute left-0 hidden bg-white text-black space-y-6 px-10 py-2 group-hover:block flex ">
              <li>
                <a href="/service1" className="text-md font-normal hover:text-blue-500">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/service2" className="text-md font-normal hover:text-blue-500">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="/service3" className="text-md font-normal hover:text-blue-500">
                  Logo
                </a>
              </li>
              <li>
                <a href="/service4" className="text-md font-normal hover:text-blue-500">
                  Branding
                </a>
              </li>
              <li>
                <a href="/service5" className="text-md font-normal hover:text-blue-500">
                  SMM
                </a>
              </li>
            </ul>
          </li>
          
          <li>
            <a
              href="/about" // Replace with your route
              className="nav-link text-white font-semibold"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="/services" // Replace with your route
              className="nav-link text-white font-semibold"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="/careers" // Replace with your route
              className="nav-link text-white font-semibold "
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="/contact" // Replace with your route
              className="nav-link text-white font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col items-center justify-center w-10 h-8 space-y-1 md:hidden"
          onClick={toggleMobileNav}
        >
          <span
            className={`block w-6 h-1 bg-white transition-transform ${
              isMobileNavOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-white transition-transform ${
              isMobileNavOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          background-color: #fff;
          transition: width 0.3s ease-in-out;
          bottom: -3px;
          left: 0;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
