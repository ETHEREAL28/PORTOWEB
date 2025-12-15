import { useState, useEffect } from "react";
import { Code, Palette, ExternalLink } from "lucide-react";

import Poster1 from "../assets/posters/poster1.png";
import Poster2 from "../assets/posters/poster2.png";
import Poster3 from "../assets/posters/poster3.jpg";
import Poster4 from "../assets/posters/poster4.jpg";
import Poster5 from "../assets/posters/poster5.jpg";
import Poster6 from "../assets/posters/poster6.jpg";
import Poster7 from "../assets/posters/uiuixcoffeshop.png";
import Poster8 from "../assets/posters/postermaroon2024.png";
import Poster9 from "../assets/posters/mlbbmaroon2024.png";
import Poster10 from "../assets/posters/bannerrdk.png";
import Poster11 from "../assets/posters/stikerrdk.png";
import Poster12 from "../assets/posters/idulfitri.png";
import Poster13 from "../assets/posters/isramiraj.png";


import Portoweb from "../assets/images/edwinportowebupdate.png";
import Terserahmart from "../assets/images/terserahmart.png";
import Coffeshop from "../assets/images/coffeshop.png";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* ===== TITLE ===== */}
        <h2 className="text-5xl font-bold mb-16 text-center text-slate-800">
          My Projects
        </h2>

        {/* ===== WEB PROJECTS ===== */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold mb-8 text-slate-700 flex items-center gap-3">
            <Code className="w-8 h-8 text-blue-600" />
            Web Development
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mb-4 flex items-center justify-center">
                <img src={Portoweb} alt="Project 1" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Portfolio Website</h4>
              <p className="text-slate-600 mb-3">Personal portfolio website built with modern UI principles.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">React, Tailwind CSS</span>
                <a href="https://edwinportoweb-lyart.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mb-4 flex items-center justify-center">
                <img src={Terserahmart} alt="Project 2" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">E-Commerce Platform Terserahmart</h4>
              <p className="text-slate-600 mb-3">Online shopping platform with product listing and UI design(not hosting yet).</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Php, JavaScript</span>
                <ExternalLink className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800" />
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mb-4 flex items-center justify-center">
                <img src={Coffeshop} alt="Project 3" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Coffe Shop Website</h4>
              <p className="text-slate-600 mb-3">Coffee shop website with menu display(not hosting yet)</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Html, Css, JavaScript</span>
                <ExternalLink className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== DESIGN POSTERS ===== */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-slate-700 flex items-center gap-3">
            <Palette className="w-8 h-8 text-blue-600" />
            Posters & Visual Designs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Poster 1 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster1)}>
                <img src={Poster1} alt="Poster 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Poster hari pahlawan nasional 2025</p>
              </div>
            </div>

            {/* Poster 2 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster2)}>
                <img src={Poster2} alt="Poster 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Poster Ucapan Selamat Wisuda</p>
              </div>
            </div>

            {/* Poster 3 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster3)}>
                <img src={Poster3} alt="Poster 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Tipografi Cover Feed Instagram</p>
              </div>
            </div>

            {/* Poster 4 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster4)}>
                <img src={Poster4} alt="Poster 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Click to view full image</p>
              </div>
            </div>

            {/* Poster 5 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster5)}>
                <img src={Poster5} alt="Poster 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Tipografi Cover Feed Instagram</p>
              </div>
            </div>

            {/* Poster 6 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster6)}>
                <img src={Poster6} alt="Poster 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Tipografi Cover Feed Instagram</p>
              </div>
            </div>

            {/* Poster 7 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster7)}>
                <img src={Poster7} alt="Poster 7" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">UI/UX CofeShop</p>
              </div>
            </div>

              {/* Poster 8 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster8)}>
                <img src={Poster8} alt="Poster 8" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Poster Talkshow MaroonDay 2024</p>
              </div>
            </div>

              {/* Poster 9 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster9)}>
                <img src={Poster9} alt="Poster 9" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Poster MLBB MaroonDay 2024</p>
              </div>
            </div>


              {/* Poster 10 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster10)}>
                <img src={Poster10} alt="Poster 10" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Banner Ramadhan Di Kampus UTDI 2025</p>
              </div>
            </div>

              {/* Poster 11 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1300ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster11)}>
                <img src={Poster11} alt="Poster 11" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Stiker Ramadhan Di Kampus UTDI 2025</p>
              </div>
            </div>
              {/* Poster 12 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1400ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster12)}>
                <img src={Poster12} alt="Poster 12" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Feed IG "Selamat Idul Fitri"</p>
              </div>
            </div>

              {/* Poster 13 */}
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1500ms" }}
            >
              <div className="w-full h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedPoster(Poster13)}>
                <img src={Poster13} alt="Poster 13" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">Feed IG "Isra Miraj"</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== MODAL PREVIEW ===== */}
      {selectedPoster && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-999"
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