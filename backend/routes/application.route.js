import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

// Apply for a job
router.route("/apply/:id").get(isAuthenticated, applyJob);

// Get jobs applied by logged-in user
router.route("/get").get(isAuthenticated, getAppliedJobs);

// Update application status
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;