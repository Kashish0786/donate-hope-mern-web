import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    paymentMethod: {
      type: String,
      default: "Manual", // future: Razorpay / UPI etc
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Donation", donationSchema);
