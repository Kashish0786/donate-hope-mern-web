
import dotenv from "dotenv";
dotenv.config({ override: true });

console.log("GLOBAL CHECK:", {
  key: process.env.RAZORPAY_KEY_ID,
  secret: process.env.RAZORPAY_KEY_SECRET,
});

// console.log("RAZORPAY KEY TEST:", process.env.RAZORPAY_KEY_ID);
// console.log("RAZORPAY SECRET TEST:", process.env.RAZORPAY_KEY_SECRET);

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";


const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/items", itemRoutes);

// test
app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});