import mongoose from "mongoose";
const itemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
    },

    itemType: {
      type: String,
      required: true,
      enum: ["Clothes", "Books", "Food", "Toys", "Other"],
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Pending", "Picked", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Item", itemSchema);