'use client';

import { useState } from "react";
import Image from "next/image";
import CVModal from "@/components/CVModal";
import JobApplyModal from "@/components/JobApplyModal";

export default function CareersPageClient() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({ title: "", description: "" });
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");

  const jobs = [
    { 
      title: "Senior Front-end Developer", 
      department: "Engineering", 
      type: "Full-time, Onsite",
      description: "We are looking for a talented Front-end Developer to join our dynamic team. In this role, you'll be responsible for creating engaging user interfaces and ensuring a seamless user experience across our web applications. You'll work closely with designers and back-end developers to implement innovative solutions that enhance functionality and performance. If you have a passion for coding and a keen eye for design, we want to hear from you!"
    },
    { 
      title: "Lead Back-end Developer", 
      department: "Engineering", 
      type: "Full-time, Onsite",
      description: "We are seeking a Lead Back-end Developer to architect and build scalable server-side systems. You will lead the engineering team in developing robust APIs, managing cloud infrastructure, and ensuring high availability for our payment platforms."
    },
    { 
      title: "Principal Software Architect", 
      department: "Engineering", 
      type: "Full-time, Onsite",
      description: "As a Principal Software Architect, you will define the technical vision and system architecture for our entire suite of payment products. You'll guide cross-functional teams, establish engineering best practices, and tackle complex performance and security challenges at scale."
    },
    { 
      title: "Data Science Lead", 
      department: "Engineering", 
      type: "Full-time, Onsite",
      description: "We're looking for a Data Science Lead to extract actionable insights from our vast transaction data. You will build and deploy machine learning models for fraud detection, risk assessment, and personalized financial services for our users."
    },
    { 
      title: "Senior DevOps Engineer", 
      department: "Data Science", 
      type: "Full-time, Onsite",
      description: "Join us as a Senior DevOps Engineer to streamline our deployment pipelines and manage our cloud-native infrastructure. You will focus on automation, monitoring, and security, ensuring our systems are resilient and highly reliable."
    },
  ];

  const handleApply = (job: any) => {
    setSelectedJob({ title: job.title, description: job.description });
    setIsJobModalOpen(true);
  };

  // Filter jobs based on selected department
  const filteredJobs = selectedDepartment === "All Departments" 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="pt-14 pb-16 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
          Careers At Payvantage
        </span>
        
        <h1 className="text-[24px] lg:text-[40px] font-black text-brand-primary leading-[1.2] mb-6">
          Join The Team Behind <br className="hidden md:block" /> The Future Of Seamless Payments
        </h1>
        
        <p className="text-black font-bold max-w-150 mx-auto mb-10 text-[14px] md:text-[16px] leading-relaxed">
          We offer flexible and value-driven payment platforms to reach both the <br className="hidden md:block"/>
          banked and unbanked through mobile channels.
        </p>

        {/* Filters and Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <div className="relative">
            <select 
              className="appearance-none border border-gray-200 text-gray-800 py-3.5 pl-6 pr-14 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5153A0] font-semibold text-sm w-65" 
              aria-label="Filter by department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Data Science</option>
              <option>Data Science</option>
               <option>UI/UX</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>
          {/* <button className="bg-[#5153A0] text-white py-3.5 px-8 rounded-md font-semibold text-sm shadow-md hover:bg-[#3f417f] transition-colors w-65 sm:w-auto">
            View Open Positions
          </button> */}
        </div>
      </section>

      {/* Available Roles Section */}
      <section className="py-5 px-6 lg:px-12 w-full max-w-250 mx-auto">
        <h3 className="text-brand-primary font-bold mb-6 text-[16px]">
          Available roles ({filteredJobs.length})
        </h3>
        
        <div className="flex flex-col space-y-3">
          {filteredJobs.map((job, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F8F9FA] p-8 lg:px-10 lg:py-6 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
            >
              <div className="w-full md:w-[40%] font-bold text-[#1a1a1a] mb-2 md:mb-0 text-[16px]">
                {job.title}
              </div>
              <div className="w-full md:w-[25%] font-medium text-gray-700 mb-2 md:mb-0 text-[16px]">
                {job.department}
              </div>
              <div className="w-full md:w-[25%] font-medium text-gray-700 mb-4 md:mb-0 text-[16px]">
                {job.type}
              </div>
              <div className="w-full md:w-[10%] flex justify-start md:justify-end">
                <button 
                  onClick={() => handleApply(job)}
                  className="bg-[#E5E6FA] text-[#5153A0] font-bold text-[14px] py-2 px-8 rounded-md hover:bg-[#d5d7f5] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Talent Pool Section & Group Picture */}
      <section className="relative pt-24 pb-0 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className=" text-[28px] lg:text-[32px] font-black text-brand-primary mb-4 md:mb-6">
            Join Our Talent Pool!
          </h2>
          
          <p className="text-brand-primary text-[13px] md:text-[14px] max-w- mx-auto mb-10 font-bold px-4 md:px-0">
            Ready to take your career to the next level? Do you thrive in a dynamic and innovative work environment and ready to make an impact, we want to hear from you! Apply now and join our incredible pool of talents.
          </p>
          
          <button 
            onClick={() => setIsCVModalOpen(true)}
            className="bg-brand-primary text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-xl mb-16"
          >
            Submit CV
          </button>
  
          <div className="relative w-full max-w-360 mx-auto aspect-4/1 md:aspect-[4.2/1] overflow-hidden mt-10">
            <Image 
              src="/image/Group_Pic.svg" 
              alt="Payvantage Team" 
              fill
              className="object-cover object-top mix-blend-multiply scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />

      <JobApplyModal 
        isOpen={isJobModalOpen} 
        onClose={() => setIsJobModalOpen(false)} 
        jobTitle={selectedJob.title}
        jobDescription={selectedJob.description}
      />
      
    </main>
  );
}
