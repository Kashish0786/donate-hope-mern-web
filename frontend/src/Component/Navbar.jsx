
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
        
      <nav className="fixed w-full top-0 left-0 h-20 z-50 backdrop-blur-lg bg-[#FADCD9]/40 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center gap-16 ">
        
        {/* LOGO */}
        <Link to="/">
          <h1 className="text-2xl font-extrabold text-[#F79489] cursor-pointer">
            CareConnect
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center text-[#333] font-medium">

          <Link to="/"><li className="hover:text-[#F79489]">Home</li></Link>
          <Link to="/about"><li className="hover:text-[#F79489]">About</li></Link>
          <Link to="/contact"><li className="hover:text-[#F79489]">Contact</li></Link>
          <Link to="/login"><li className="hover:text-[#F79489]">Login</li></Link>

          {/* 🔥 DONATE DROPDOWN */}
          <li className="relative group cursor-pointer">
            <span className="bg-[#F79489] text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transitionhover:text-[#F79489]">Donate</span>

            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-xl p-3 top-6 w-40">
              
              <Link to="/donate-money">
                <p className="hover:text-[#F79489] py-1">💰 Money</p>
              </Link>

              <Link to="/donate-items">
                <p className="hover:text-[#F79489] py-1">📦 Items</p>
              </Link>

            </div>
          </li>

        </ul>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-[#333]"></span>
          <span className="w-6 h-[2px] bg-[#333]"></span>
          <span className="w-6 h-[2px] bg-[#333]"></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-md p-6">
          <ul className="flex flex-col gap-4 text-center text-[#333]">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            {/* Mobile Donate Options */}
            <div className="border-t pt-3">
              <p className="font-semibold text-[#F79489]">Donate</p>

              <Link to="/donate-money" onClick={() => setOpen(false)}>
                <p className="mt-2">💰 Money</p>
              </Link>

              <Link to="/donate-items" onClick={() => setOpen(false)}>
                <p>📦 Items</p>
              </Link>
            </div>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

