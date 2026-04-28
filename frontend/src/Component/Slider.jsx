

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const data = [
  {
    title: "Food Drive",
    desc: "Distributed meals to 500+ people",
    img: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
  },
  {
    title: "Education",
    desc: "Helping kids learn and grow",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    title: "Medical Camp",
    desc: "Free health checkups for needy",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289",
  },
  {
    title: "Volunteers",
    desc: "100+ active volunteers",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  },
];

const Slider = () => {
  return (
    <section className="w-screen overflow-x-hidden py-20 px-6 bg-gradient-to-br from-[#FADCD9] via-white to-[#F8AFA6]">
      
      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#333]">
          Our Impact
        </h2>
        <p className="mt-4 text-[#555] text-base md:text-lg">
          See how we are creating meaningful change in lives.
        </p>
      </div>

      {/* SWIPER */}
      <div className="max-w-7xl mx-auto mt-14">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              
              <div className="group bg-white/40 backdrop-blur-lg border border-white/20 p-5 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                
                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <h3 className="mt-4 text-lg font-semibold text-[#333]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#555] mt-2">
                  {item.desc}
                </p>

                {/* CTA */}
                <button className="mt-4 text-sm font-semibold text-[#F79489] hover:underline">
                  Join the mission →
                </button>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;