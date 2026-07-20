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
      className={`fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm transform transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <FaCode className="text-primary size-8 inline transition-transform group-hover:scale-110" />
          <span className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">Afik A.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-slate-600 font-semibold text-sm">
          <a href="#HeroSection" className="hover:text-primary transition-colors hover:bg-secondary px-3 py-2 rounded-md">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors hover:bg-secondary px-3 py-2 rounded-md">Projects</a>
          <a href="#education" className="hover:text-primary transition-colors hover:bg-secondary px-3 py-2 rounded-md">Education</a>
          <a href="#contact" className="hover:text-primary transition-colors hover:bg-secondary px-3 py-2 rounded-md">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-800 focus:outline-none p-2 rounded-md hover:bg-secondary transition-colors">
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-slate-100 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2 text-slate-700 font-semibold text-base shadow-inner">
          <a href="#HeroSection" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors p-3 rounded-md hover:bg-secondary">Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors p-3 rounded-md hover:bg-secondary">Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors p-3 rounded-md hover:bg-secondary">Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors p-3 rounded-md hover:bg-secondary">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
