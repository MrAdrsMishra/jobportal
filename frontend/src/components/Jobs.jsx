import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const Jobs = () => {

  const jobs = [
    {
      title: "Frontend Developer",
      company: { name: "Google" },
      location: "Bangalore",
      salary: "12 LPA",
      description: "Build modern UI using React."
    },
    {
      title: "Backend Developer",
      company: { name: "Microsoft" },
      location: "Hyderabad",
      salary: "15 LPA",
      description: "Create scalable backend APIs."
    },
    {
      title: "Full Stack Developer",
      company: { name: "Amazon" },
      location: "Remote",
      salary: "18 LPA",
      description: "Work with MERN stack applications."
    },
    {
      title: "React Developer",
      company: { name: "Netflix" },
      location: "Mumbai",
      salary: "10 LPA",
      description: "Develop fast UI with React."
    }
  ];

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-10 px-4">

        <h1 className="text-3xl font-bold mb-10">
          Available Jobs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <Job key={index} job={job} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Jobs;