
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { handleLogin, handleSignup } from "../Api/connect";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, []);


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await handleLogin(email, password);


        // 💾 store login data
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // 🚀 go to dashboard
        navigate("/dashboard");
      } else {
        const res = await handleSignup(name, email, password);

        alert(res.data.message);

        // switch to login
        setIsLogin(true);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }

    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FADCD9] to-[#F8AFA6]">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[350px]">

        <h2 className="text-3xl font-bold text-[#333] text-center mb-2">
          {isLogin ? "Welcome 👋" : "Create Account"}
        </h2>

        <p className="text-gray-500 text-center mb-6 text-sm">
          {isLogin ? "Login to continue" : "Signup to get started"}
        </p>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          {/* Name */}
          {!isLogin && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="ex: Kashish"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
            />
          )}

          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="ex: kashish@gmail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none pr-10"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-black"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#F8AFA6] to-[#FADCD9] py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

        </form>

        {/* Toggle */}
        <p className="text-center text-sm mt-5">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-[#F79489] cursor-pointer font-semibold"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default AuthPage;