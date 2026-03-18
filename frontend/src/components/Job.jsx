import React from "react";

const Job = ({ job }) => {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-200">

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {job?.title || "Frontend Developer"}
          </h2>

          <p className="text-sm text-gray-500">
            {job?.company?.name || "Google"} • {job?.location || "Remote"}
          </p>
        </div>

        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {job?.jobType || "Full Time"}
        </span>
      </div>

      <p className="text-gray-600 text-sm mt-3 line-clamp-2">
        {job?.description || "Exciting opportunity to work with modern technologies and build scalable applications."}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm font-medium text-green-600">
          ₹{job?.salary || "10 LPA"}
        </span>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default Job;