import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

import cert1 from "../assets/sertifikat/sertifikat_dicoding1.jpg";
import cert2 from "../assets/sertifikat/sertifikat_dicoding2.jpg";
import cert3 from "../assets/sertifikat/sertifikat_myskill1.jpg";
import cert4 from "../assets/sertifikat/sertifikat_myskill2.jpg";
import cert5 from "../assets/sertifikat/sertifikat_myskill3.jpg";
import cert6 from "../assets/sertifikat/sertifikat_myskill4.jpg";
import cert7 from "../assets/sertifikat/sertifikat_myskill5.jpg";

const Certificates = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    const el = document.getElementById("certificates");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      image: cert1,
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      year: "2024",
    },
    {
      image: cert2,
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding",
      year: "2025",
    },
    {
      image: cert3,
      title: "WEB 3.0 & BLOCKCHAIN",
      issuer: "MySkill",
      year: "2025",
    },
    {
      image: cert4,
      title: "PRACTICE: MAKING A TO DO LIST WEBSITE",
      issuer: "MySkill",
      year: "2025",
    },
    {
      image: cert5,
      title: "REACT COMPONENT",
      issuer: "MySkill",
      year: "2025",
    },
    {
      image: cert6,
      title: "BACKEND DEVELOPMENT INTRODUCTION",
      issuer: "MySkill",
      year: "2025",
    },
    {
      image: cert7,
      title: "INTERNET INTRODUCTION",
      issuer: "MySkill",
      year: "2025",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700
              hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setSelectedCert(cert.image)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1">
                  {cert.title}
                </h4>
                <p className="text-slate-400 text-sm mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {cert.year}
                  </span>
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL PREVIEW ===== */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <img
            src={selectedCert}
            alt="Certificate Full"
            className="max-w-screen max-h-screen object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
