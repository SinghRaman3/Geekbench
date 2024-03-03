import express from "express";
import {ai} from "../controllers/ai.js";
const router = express.Router();

router.post("/", ai);

export default router;
