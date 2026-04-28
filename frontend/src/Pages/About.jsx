
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

  return (
    <section className="w-screen overflow-x-hidden py-20 px-6 bg-gradient-to-br from-[#FADCD9] via-white to-[#F8AFA6]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
            alt="about"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover transform group-hover:scale-105 transition duration-500"
          />

          {/* floating badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg text-sm font-semibold text-[#333]">
            ❤️ Making Impact Daily
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#333]">
            About Us
          </h2>

          <p className="mt-5 text-[#555] leading-relaxed text-base md:text-lg">
            We didn’t start as an organization—we started as people who couldn’t 
            ignore what we saw around us. A hungry child on the street, an elderly 
            person waiting for help, a student with dreams but no support—these 
            moments moved us to act. 
            <br></br>
            What began as small efforts slowly turned into
            a shared purpose. Today, we are a group of passionate volunteers united 
            by one belief: no one should feel forgotten in their own society.
          </p>

          <p className="mt-4 text-[#555] leading-relaxed text-base md:text-lg">
            Through food, education, healthcare, and community service, we try every 
            day to bring hope. <br></br>
            We are also connected with several NGOs that support and help us grow in our mission.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {[
              { num: "500+", label: "People Helped" },
              { num: "100+", label: "Volunteers" },
              { num: "50+", label: "Events Done" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-lg border border-white/20 p-5 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-2xl font-bold text-[#333]">
                  {item.num}
                </h3>
                <p className="text-sm text-[#555] mt-1">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

          {/* BUTTON */}
          <button 
           onClick={() => navigate("/volunteer")}
          className="mt-8 px-8 py-3 bg-[#F79489] text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-[#ff6f61] transition duration-300">
            Join Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;