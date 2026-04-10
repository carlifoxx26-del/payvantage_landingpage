import Image from "next/image";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 lg:pt-28 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-16 md:mb-24 lg:mb-32">
        <div className="w-full lg:w-1/2 text-left">
         <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
         Our Story
        </span>
          <h1 className="text-3xl md:text-[40px] lg:text-[40px] font-extrabold text-[#3E4095] leading-13 mb-6">
            Enabling Payments For A <br className="hidden lg:block"/> Digital Africa
          </h1>
          <p className="text-gray-600 font-medium text-[15px] mb-10 max-w-[520px] leading-relaxed">
            We are a leading tech-driven payment solutions provider in Africa. We aim to connect the continent with digital payment solutions, creating value for everyday operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-[#3E4095] text-white px-8 py-5 rounded-md font-bold hover:bg-[#2C2E6A] shadow-md transition-all text-sm flex items-center justify-center gap-2">
              Read Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="w-full sm:w-auto bg-[#5153A01A] text-[#5153A0] px-8 py-5 rounded-md font-bold hover:bg-[#F4F5F9] transition-all text-sm">
              Book A Demo
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="bg-[#EFEFF4] rounded-xl w-full h-[220px] sm:h-[280px] md:h-[350px] relative overflow-hidden mix-blend-multiply">
            <Image 
              src="/image/Group_Pic.svg" 
              alt="Payvantage Team" 
              fill 
              className="object-cover object-top "
              priority
            />
          </div>
        </div>
      </section>

      {/* Built To Solve A Real Problem Section */}
      <section className=" px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-start mt-6">
        <div className="w-full lg:w-[45%]">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
        Who We Are
        </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#3E4095] mb-8 leading-12">
            Built To Solve A Real <br className="hidden md:block"/> Problem
          </h2>
          <div className="space-y-6 text-black font-medium text-[16px] leading-relaxed  ">
            <p className="font-semibold text-[#000000] border-l-[4px] border-[#2C2E6A] text-[16px] pl-4 py-1 italic">
             "We set out to provide and enable payment for emerging customers — addressing their pain points head-on."
            </p>
            <p>
              We understand that to deliver value continuously, we must address what job the customer needs to get done. With this question in mind, we set out to provide and enable payment for emerging customers and address their pain points.
            </p>
            <p>
              We envision a world where we can be confident in helping customers provide value through disruptive strategy — reaching both the banked and unbanked through mobile-first channels.
            </p>
            <p>
              We are passionate about enabling payments for merchants and customers by leveraging emerging technologies and strategic partnerships with all the stakeholders in the value networks.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col space-y-4">
          <div className="bg-[#5153A01A] p-8 rounded-xl border-b-5 border-gray-300 flex flex-col items-start text-left">
            <div className="mb-4 shrink-0">
              <Image src="/image/Built_icon1.svg" alt="What We Do" width={24} height={24} className="object-contain" style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.07)' }} />
            </div>
            <div>
              <h3 className="text-[#5153A0] font-bold text-[14px] mb-2">What We Do</h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
               We enable payments for merchants and customers by leveraging emerging technologies and strategic partnerships across Nigeria's financial value network.
              </p>
            </div>
          </div>
          <div className="bg-[#5153A01A] p-8 rounded-xl flex flex-col items-start text-left border-b-5 border-gray-300">
            <div className="mb-4 shrink-0">
              <Image src="/image/Built_icon2.svg" alt="Why We Do It" width={24} height={24} className="object-contain" style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.07)' }} />
            </div>
            <div >
              <h3 className="text-[#5153A0] font-bold text-[14px] mb-2">How We Do It</h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
              Millions of Nigerians remain underserved by traditional financial systems. We believe every person deserves access to fast, secure, and affordable digital payments.
              </p>
            </div>
          </div>
          <div className="bg-[#5153A01A] p-8 rounded-xl border-b-5 border-gray-300 flex flex-col items-start text-left">
            <div className="mb-4 shrink-0">
              <Image src="/image/Built_icon3.svg" alt="Social Impact" width={24} height={24} className="object-contain" style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.07)' }} />
            </div>
            <div>
              <h3 className="text-[#5153A0] font-bold text-[14px] mb-2">Social Impact</h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                Through USSD platforms, virtual accounts, SoftPOS, and value-added services — all underpinned by developer-friendly APIs and robust cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guiding Principles Section */}
      <section className="pt-22 pb-8 px-6 lg:px-12 w-full mt-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-10">
           <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
        What Drives Us
        </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#3E4095] mb-5">Our Guiding Principles</h2>
          <p className="text-[#1a1a1a] font-bold text-[15px]">Everything we build and every decision we make flows from three core commitments.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#EEEEF5] p-7 rounded-2xl border-b-5 border-gray-300 flex flex-col items-start text-left shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)]">
             <div className="w-full flex justify-end h-36 relative ">
               <Image
                 src="/image/mission_icon.svg"
                 alt="Our Mission"
                 fill
                 className="object-contain object-right "
                  style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.07)' }}
               />
             </div>
             <h4 className="text-[#5153A0] text-[14px] font-extrabold mb-2 uppercase">Our Mission</h4>
             <h3 className="text-[#2C2E6A] font-extrabold text-[20px] mb-3">Deliver And Create Value</h3>
             <p className="text-[#5153A0] font-medium text-[14px] leading-relaxed">
              To be the best digital technology and business insights services provider whilst adding value to all stakeholders across the payment ecosystem.
             </p>
          </div>
          
          <div className="bg-[#EEEEF5] p-5 rounded-2xl border-b-5 border-gray-300 flex flex-col items-start text-left shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)]">
             <div className="w-full flex justify-end h-36 relative">
               <Image
                 src="/image/vission_icon.svg"
                 alt="Our Vision"
                 fill
                 className="object-contain object-right"
                  style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.07)' }}
               />
             </div>
             <h4 className="text-[#5153A0] text-[14px] font-extrabold mb-2 uppercase">Our Vision</h4>
             <h3 className="text-[#2C2E6A] font-extrabold text-[20px] mb-3">Lead Across Africa</h3>
             <p className="text-[#5153A0] font-medium text-[14px] leading-relaxed">
               To be the preferred payment enabler in Sub-Saharan Africa — making seamless digital payments accessible to every person and business on the continent.       
             </p>
          </div>
          
          <div className="bg-[#EEEEF5] p-5 rounded-2xl border-b-5 border-gray-300 flex flex-col items-start text-left shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0">
             <div className="w-full flex justify-end h-36 relative">
               <Image
                 src="/image/value_icon.svg"
                 alt="Our Values"
                 fill
                 className="object-contain object-right"
                  style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.07)' }}
               />
             </div>
             <h4 className="text-[#5153A0] text-[14px] font-extrabold mb-2 uppercase">Our Values</h4>
             <h3 className="text-[#2C2E6A] font-extrabold text-[20px] mb-3">Values We Live By</h3>
             <p className="text-[#5153A0] font-medium text-[14px] leading-relaxed">
               These four values drive us toward delivering customer-centric platforms that truly make a difference.
             </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="pt-2 pb-16 bg-white">
        <Stats />
      </div>

      {/* Milestones That Shaped Us */}
      <section className="py-16 px-6 lg:px-12 w-full bg-[#F5F6FA]">
        <div className="max-w-3xl mx-auto text-center mb-12">
           <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
       Our Journey
        </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#3E4095] mb-5">Milestones That Shaped Us</h2>
          <p className="text-[#1a1a1a] font-bold text-[15px]">From an idea to a trusted payment infrastructure — here's how Payvantage grew.</p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-4 md:pl-0 mt-4">
          {/* Vertical timeline line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] bg-white md:-ml-[2px] -ml-[2px]"></div>
          
          {/* Milestone 1 (Left Side) */}
          <div className="relative mb-6 w-full flex flex-col md:flex-row items-center justify-between">
            <div className="w-[calc(100%-4.5rem)] md:w-[45%] bg-white p-6 rounded-lg shadow-sm text-left relative z-10 ml-16 md:ml-0 md:text-left">
              {/* Arrow right (desktop) */}
              <div className="hidden md:block absolute top-[50%] -translate-y-1/2 -right-[10px] w-[22px] h-[22px] bg-white rotate-45 rounded-[2px] -z-10"></div>
              {/* Arrow left (mobile) */}
              <div className="block md:hidden absolute top-[50%] -translate-y-1/2 -left-[10px] w-[22px] h-[22px] bg-white rotate-45 rounded-[2px] -z-10"></div>

              <span className="text-[#3E4095] font-bold text-[14px] md:text-[15px] mb-2 block">25th January, 1960</span>
              <h3 className="text-[#1a1a1a] font-extrabold text-[18px] mb-1">Office Inauguration Function</h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">Started journey in a the new office</p>
            </div>
            <div className="absolute top-[50%] -translate-y-1/2 left-[30px] md:left-1/2 w-[22px] h-[22px] bg-[#F5F6FA] rounded-full border-[5px] border-white -ml-[11px] md:-ml-[11px] z-20"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* Milestone 2 (Right Side) */}
          <div className="relative mb-6 w-full flex flex-col md:flex-row items-center justify-between">
            <div className="hidden md:block w-[45%]"></div>
            <div className="absolute top-[50%] -translate-y-1/2 left-[30px] md:left-1/2 w-[22px] h-[22px] bg-[#F5F6FA] rounded-full border-[5px] border-white -ml-[11px] md:-ml-[11px] z-20"></div>
            <div className="w-[calc(100%-4.5rem)] md:w-[45%] bg-white p-6 rounded-lg shadow-sm text-left relative z-10 ml-16 md:ml-0">
              {/* Arrow left (both desktop and mobile) */}
              <div className="absolute top-[50%] -translate-y-1/2 -left-[10px] w-[22px] h-[22px] bg-white rotate-45 rounded-[2px] -z-10"></div>

              <span className="text-[#3E4095] font-bold text-[14px] md:text-[15px] mb-2 block">25th January, 1960</span>
              <h3 className="text-[#1a1a1a] font-extrabold text-[18px] mb-1">Office Inauguration Function</h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">Started journey in a the new office</p>
            </div>
          </div>

          {/* Milestone 3 (Left Side) */}
          <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
            <div className="w-[calc(100%-4.5rem)] md:w-[45%] bg-white p-6 rounded-lg shadow-sm text-left relative z-10 ml-16 md:ml-0 md:text-left">
              {/* Arrow right (desktop) */}
              <div className="hidden md:block absolute top-[50%] -translate-y-1/2 -right-[10px] w-[22px] h-[22px] bg-white rotate-45 rounded-[2px] -z-10"></div>
              {/* Arrow left (mobile) */}
              <div className="block md:hidden absolute top-[50%] -translate-y-1/2 -left-[10px] w-[22px] h-[22px] bg-white rotate-45 rounded-[2px] -z-10"></div>

              <span className="text-[#3E4095] font-bold text-[14px] md:text-[15px] mb-2 block">25th January, 1960</span>
              <h3 className="text-[#1a1a1a] font-extrabold text-[18px] mb-1">Office Inauguration Function</h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">Started journey in a the new office</p>
            </div>
            <div className="absolute top-[50%] -translate-y-1/2 left-[30px] md:left-1/2 w-[22px] h-[22px] bg-[#F5F6FA] rounded-full border-[5px] border-white -ml-[11px] md:-ml-[11px] z-20"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>
        </div>
      </section>

      {/* CTA Section and Group Picture */}
      <section className="relative pt-24 pb-0 px-6 lg:px-12 bg-[#F5F6FF] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
        Contact Us
        </span>
          </div>
          
          <h2 className="text-3xl md:text-[36px] lg:text-[40px] font-extrabold text-[#3E4095] mb-4">
            Book A Demo Now
          </h2>
          
          <p className="text-[#000000] text-[14px] md:text-[15px] max-w-[600px] mx-auto mb-10 font-bold px-4 md:px-0 opacity-90">
            Let's demonstrate how we can add value to your company with our suite of payment solutions.
          </p>
          
          <button className="bg-[#3E4095] text-white px-10 py-3.5 rounded-lg text-[13px] font-bold border-b-[4px] border-indigo-900/60 hover:translate-y-[2px] hover:border-b-[2px] transition-all shadow-md mb-10">
            Book A Demo
          </button>
  
          <div className="relative w-full max-w-[1440px] mx-auto aspect-[4/1] md:aspect-[4.2/1] overflow-hidden mt-10">
                    <Image 
                      src="/image/Group_Pic.svg" 
                      alt="Payvantage Team" 
                      fill
                      className="object-cover object-top mix-blend-multiply scale-[1.03]"
                      priority
                    />
                  </div>
        </div>
      </section>

    </main>
  );
}
