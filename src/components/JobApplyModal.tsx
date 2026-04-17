'use client';

import React, { useState } from 'react';

interface JobApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobDescription: string;
}

export default function JobApplyModal({ isOpen, onClose, jobTitle, jobDescription }: JobApplyModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cv: null as File | null
  });
  
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: Record<string, boolean> = {
      fullName: !formData.fullName,
      email: !formData.email,
      cv: !formData.cv
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    // Process submission...
    onClose();
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="p-8 md:p-10">
          {/* Close Button X */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Job Details Section */}
          <div className="mb-8">
            <h2 className="text-[20px] font-extrabold text-[#000000] mb-4">{jobTitle}</h2>
            <p className="text-[#1a1a1a] text-[15px] font-medium leading-[1.6] mb-6 opacity-90">
              {jobDescription}
            </p>
            <h3 className="text-[16px] font-extrabold text-[#000000] mb-6">Apply for this role:</h3>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="flex flex-col">
              <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.fullName ? 'text-[#E11D48]' : 'text-[#000000]'}`}>
                Full name
              </label>
              <input 
                type="text" 
                placeholder="First name, Last name" 
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full border rounded-lg py-3.5 px-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#3E4095] transition-all bg-white placeholder:text-gray-400 ${errors.fullName ? 'border-[#E11D48]' : 'border-gray-200'}`}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.email ? 'text-[#E11D48]' : 'text-[#000000]'}`}>
                Email address
              </label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full border rounded-lg py-3.5 px-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#3E4095] transition-all bg-white placeholder:text-gray-400 ${errors.email ? 'border-[#E11D48]' : 'border-gray-200'}`}
              />
            </div>

            {/* CV Upload */}
            <div className="flex flex-col">
              <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.cv ? 'text-[#E11D48]' : 'text-[#000000]'}`}>
                Upload your CV/Resume <span className="text-gray-400 font-normal ml-1">(PDF)</span>
              </label>
              <div className="relative group">
                <input 
                  type="file" 
                  accept=".pdf"
                  onChange={(e) => handleInputChange('cv', e.target.files?.[0] || null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className={`flex items-center justify-between w-full border rounded-lg py-3.5 px-4 bg-white text-[14px] group-hover:border-[#3E4095] transition-all ${errors.cv ? 'border-[#E11D48]' : 'border-gray-200'}`}>
                  <span className="font-bold text-gray-700">
                    {formData.cv ? formData.cv.name : 'Choose file'}
                  </span>
                  {!formData.cv && (
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#3E4095] text-white py-4 rounded-lg font-bold text-[15px] shadow-lg hover:opacity-95 transition-all active:scale-[0.99] border-b-4 border-indigo-900/60"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
