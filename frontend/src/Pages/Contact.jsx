
import React, { useState , useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const formRef = useRef();


// ✅ POPUP STATES 
const [showPopup, setShowPopup] = useState(false);
const [popupMsg, setPopupMsg] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tvfnnwh",
        "template_ych93uo",
        formRef.current,
        "epVaG0rvqrLIoxuKL"
      )
     .then(
      () => {
        // popup
        setPopupMsg("Message sent successfully 🚀");
        setShowPopup(true);

        formRef.current.reset();

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error);// ❌ error popup
        setPopupMsg("Failed to send message ❌");
        setShowPopup(true);
      }
    );
};

  return (
    <section className="w-screen overflow-x-hidden py-20 px-6 bg-gradient-to-br from-[#FADCD9] via-white to-[#F8AFA6]">
      
      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#333]">
          Contact Us
        </h2>
        <p className="mt-4 text-[#555] text-base md:text-lg">
          We'd love to hear from you ❤️
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT INFO */}
        <div className="space-y-6">
          
          {[
            { title: "Address", value: "Delhi, India", icon: "📍" },
            { title: "Email", value: "xxxx@ngohelp.com", icon: "📧" },
            { title: "Phone", value: "+91 98xxxxxxx", icon: "📞" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-[#333]">
                {item.icon} {item.title}
              </h3>
              <p className="text-[#555] mt-2">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* RIGHT FORM */}
        <form
        ref = {formRef}
          onSubmit={sendEmail}
          className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-5 p-4 rounded-xl bg-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F79489] transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-5 p-4 rounded-xl bg-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F79489] transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mb-5 p-4 rounded-xl bg-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F79489] transition resize-none"
          ></textarea>


          <button
            type="submit"
            className="w-full bg-[#F79489] text-white py-3 rounded-full font-semibold shadow-lg hover:scale-[1.02] hover:bg-[#ff6f61] transition duration-300"
          >
            Send Message
          </button> 
          
        </form>

         {/* 💗 POPUP MODAL (yaha paste karo) */}
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

      </div>
    </section>
  );
};

export default Contact;