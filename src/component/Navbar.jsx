import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`text-white p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <h1 className="text-4xl font-bold mx-4 text-slate-100">Edwin Porto</h1>
      <ul className="flex space-x-8 bg-slate-800/80 backdrop-blur-sm px-8 py-3 rounded-full border border-slate-700">
        <li><a className="text-slate-200 hover:text-blue-400 transition-colors" href="#home">Home</a></li>
        <li><a className="text-slate-200 hover:text-blue-400 transition-colors" href="#about">About</a></li>
        <li><a className="text-slate-200 hover:text-blue-400 transition-colors" href="#skills">Skills</a></li>
        <li><a className="text-slate-200 hover:text-blue-400 transition-colors" href="#projects">Projects</a></li>
        <li><a className="text-slate-200 hover:text-blue-400 transition-colors" href="#certificates">Certificates</a></li>
      </ul>
    </nav>
  );
}