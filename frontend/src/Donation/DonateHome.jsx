import React from "react";
import { useNavigate } from "react-router-dom";

const DonateHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-[#FADCD9] to-[#F8AFA6]">

      <h1 className="text-4xl font-bold text-[#333]">
        Choose Donation Type
      </h1>

      <div className="flex gap-6">

        {/* MONEY */}
        <div
          onClick={() => navigate("/donate/money")}
          className="cursor-pointer bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          💰 Money Donation
        </div>

        {/* ITEMS */}
        <div
          onClick={() => navigate("/donate/items")}
          className="cursor-pointer bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          📦 Donate Items
        </div>

      </div>
    </div>
  );
};

export default DonateHome;
