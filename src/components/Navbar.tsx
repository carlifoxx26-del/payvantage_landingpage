"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 bg-[#232555]  border-b-2 border-gray-500 w-full h-[65px] md:h-[90px] z-50 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/image/logo.svg"
            alt="Payvantage Logo"
            width={150}
            height={40}
            className="h-8"
            style={{ width: "auto" }}
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-10">
        <Link href="/products" className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors">Products</Link>
        <Link href="/developers" className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors">Developers</Link>
        <Link href="/about" className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors">About Us</Link>
        <Link href="/careers" className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors">Careers</Link>
      </div>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link href="/api-docs" className="text-white text-sm font-medium px-5 py-2.5 border border-gray-400 rounded-md hover:bg-white/10 transition-colors">
          View API Docs
        </Link>
        <Link href="/demo" className="text-[#2C2E6A] bg-gray-50 text-sm font-medium px-5 py-2.5 rounded-md hover:bg-gray-200 transition-colors shadow-sm">
          Book A Demo
        </Link>
      </div>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className="lg:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white p-2 focus:outline-none hover:text-gray-300 transition-colors"
          aria-label="Open mobile menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-[280px] bg-[#2C2E6A] shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-end h-[65px] md:h-[90px] px-6 border-b border-slate-500/50">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2 focus:outline-none hover:text-gray-300 transition-colors"
            aria-label="Close mobile menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-8 space-y-6 overflow-y-auto">
          <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors">Products</Link>
          <Link href="/developers" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors">Developers</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors">About Us</Link>
          <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors">Careers</Link>
          
          <div className="flex flex-col space-y-4 pt-6 border-t border-slate-500/50">
            <Link href="/api-docs" onClick={() => setIsMobileMenuOpen(false)} className="text-white w-full text-center text-base font-medium px-5 py-3 border border-gray-400 rounded-md hover:bg-white/10 transition-colors">
              View API Docs
            </Link>
            <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)} className="text-[#2C2E6A] w-full text-center bg-gray-50 text-base font-medium px-5 py-3 rounded-md hover:bg-gray-200 transition-colors shadow-sm">
              Book A Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
