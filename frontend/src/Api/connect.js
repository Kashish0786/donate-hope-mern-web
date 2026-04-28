
import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const handleSignup = async (name, email, password) => {
  return await axios.post(`${API}/signup`, { name, email, password });
};

export const handleLogin = async (email, password) => {
  return await axios.post(`${API}/login`, { email, password });
};