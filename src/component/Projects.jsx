import React, { useState, useEffect } from 'react';
import { Code, Palette, ExternalLink } from 'lucide-react';

// Import semua poster
import Poster1 from '../assets/posters/poster1.png';
import Poster2 from '../assets/posters/poster2.png';
import Poster3 from '../assets/posters/poster3.jpg';
import Poster4 from '../assets/posters/poster4.jpg';
import Poster5 from '../assets/posters/poster5.jpg';
import Poster6 from '../assets/posters/poster6.jpg';

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null); // <-- Modal preview

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const webProjects = [
    { title: "Portfolio Website", desc: "Personal portfolio with React & Tailwind CSS", tech: "React, Tailwind" },
    { title: "E-Commerce Platform", desc: "Full-stack online shopping platform", tech: "React, Node.js" },
    { title: "Task Manager App", desc: "Productivity app with real-time updates", tech: "React, Firebase" },
  ];

  const designPosters = [
    Poster1,
    Poster2,
    Poster3,
    Poster4,
    Poster5,
    Poster6,
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-16 text-center text-slate-800">My Projects</h2>


        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-slate-700 flex items-center gap-3">
            <Code className="w-8 h-8 text-blue-600" />
            Web Development
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {webProjects.map((project, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="w-16 h-16 text-blue-400" />
                </div>

                <h4 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h4>
                <p className="text-slate-600 mb-3">{project.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{project.tech}</span>
                  <ExternalLink className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800" />
                </div>
              </div>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-3xl font-semibold mb-8 text-slate-700 flex items-center gap-3">
            <Palette className="w-8 h-8 text-blue-600" />
            Posters & Visual Designs
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {designPosters.map((poster, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(i + 3) * 100}ms` }}
              >
                
                <div
                  className="w-full h-80 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPoster(poster)}
                >
                  <img
                    src={poster}
                    alt={`Poster ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm text-slate-500">Click to view full image</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MODAL FULL POSTER */}
      {selectedPoster && (
  <div
    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[999]"
    onClick={() => setSelectedPoster(null)}
  >
    <img
      src={selectedPoster}
      alt="Poster Full"
      className="max-w-screen max-h-screen w-auto h-auto object-contain"
    />
  </div>
)}
    </section>
  );
};

export default Projects;