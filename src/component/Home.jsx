import React, { useState, useEffect } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent"></div>
      </div>

      <div className={`text-center z-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-7xl font-bold mb-6 text-slate-100">Welcome to My Portfolio</h1>
        <p className="text-3xl mb-4 text-blue-400 font-light">Informatics Student</p>
        <p className="text-xl max-w-2xl mx-auto text-slate-300 leading-relaxed mb-8">
          Hi, I'm <span className="text-blue-400 font-semibold">Edwin Porto</span>, a passionate web developer 
          specializing in creating beautiful and functional websites.
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50">
            View Projects
          </a>
          <a href="#certificates" className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all border border-slate-600">
            Certificates
          </a>
        </div>
      </div>
    </section>
  );
}
