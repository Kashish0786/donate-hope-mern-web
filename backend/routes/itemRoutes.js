import express from "express";
import { createItem, getMyItems } from "../controllers/itemCont.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createItem);
router.get("/my", protect, getMyItems);

export default router;