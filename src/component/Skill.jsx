import React from "react";
import { FaJs, FaReact, FaHtml5, FaCss3, FaNode, FaPhp } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiFigma, SiAdobelightroom, SiPhp, SiPhpmyadmin, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "Canva", icon: <SiCanva />, color: "bg-purple-500" },
  { name: "Figma", icon: <SiFigma />, color: "bg-violet-500" },
  { name: "Lightroom", icon: <SiAdobelightroom />, color: "bg-blue-600" },
  { name: "JavaScript", icon: <FaJs />, color: "bg-yellow-500" },
  { name: "React", icon: <FaReact />, color: "bg-cyan-500" },
  { name: "HTML5", icon: <FaHtml5 />, color: "bg-orange-500" },
  { name: "CSS3", icon: <FaCss3 />, color: "bg-blue-500" },
  { name: "Node.js", icon: <FaNode />, color: "bg-green-500" },
  { name: "php", icon: <FaPhp />, color: "bg-blue-600" },
  { name: "php myadmin", icon: <SiPhpmyadmin />, color: "bg-orange-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-sky-500" }
];

const Skill = () => {
  const track = [...skills, ...skills]; // duplicate for infinite loop

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">

      {/* Inject keyframes tanpa tailwind.config */}
      <style>
        {`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <h2 className="text-3xl font-bold text-blue-400 text-center mb-10">
        My Skills & Tools
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 w-max"
          style={{
            animation: "scroll-horizontal 20s linear infinite",
          }}
        >
          {track.map((skill, index) => (
            <div
              key={index}
              className={`min-w-[180px] h-28 rounded-2xl flex flex-col items-center justify-center ${skill.color} text-white shadow-lg`}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skill;