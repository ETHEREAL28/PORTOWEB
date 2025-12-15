import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 text-center">

        <p className="text-lg">
          &copy; 2025 <span className="text-blue-400 font-semibold">Edwin Winanda</span>. All rights reserved.
        </p>

        {/* <div className="flex gap-6 justify-center mt-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;