import React, { useState, useEffect } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 relative overflow-hidden"
    >

<div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-slate-900/90 to-transparent z-40" />
      
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-3xl" />
      </div>

      {/* ===== CSS ANIMATION ===== */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(20px);
            animation: revealUp 0.8s ease-out forwards;
          }

          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
          .delay-4 { animation-delay: 0.8s; }

          @keyframes revealUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .glow {
            animation: glowPulse 2s ease-in-out infinite alternate;
          }

          @keyframes glowPulse {
            from {
              text-shadow: 0 0 6px rgba(59,130,246,0.4);
            }
            to {
              text-shadow: 0 0 14px rgba(59,130,246,0.8);
            }
          }
        `}
      </style>

      <div className="z-10 text-center max-w-3xl px-6">

        {/* Title */}
        {visible && (
          <h1 className="reveal delay-2 text-6xl md:text-7xl font-extrabold mb-6 text-slate-100 leading-tight">
            Welcome to <br />
            <span className="text-blue-400 glow">My Portfolio Web</span>
          </h1>
        )}

        {/* Description */}
        {visible && (
          <p className="reveal delay-3 text-xl text-slate-300 leading-relaxed mb-10">
            Halo! I’m <span className="text-blue-400 font-semibold">Edwin Winanda</span>.  
            happy to have you here!
          
          </p>
        )}

        {/* Buttons */}
        {visible && (
          <div className="reveal delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/40 font-medium"
            >
              View Projects
            </a>

            <a
              href="#about"
              className="px-8 py-3 bg-transparent border border-slate-600 hover:border-blue-400 hover:text-blue-400 rounded-lg transition-all font-medium"
            >
              About Me
            </a>
          </div>
        )}

        {/* Tech Stack */}
        {visible && (
          <div className="reveal delay-4 mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span>FRONTEND</span>
            <span>UI/UX</span>
          </div>
        )}
      </div>
    </section>
  );
}
