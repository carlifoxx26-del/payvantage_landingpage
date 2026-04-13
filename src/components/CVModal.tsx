'use client';

import React, { useState } from 'react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    cv: null as File | null
  });
  
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: Record<string, boolean> = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      phone: !formData.phone,
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
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-[#111827] mb-2">Join Us</h2>
            <p className="text-[#5B799A] text-[14px] font-medium max-w-2xl leading-relaxed">
              Share your resume to our recruiters to be added to our talent pool and to receive emails regarding career opportunities at Payvantage.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            {/* Upload Button Placeholder (matching design) */}
            <div className="mb-6">
              <button type="button" className="bg-[#3E4095] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:opacity-90 transition-all">
                Upload your CV/Resume
              </button>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-8 items-start">
              {/* First Name */}
              <div className="flex flex-col lg:col-span-1">
                <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.firstName ? 'text-[#E11D48]' : 'text-[#374151]'}`}>First Name <span className="text-[#E11D48]">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter First Name" 
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E4095] transition-all bg-[#F8FAFC] ${errors.firstName ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : 'border-gray-200'}`}
                />
                {errors.firstName && <span className="text-[12px] font-bold text-[#E11D48] mt-2">Required</span>}
              </div>

              {/* Last Name */}
              <div className="flex flex-col lg:col-span-1">
                <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.lastName ? 'text-[#E11D48]' : 'text-[#374151]'}`}>Last Name <span className="text-[#E11D48]">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter Last Name" 
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E4095] transition-all bg-[#F8FAFC] ${errors.lastName ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : 'border-gray-200'}`}
                />
                {errors.lastName && <span className="text-[12px] font-bold text-[#E11D48] mt-2">Required</span>}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col lg:col-span-1">
                <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.phone ? 'text-[#E11D48]' : 'text-[#374151]'}`}>Phone number <span className="text-[#E11D48]">*</span></label>
                <input 
                  type="tel" 
                  placeholder="Enter Phone number" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E4095] transition-all bg-[#F8FAFC] ${errors.phone ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : 'border-gray-200'}`}
                />
                {errors.phone && <span className="text-[12px] font-bold text-[#E11D48] mt-2">Required</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col lg:col-span-1">
                <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.email ? 'text-[#E11D48]' : 'text-[#374151]'}`}>Email <span className="text-[#E11D48]">*</span></label>
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E4095] transition-all bg-[#F8FAFC] ${errors.email ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : 'border-gray-200'}`}
                />
                {errors.email && <span className="text-[12px] font-bold text-[#E11D48] mt-2">Required</span>}
              </div>

              {/* Document Upload */}
              <div className="flex flex-col md:col-span-2 lg:col-span-2">
                <label className={`text-[14px] font-bold mb-2 transition-colors ${errors.cv ? 'text-[#E11D48]' : 'text-[#94A3B8]'}`}>Document Upload <span className="text-[#E11D48]">*</span></label>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept=".pdf"
                    onChange={(e) => handleInputChange('cv', e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`flex items-center justify-between w-full border rounded-lg py-3 px-4 bg-white text-sm group-hover:border-[#3E4095] transition-all ${errors.cv ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : 'border-gray-200'}`}>
                    <span className="font-bold text-[#111827]">
                        {formData.cv ? 'File selected' : 'Choose File'}
                    </span>
                    {!formData.cv && <span className="text-gray-400">No file chosen</span>}
                  </div>
                </div>
                <span className={`text-[12px] mt-2 font-medium ${errors.cv ? 'text-[#E11D48]' : 'text-[#94A3B8]'}`}>
                    {errors.cv ? 'Required' : 'File should be in pdf'}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#3E4095] text-white py-4 rounded-lg font-bold text-[15px] shadow-lg hover:opacity-95 transition-all active:scale-[0.99]"
              >
                Submit CV/Resume
              </button>
            </div>
          </form>

          {/* Close Button X */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
