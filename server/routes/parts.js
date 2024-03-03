import express from "express";
import { cpuData, gpuData, hddData, monitorData, ramData, ssdData } from "../controllers/parts.js";

const router = express.Router()

router.get("/cpu", cpuData)
router.get("/gpu", gpuData)
router.get("/ram", ramData)
router.get("/ssd", ssdData)
router.get("/hdd", hddData)
router.get("/monitor", monitorData)

export default router