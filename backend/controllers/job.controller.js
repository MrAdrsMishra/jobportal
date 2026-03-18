import { Job } from "../models/job.model.js";

// ✅ ADMIN POST JOB
export const postJob = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experienceLevel,
            position,
            companyId
        } = req.body;

        const userId = req.id;

        // ✅ VALIDATION
        if (
            !title ||
            !description ||
            !requirements ||
            !salary ||
            !location ||
            !jobType ||
            !experienceLevel ||
            !position ||
            !companyId
        ) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        // ✅ FIX: ensure requirements is array
        const reqArray = Array.isArray(requirements)
            ? requirements
            : requirements.split(",");

        const job = await Job.create({
            title,
            description,
            requirements: reqArray,
            salary: Number(salary),
            location,
            jobType,
            experienceLevel,
            position,
            company: companyId,
            created_by: userId
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });

    } catch (error) {
        console.log("POST JOB ERROR:", error);
        return res.status(500).json({
            message: "Server error while posting job",
            success: false
        });
    }
};


// ✅ GET ALL JOBS (STUDENT)
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };

        const jobs = await Job.find(query)
            .populate({ path: "company" })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.log("GET ALL JOBS ERROR:", error);
        return res.status(500).json({
            message: "Server error while fetching jobs",
            success: false
        });
    }
};


// ✅ GET JOB BY ID
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate({
            path: "applications"
        });

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {
        console.log("GET JOB BY ID ERROR:", error);
        return res.status(500).json({
            message: "Server error while fetching job",
            success: false
        });
    }
};


// ✅ GET ADMIN JOBS
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;

        const jobs = await Job.find({ created_by: adminId })
            .populate({ path: "company" })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.log("GET ADMIN JOBS ERROR:", error);
        return res.status(500).json({
            message: "Server error while fetching admin jobs",
            success: false
        });
    }
};