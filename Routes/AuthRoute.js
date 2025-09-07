import express from "express";
import { registerUser, loginUser } from "../Controllers/AuthController.js";

console.log("✅ AuthRoute loaded");

const router = express.Router();

// Debug test route


router.post("/register", registerUser);
router.post('/login', loginUser);
export default router;
