'use client';

import { useState } from "react";
import CVModal from "@/components/CVModal";

export default function CareersContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobs = [
    { title: "Senior Front-end Developer", department: "Engineering", type: "Full-time, Onsite" },
    { title: "Lead Back-end Developer", department: "Engineering", type: "Full-time, Onsite" },
    { title: "Principal Software Architect", department: "Engineering", type: "Full-time, Onsite" },
    { title: "Data Science Lead", department: "Engineering", type: "Full-time, Onsite" },
    { title: "Senior DevOps Engineer", department: "Data Science", type: "Full-time, Onsite" },
  ];

  return (
    <>
      {/* Jobs Section */}
      <section className="pb-16 px-6 lg:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-brand-primary">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.department} • {job.type}</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 md:mt-0 bg-[#5153A0] text-white px-6 py-2 rounded-md hover:bg-[#3E4095] transition-colors font-semibold"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}