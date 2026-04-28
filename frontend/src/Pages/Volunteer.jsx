import React, { useState } from "react";

const Volunteer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    alert("Thank you for volunteering ❤️");
    setForm({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <section className="w-full py-16 bg-[#FADCD9] px-6">
      
      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Become a Volunteer
        </h2>
        <p className="mt-3 text-gray-600">
          Join us and make a difference in society 💖
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10">
        
        {/* LEFT INFO */}
        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold">Why Volunteer?</h3>

          <ul className="space-y-2">
            <li>✔ Work with NGOs and help communities</li>
            <li>✔ Participate in tree plantation & clean-up drives</li>
            <li>✔ Help in animal welfare activities</li>
            <li>✔ Learn event management skills</li>
            <li>✔ Teach and educate children</li>
          </ul>

          <p className="mt-4">
            Even small efforts can create a big impact. Join us today 🚀
          </p>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg border outline-none text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg border outline-none text-black"
          />

          {/* ROLE SELECT */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg border outline-none text-black"
          >
            <option value="">Select Role</option>
            <option value="ngo">NGO Work</option>
            <option value="environment">Environment</option>
            <option value="education">Teaching</option>
            <option value="animal">Animal Welfare</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#F79489] text-white py-3 rounded-lg hover:bg-[#F8AFA6] transition"
          >
            Join Now
          </button>
        </form>

      </div>
    </section>
  );
};

export default Volunteer;