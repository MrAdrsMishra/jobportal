import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String},
    website: { type: String },
    location: { type: String },
     logo: { type: String },
    industry: { type: String },
    size: { type: Number },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
