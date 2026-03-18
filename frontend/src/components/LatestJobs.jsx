import React from "react";
import Job from "./Job";

const LatestJobs = () => {

  const demoJobs = [
    {
      title: "Frontend Developer",
      company: { name: "Google" },
      location: "Bangalore",
      jobType: "Full Time",
      salary: "12 LPA",
      description: "Build modern UI using React and Tailwind CSS."
    },
    {
      title: "Backend Developer",
      company: { name: "Microsoft" },
      location: "Hyderabad",
      jobType: "Full Time",
      salary: "15 LPA",
      description: "Develop scalable backend APIs using Node.js."
    },
    {
      title: "Full Stack Developer",
      company: { name: "Amazon" },
      location: "Remote",
      jobType: "Remote",
      salary: "18 LPA",
      description: "Work on full stack MERN applications."
    },
    {
      title: "React Developer",
      company: { name: "Netflix" },
      location: "Mumbai",
      jobType: "Contract",
      salary: "10 LPA",
      description: "Create fast responsive web applications."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Latest Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoJobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;