import express from "express";
import getRazorpayInstance from "../config/razorpay.js";
import donation from "../models/donation.js";
const router = express.Router();

router.post("/create-order", async (req, res) => {
  try {

    console.log("BODY RECEIVED:", req.body);

    const amount = Number(req.body?.amount); 

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }
     
    const razorpay = getRazorpayInstance();

    const options = {
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "order_" + Date.now(),
    };

    console.log("RAZORPAY INSTANCE:", razorpay);

    const order = await razorpay.orders.create(options);

    console.log("ORDER:", order);

    res.json(order);
  } 
  
  catch (err) {
    console.log("FULL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/save-payment", async (req, res) => {
  try {
    const { amount, paymentId, orderId } = req.body;

    const donation = new Donation({
      amount,
      paymentId,
      orderId,
      status: "success",
    });

    await donation.save();

    res.json({ message: "Saved to DB", donation });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;