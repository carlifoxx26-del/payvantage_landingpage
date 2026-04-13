import Image from "next/image";

export default function FeatureAPI() {
  return (
    <section className="py-3 md:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-5 border-b-5  border-gray-300 rounded-full text-[12px] font-bold mb-6">
            Developer-First
          </span>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-extrabold text-[#3E4095] leading-tight mb-4 px-0">
           Build Better With Our APIs
          </h2>
          <p className="text-black font-bold text-[13px] md:text-[14px] leading-5  md:leading-6.5 mb-6 lg:max-w-lg px-1 lg:px-0">
            Our well-documented and easy-to-use APIs make integrating and accessing reliable payment functionalities easy for your developers.
          </p>
          <button className="bg-[#5153A0] text-white px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg">
            View API Documentation
          </button>
        </div>
        
        <div className="lg:w-230 relative">
          <div className="animate-float translate-y-[-10px]">
            <Image 
              src="/image/Api_img.svg" 
              alt="API Documentation" 
              width={600}
              height={335}
              className="w-200 h-auto mix-blend-multiply drop-shadow-none"
              style={{ mixBlendMode: 'multiply', width: 'auto', height: 'auto' }}
              priority
            />
          </div>
          {/* Subtle background glow */}
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 lg:w-[120%] lg:h-[120%] w-[80%] h-[80%] bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
        </div>
      </div>
    </section>
  );
}
