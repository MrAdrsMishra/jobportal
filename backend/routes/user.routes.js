import express from "express";
import { login, register, updateProfile, logout } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

// ------------------ Public routes ------------------
router.post("/register", register);
router.post("/login", login);

// ------------------ Protected routes ------------------
router.get("/logout", isAuthenticated, logout);
router.put("/profile", isAuthenticated, updateProfile);

export default router;
