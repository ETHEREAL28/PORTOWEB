import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mx-4">
          Edwin Porto
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 bg-slate-800/80 backdrop-blur-sm px-8 py-3 rounded-full border border-slate-700">
          {['home', 'about', 'skills', 'projects', 'certificates'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-slate-200 hover:text-blue-400 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-200 mr-4"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
          {['home', 'about', 'skills', 'projects', 'certificates'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-slate-200 text-lg hover:text-blue-400 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}