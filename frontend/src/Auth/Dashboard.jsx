
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DonateMoney from "../Donation/DonateMoney";
import DonateItem from "../Donation/DonateItem";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [activeTab, setActiveTab] = useState("dashboard");

  const [stats, setStats] = useState({
    totalDonation: 0,
    totalItems: 0,
    totalDonationsCount: 0,
  });

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 REAL DATA FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const donationRes = await axios.get("https://care-donate-hope.onrender.com/api/donations/my", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const itemRes = await axios.get("https://care-donate-hope.onrender.com/api/items/my", {
          headers: { Authorization: `Bearer ${token}` },
        });


        const donations = Array.isArray(donationRes.data)
          ? donationRes.data
          : donationRes.data.donations || [];

        const items = Array.isArray(itemRes.data)
          ? itemRes.data
          : itemRes.data.items || [];

        // 💰 total money
        const totalDonation = donations.reduce(
          (acc, d) => acc + (d.amount || 0),
          0
        );

        setStats({
          totalDonation,
          totalItems: items.length,
          totalDonationsCount: donations.length + items.length,
        });

        // 🔥 combine history
        const historyData = [
          ...donations.map((d) => ({
            type: "money",
            amount: d.amount,
            date: d.createdAt,
          })),
          ...items.map((i) => ({
            type: "item",
            itemType: i.itemType,
            date: i.createdAt,
          })),
        ];

        setHistory(
          historyData.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          )
        );

      } catch (err) {
        console.log("Dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FADCD9] to-[#F8AFA6] p-6 pt-24">

      {/* 🔙 BACK BUTTON */}
      {activeTab !== "dashboard" && (
        <button
          onClick={() => setActiveTab("dashboard")}
          className="mb-6 bg-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          ⬅ Back to Dashboard
        </button>
      )}

      {/* ================= DASHBOARD VIEW ================= */}
      {activeTab === "dashboard" && (
        <>
          {/* HEADER */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-[#333]">
              👋 Welcome back, {user?.name}
            </h1>
            <p className="text-gray-600 mt-1">
              You're making a real impact ❤️ Keep going!
            </p>
          </div>

          {/* LOADING */}
          {loading ? (
            <p className="text-center mt-10">Loading...</p>
          ) : (
            <>
              {/* STATS */}
              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-8">

                <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                  <h2 className="text-gray-500">💰 Total Donation</h2>
                  <p className="text-2xl font-bold text-[#F79489] mt-2">
                    ₹{stats.totalDonation}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                  <h2 className="text-gray-500">📦 Items Donated</h2>
                  <p className="text-2xl font-bold text-[#F79489] mt-2">
                    {stats.totalItems}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                  <h2 className="text-gray-500">📊 Total Contributions</h2>
                  <p className="text-2xl font-bold text-[#F79489] mt-2">
                    {stats.totalDonationsCount}
                  </p>
                </div>

              </div>

              {/* PROGRESS */}
              <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-3">
                  🎯 Your Impact Progress
                </h2>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-[#F79489] h-3 rounded-full"
                    style={{
                      width: `${Math.min(
                        (stats.totalDonation / 5000) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Goal: ₹5000
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="max-w-5xl mx-auto flex gap-4 mt-8">

                <button
                  onClick={() => setActiveTab("money")}
                  className="flex-1 bg-white py-3 rounded-xl shadow hover:scale-105 transition"
                >
                  💰 Donate Money
                </button>

                <button
                  onClick={() => setActiveTab("items")}
                  className="flex-1 bg-white py-3 rounded-xl shadow hover:scale-105 transition"
                >
                  📦 Donate Items
                </button>

              </div>

              {/* ACTIVITY */}
              <div className="max-w-5xl mx-auto mt-10">
                <h2 className="text-xl font-bold mb-4">
                  📜 Recent Activity
                </h2>

                {history.length === 0 ? (
                  <p className="text-gray-500">
                    No donations yet
                  </p>
                ) : (
                  history.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-lg mb-2 shadow"
                    >
                      {item.type === "money"
                        ? `💰 Donated ₹${item.amount}`
                        : `📦 Donated ${item.itemType}`}

                      <br />

                      <span className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* LOGOUT */}
              <div className="max-w-5xl mx-auto mt-10">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
                >
                  🚪 Logout
                </button>
              </div>
            </>
          )}
        </>
      )}

      {/* ================= DONATE MONEY ================= */}
      {activeTab === "money" && <DonateMoney />}

      {/* ================= DONATE ITEMS ================= */}
      {activeTab === "items" && <DonateItem />}
    </div>
  );
};

export default Dashboard;