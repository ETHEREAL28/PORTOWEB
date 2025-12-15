import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import foto from '../assets/images/Foto.jpg';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-slate-50 relative overflow-hidden py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-slate-800">
            About Me
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 mb-6">
            Nama saya Edwin Winanda, mahasiswa Informatika yang memiliki ketertarikan
            pada pengembangan web dan design. Saya terbiasa mengerjakan proyek
            berbasis front-end dengan fokus pada tampilan yang rapi, fungsional,
            dan nyaman digunakan. Saya menikmati proses mengubah ide desain menjadi
            antarmuka nyata menggunakan React, Tailwind CSS, dan teknologi web modern
            lainnya.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600">
            Walau keterampilan saya berfokus pada front-end, saya juga memiliki
            pemahaman dasar tentang back-end dan database. Saya bersemangat untuk
            terus belajar dan berkembang di bidang pengembangan web.
          </p>

          <div className="flex gap-4 mt-8 justify-center lg:justify-start lg:pl-20">
            <a href="https://github.com/ETHEREAL28" className="p-3 bg-slate-800 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/edwin-winanda-b757bb356" className="p-3 bg-slate-800 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:edwinwinanda28@gmail.com" className="p-3 bg-slate-800 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/edwin.win__" className="p-3 bg-slate-800 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <div className="relative flex justify-center lg:justify-start lg:pl-20">
            <div className="w-72 sm:w-80 lg:w-120 h-80 sm:h-96 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl">
              <img
                src={foto}
                alt="Edwin Porto"
                className="w-64 sm:w-72 lg:w-90 h-80 lg:h-120 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;