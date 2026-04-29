
import React, { useState } from "react";
import axios from "axios";

const DonateItem = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    itemType: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ FIXED (async + validations + API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔒 Login check
    const token = localStorage.getItem("token");
    if (!token) {
      setPopupMsg("Please login to donate ❤️");
      setShowPopup(true);
      return;
    }

    // ❗ Required fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.itemType
    ) {
      setPopupMsg("Please fill all required fields");
      setShowPopup(true);
      return;
    }

    // 📞 Phone validation
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setPopupMsg("Enter valid 10 digit phone number");
      setShowPopup(true);
      return;
    }

    try {
      await axios.post(
        "https://care-donate-hope.onrender.com/api/items",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPopupMsg("Pickup request submitted successfully 🚚");
      setShowPopup(true);

      // 🔄 Reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        city: "",
        itemType: "",
        description: "",
      });

    } catch (err) {
      setPopupMsg("Error submitting request ❌");
      setShowPopup(true);
    }
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#FADCD9] via-white to-[#F8AFA6] py-16 px-4">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="hidden md:block">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.ysOP5ymbLf15VKlbt8QDDAHaEs?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="donate items"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-bold text-[#333] mb-6 text-center">
            Donate Items 📦
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg border outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg border outline-none"
          />

          <textarea
            name="address"
            placeholder="Pickup Address *"
            value={formData.address}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg border outline-none"
          ></textarea>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg border outline-none"
          />

          <select
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg border outline-none"
          >
            <option value="">Select Item Type *</option>
            <option value="Clothes">Clothes 👕</option>
            <option value="Books">Books 📚</option>
            <option value="Food">Food 🍱</option>
            <option value="Toys">Toys 🧸</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="description"
            placeholder="Item Details (optional)"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg border outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#F79489] text-white py-3 rounded-lg hover:bg-[#ff6f61] transition"
          >
            Request Pickup 🚚
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Our team will contact you for pickup ❤️
          </p>
        </form>
      </div>

      {/* 💗 POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-pink-100 border border-pink-300 p-6 rounded-xl shadow-xl w-[300px] text-center">

            <p className="text-[#333] font-medium mb-4">
              {popupMsg}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#F79489] text-white px-5 py-2 rounded-lg hover:scale-105 transition"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default DonateItem;