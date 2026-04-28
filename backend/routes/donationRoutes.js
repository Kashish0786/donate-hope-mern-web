import express from "express";
import { createDonation, getMyDonations } from "../controllers/donationCont.js";
import { protect } from "../middleware/authmiddleware.js";
const router = express.Router();

router.post("/", protect, createDonation);
router.get("/my", protect, getMyDonations);

export default router;