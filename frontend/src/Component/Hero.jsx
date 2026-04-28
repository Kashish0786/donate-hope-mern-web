

import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen  pt-10 flex flex-col bg-gradient-to-br from-[#FADCD9] via-[#F8AFA6] to-[#F79489] overflow-hidden pb-24">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* TEXT */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Make a <span className="text-[#333]">Difference</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-lg mx-auto md:mx-0">
            Your small contribution can bring big change in someone's life.
            Be the reason someone smiles today 💛
          </p>

          <div 
          //  onClick={() => navigate("/donate")}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#333333] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-black transition duration-300">
              Donate Now
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative group">
            <img
              src="https://media.istockphoto.com/id/186543849/photo/depressed-little-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=-Eg25uHDf43S9hRCYbeyxZfze_soBSnGFtK8o56CxCQ="
              alt="child"
              className="rounded-3xl shadow-2xl w-[280px] sm:w-[320px] md:w-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />

            {/* GLASS CARD */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg text-[#333] text-sm font-semibold">
              ❤️ 1200+ Lives Impacted
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS (NOW NOT ABSOLUTE) */}
      <div className="w-full px-4 md:px-10 mt-16 md:mt-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "Give Donation",
              desc: "Support families and children in need with your contribution.",
            },
            {
              title: "Become Volunteer",
              desc: "Join hands with us and create real impact in communities.",
            },
            {
              title: "Give Scholarship",
              desc: "Help children achieve their dreams through education.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:-translate-y-2 hover:scale-105 hover:bg-white/40 transition duration-300"
            >
              <h3 className="font-bold text-lg text-[#333]">
                {item.title}
              </h3>
              <p className="text-[#444] mt-2 text-sm">{item.desc}</p>
              <a
                href="#"
                className="text-[#333] mt-3 inline-block font-semibold hover:underline"
              >
                Learn how it helps ❤️
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;