
import React, { useState } from "react";
import axios from "axios";
import { payNow } from "../Utils/payment";

const DonateMoney = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const handleDonate = async (e) => {
    e.preventDefault();

    // ✅ validation
    if (!amount || amount <= 0) {
      setPopupMsg("Please enter a valid amount ❤️");
      setShowPopup(true);
      return;
    }

    try {
      await payNow(Number(amount));
      // setLoading(true);


    // 2. Payment successful → backend call
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/donations",
        { amount: Number(amount) }, // ✅ convert to number
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPopupMsg(`Donation successful ₹${amount} ❤️`);
      setShowPopup(true);
      setAmount("");

    } catch (err) {
      setPopupMsg(
        err.response?.data?.message || "Donation failed ❌"
      );
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  const amounts = [50, 100, 200, 500];

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-br from-[#FADCD9] via-white to-[#F8AFA6]">

      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#333]">
          Make a Donation
        </h2>
        <p className="mt-4 text-[#555]">
          Your small contribution can bring a big change 💖
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="donation"
            className="rounded-3xl shadow-xl w-full max-w-md"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleDonate}
          className="bg-white/40 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#333]">
            Choose Amount
          </h3>

          {/* QUICK AMOUNT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {amounts.map((val) => (
              <button
                type="button"
                key={val}
                onClick={() => setAmount(val)}
                className={`p-3 rounded-lg font-semibold ${
                  amount == val
                    ? "bg-[#F79489] text-white"
                    : "bg-white hover:bg-[#F8AFA6]"
                }`}
              >
                ₹{val}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg border outline-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F79489] text-white py-3 rounded-lg hover:bg-[#ff6f61] transition"
          >
            {loading ? "Processing..." : "Donate Now ❤️"}
          </button>

          <p className="text-sm text-gray-500 mt-3 text-center">
            🔒 Secure donation
          </p>
        </form>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[300px]">
            <p className="mb-4">{popupMsg}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#F79489] text-white px-5 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DonateMoney;
