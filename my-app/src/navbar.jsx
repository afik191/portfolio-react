import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-blue-50 backdrop-blur-md shadow-md transform transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode className="text-gray-800 size-10 inline" />
          <span className="text-2xl font-bold text-black hover:text-blue-300 transition">Afik A.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black font-medium text-sm">
          <a href="#HeroSection" className="hover:text-blue-300 transition">Home</a>
          <a href="#projects" className="hover:text-blue-300 transition">Projects</a>
          <a href="#education" className="hover:text-blue-300 transition">Education</a>
          <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-blue-50 px-6 py-4 flex flex-col gap-3 text-black font-medium text-sm shadow-md">
          <a href="#HeroSection" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
