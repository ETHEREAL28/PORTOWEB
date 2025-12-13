import React, { useState, useEffect } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('certificates');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const certificates = Array(6).fill(null);

  return (
    <section id="certificates" className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-4 text-center text-slate-100">Certificates</h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          My Professional Certifications & Achievements
        </p>
        
        <div className="grid grid-cols-3 gap-8">
          {certificates.map((_, i) => (
            <div 
              key={i}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center border-b border-slate-700">
                <Award className="w-24 h-24 text-blue-400" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-100 mb-2">Certificate {i + 1}</h4>
                <p className="text-slate-400 text-sm mb-3">Professional Certification</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">2024</span>
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;