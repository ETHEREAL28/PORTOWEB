import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Lanyard from '../assets/images/lanyard.png';
import Kertas1 from '../assets/images/paper1.png';
import Kertas2 from '../assets/images/paperpin.png';
import Background from '../assets/images/texture_kertas.png';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    const el = document.getElementById('about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const titleStyle = "text-3xl font-extrabold text-[#004A7F]";
  const bodyStyle = "text-base text-neutral-800 font-medium";

  return (
    <section
      id="about"
      className="h-screen bg-slate-900 relative overflow-hidden flex items-center justify-center py-20"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}
    >

    <div className="pointer-events-none absolute top-0 left-0 w-full h-30 bg-gradient-to-b from-slate-900/90 to-transparent z-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-slate-900/90 to-transparent z-40" />

      <style>
        {`
          @keyframes swingOnce {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(6deg); }
            50% { transform: rotate(-5deg); }
            75% { transform: rotate(3deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes paperOnce {
            0% { transform: rotate(8deg) translateY(-10px); }
            60% { transform: rotate(2deg) translateY(6px); }
            100% { transform: rotate(3deg) translateY(0); }
          }
        `}
      </style>

      {/* MOBILE */}
      <div className="md:hidden w-full flex flex-col items-center pt-0 px-6">
        <img
          src={Lanyard}
          alt="Lanyard"
          className={`
            w-70 mb-8 -top-10 origin-top
            ${visible ? 'animate-[swingOnce_2s_ease-out_forwards]' : ''}
          `}
        />

         <h1
          className={`
            text-3xl font-extrabold text-[#4db5ff]
            static text-center mb-4
            md:relative md:top-[20%] md:left-[30%] md:text-left
          `}>
            About Me
          </h1>

<p
  className={`
    text-base font-medium text-white leading-relaxed
    static text-center px-4 max-w-full
    md:absolute md:top-[25%] md:left-[30%] md:max-w-[50%] md:px-0 md:text-left
  `}
>
  Halo! saya Edwin Winanda, mahasiswa Informatika yang memiliki ketertarikan
  pada pengembangan web dan design. Saya terbiasa mengerjakan proyek
  front-end dengan fokus pada tampilan yang rapi, fungsional, dan nyaman
  digunakan menggunakan React dan Tailwind CSS. Saya juga memiliki pengalaman
  dalam membuat desain grafis untuk berbagai keperluan seperti UI/UX, poster,
  banner, dan konten media sosial menggunakan Figma dan Canva.
  <br /><br />
  Meskipun keterampilan saya berfokus pada front-end, saya juga memiliki
  pemahaman dasar tentang back-end dan database, serta bersemangat untuk
  terus belajar dan berkembang.
</p>



      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative w-full max-w-6xl h-[700px] ml-25 mr-auto scale-90 md:scale-100">
        <div className="absolute -top-115 -right-50 w-1/3 h-[90%] z-30">
          <div
            className={`
              w-full h-full transition-opacity duration-500
              ${visible ? 'animate-[paperOnce_1.6s_ease-out_forwards]' : 'opacity-0'}
            `}
            style={{ transformOrigin: 'left top' }}
          >
            <img src={Kertas2} className="w-[250%] h-[250%] object-contain" />

            <p className={`${titleStyle} absolute top-[84%] left-[28%] right-[5%]`}>
              Pengalaman Organisasi
            </p>

            <div className="absolute top-[100%] left-[15%] right-[10%]">
              <ul className="space-y-3 text-sm">
                <li>
                  <h4 className="font-semibold text-gray-800">
                    Pengurus Harian HIMAFORKA <br /> Skill Development Division
                  </h4>
                  <p className="text-gray-600">
                    Mengelola website dan media sosial HIMAFORKA serta berkontribusi
                    pada pengembangan skill anggota melalui konten digital.
                  </p>
                </li>

                <li>
                  <h4 className="font-semibold text-gray-800">
                    Panitia Maroon Day HIMAFORKA 2024 <br /> Divisi PDD
                  </h4>
                  <p className="text-gray-600">
                    Mendesain poster kegiatan dan dokumentasi acara.
                  </p>
                </li>

                <li>
                  <h4 className="font-semibold text-gray-800">
                    Panitia Latihan Alam Taekwondo 2023 <br /> Divisi PDD
                  </h4>
                  <p className="text-gray-600">
                    Mendesain banner kegiatan dan dokumentasi.
                  </p>
                </li>

                <li>
                  <h4 className="font-semibold text-gray-800">
                    Panitia Ramadan Kampus UTDI (WAMIKA) <br /> Divisi PDD
                  </h4>
                  <p className="text-gray-600">
                    Mendesain banner kegiatan dan dokumentasi.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-20 -rotate-2">
          <img src={Kertas1} className="w-full h-full object-contain" />

          <div className="absolute top-0 left-0 p-10 pt-16 w-full h-full">
            <div className="absolute -top-18 left-17">
              <img
                src={Lanyard}
                className={`
                  w-80 origin-top
                  ${visible ? 'animate-[swingOnce_2s_ease-out_forwards]' : ''}
                `}
              />
            </div>

            <h1 className={`${titleStyle} absolute top-[18%] left-[30%]`}>
              About Me
            </h1>

            <p
              className={`${bodyStyle} absolute top-[25%] left-[30%] max-w-[50%]`}
              style={{ lineHeight: '1.6' }}
            >
              Halo! saya Edwin Winanda, mahasiswa Informatika yang memiliki ketertarikan
              pada pengembangan web dan design. Saya terbiasa mengerjakan proyek
              front-end dengan fokus pada tampilan yang rapi, fungsional, dan nyaman
              digunakan menggunakan React dan Tailwind CSS. Saya juga memiliki pengalaman
              dalam membuat desain grafis untuk berbagai keperluan seperti UI/UX, poster,
              banner, dan konten media sosial menggunakan Figma dan Canva.
              <br /><br />
              Meskipun keterampilan saya berfokus pada front-end, saya juga memiliki
              pemahaman dasar tentang back-end dan database, serta bersemangat untuk
              terus belajar dan berkembang.
            </p>

            <div className="absolute bottom-14 left-[30%] top-[68%] flex gap-6 text-neutral-700">
              <Github size={28} />
              <Instagram size={28} />
              <Linkedin size={28} />
              <Mail size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
