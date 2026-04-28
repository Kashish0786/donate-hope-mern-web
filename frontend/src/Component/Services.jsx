

import React from "react";

const services = [
  {
    title: "Food Donation",
    desc: "Help provide meals to those in need and fight hunger.",
    icon: "🍱",
  },
  {
    title: "Education Support",
    desc: "Support children's education and build a brighter future.",
    icon: "📚",
  },
  {
    title: "Medical Help",
    desc: "Provide medical assistance to those who can't afford it.",
    icon: "🏥",
  },
  {
    title: "Clothes Donation",
    desc: "Donate clothes and bring warmth to someone's life.",
    icon: "👕",
  },
];

const Services = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-[#FADCD9] via-white to-[#F8AFA6]">

      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#333]">
          Our Services
        </h2>
        <p className="mt-4 text-[#555] text-base md:text-lg">
          We focus on creating real impact through meaningful initiatives.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {services.map((item, index) => (
          <div
            key={index}
            className="group bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
          >
            {/* ICON */}
            <div className="text-5xl transform group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="mt-5 text-xl font-semibold text-[#333]">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="mt-3 text-[#555] text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* CTA */}
            <button className="mt-5 text-sm font-semibold text-[#F79489] hover:underline">
              Be the reason for someone smiles →
            </button>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;