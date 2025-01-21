import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State to control Services dropdown

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setIsServicesOpen(false); // Close dropdown when mobile nav is toggled
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div>
      {/* Overlay Dropdown for Mobile */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 flex flex-col items-center space-y-6 pt-20 sm:hidden transition-transform ${
          isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="space-y-6 text-white text-lg font-medium">
          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-white font-medium"
            >
              Services
            </button>
            {isServicesOpen && (
              <ul className="mt-2 space-y-4">
                <li>
                  <a href="/website" className="text-sm text-sky-300 hover:text-sky-300" onClick={closeMobileNav}>
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/mobile" className="text-sm text-sky-300 hover:text-sky-300" onClick={closeMobileNav}>
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="/logo" className="text-sm text-sky-300 hover:text-sky-300" onClick={closeMobileNav}>
                    Logo
                  </a>
                </li>
                <li>
                  <a href="/branding" className="text-sm text-sky-300 hover:text-sky-300" onClick={closeMobileNav}>
                    Branding
                  </a>
                </li>
                <li>
                  <a href="/SMM" className="text-sm text-sky-300 hover:text-sky-300" onClick={closeMobileNav}>
                    SMM
                  </a>
                </li>
              </ul>
            )}
          </li>
          {/* Other Links */}
          <li>
            <a href="/solution" onClick={closeMobileNav}>Solutions</a>
          </li>
          <li>
            <a href="/work" onClick={closeMobileNav}>Work</a>
          </li>
          <li>
            <a href="/company" onClick={closeMobileNav}>Company</a>
          </li>
          <li>
            <a href="/contact" onClick={closeMobileNav}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-black/30 text-white flex items-center justify-between px-5 z-50 backdrop-blur-md">
        <div className="flex items-center">
          <a href="/">
            <img src="assets/logo.png" className="w-24 h-20" alt="Logo" />
          </a>
        </div>

        {/* Centered Links for Larger Screens */}
        <ul className="hidden sm:flex items-center justify-center w-full space-x-8">
          {/* Services with Hover Dropdown */}
          <li className="relative group">
            <a
              href="/website"
              className="nav-link text-white font-medium hover:text-sky-300"
            >
              Services
            </a>
            <ul className="absolute left-0 mt-2 hidden w-48 bg-black/80 text-white rounded-lg shadow-lg group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/website">Web Development</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/mobile">Mobile App</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/logo">Logo</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/branding">Branding</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/SMM">SMM</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="/solution"
              className="nav-link text-white font-medium hover:text-sky-300"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="/work"
              className="nav-link text-white font-medium hover:text-sky-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="/company"
              className="nav-link text-white font-medium hover:text-sky-300"
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="nav-link text-white font-medium hover:text-sky-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="flex flex-col items-center justify-center w-10 h-10 space-y-1 sm:hidden"
          onClick={toggleMobileNav}
        >
          <span
            className={`block w-6 h-1 bg-white rounded transition-transform ${
              isMobileNavOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-white rounded transition-opacity ${
              isMobileNavOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-white rounded transition-transform ${
              isMobileNavOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
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
