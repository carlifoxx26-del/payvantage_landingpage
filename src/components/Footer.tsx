import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white pt-10 pb-10 px-6 lg:px-12 overflow-hidden">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/image/footer_bg.svg"
          alt="footer background"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Independent Logo Row */}
        <div className="w-full mb-5 text-left">
          <Image 
            src="/image/logo.svg" 
            alt="Payvantage Logo" 
            width={160} 
            height={40} 
            className="h-8 w-auto inline-block lg:block"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
    <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-8 mb-16 w-full">

  {/* Brand Info - full width on mobile */}
  <div className="w-full lg:w-[50%] text-left">
    <p className="text-white font-bold text-[14px] leading-6 max-w-[380px]">
      Flexible and value-driven payment platforms reaching both banked and unbanked Nigerians through mobile channels.
    </p>
    <div className="flex space-x-4 mt-6">
      <a href="#" className="flex items-center justify-center">
        <img src="/image/in_logo.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
      </a>
    </div>
  </div>

  {/* Company + Developer side by side on mobile */}
  <div className="w-full lg:w-auto flex flex-row gap-0 md:gap-0 lg:gap-30">

    {/* Company */}
    <div className="lg:-ml-30 md:ml-0 ml-0 ">

    </div>
    <div className="flex-1 lg:flex-none lg:w-[120px]">
      <h4 className="font-bold mb-4 text-lg">Company</h4>
      <ul className="space-y-2 text-gray-400 text-sm font-medium">
        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
        <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
        <li><Link href="/privacy" className="hover:text-white transition-colors">Code of Practice</Link></li>
      </ul>
    </div>

    {/* Developers */}
    <div className="flex-1 lg:flex-none lg:w-[120px]">
      <h4 className="font-bold mb-4 text-lg">Developers</h4>
      <ul className="space-y-2 text-gray-400 text-sm font-medium">
        <li><Link href="/docs" className="hover:text-white transition-colors">API Documentation</Link></li>
        <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
      </ul>
    </div>

  </div>

  {/* Contact - full width on mobile */}
  <div className="w-full lg:w-[520px] ml-0 md:ml-0  lg:ml-10">
    <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
    <ul className="space-y-2 text-gray-400 text-[14px] font-medium">
      <li>
        2, Dele Omodara Close off Titilayo Adedoyin Street,
        Omole Phase 1, Lagos.
      </li>
      <li>
        <a href="mailto:info@payvantage.com.ng" className="hover:text-white transition-colors">
          info@payvantage.com.ng
        </a>
      </li>
      <li>
        <a href="tel:+2348022473198" className="hover:text-white transition-colors">
          08022473198
        </a>
      </li>
    </ul>
  </div>

    </div>

        <hr className="border-white/10 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400 font-medium space-y-4 md:space-y-0">
  <div className="flex flex-col items-start md:items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto text-left">
    <div className="bg-white px-3 py-1.5 rounded-md justify-center shadow-sm self-start">
      <Image
        src="/image/pci.svg"
        alt="PCI DSS Compliant"
        width={90}
        height={28}
        className="h-6 lg:h-7 w-auto"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
    <span className="text-white font-semibold text-[13px] md:text-[15px]">
      © 2026 Payvantage Ltd. All Rights Reserved
    </span>
  </div>
</div>
      </div>
    </footer>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="relative text-white pt-10 pb-10 px-6 lg:px-12 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <Image
//           src="/image/footer_bg.svg"
//           alt="footer background"
//           fill
//           className="object-cover object-center"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Logo */}
//         <div className="w-full mb-5 text-left">
//           <Image
//             src="/image/logo.svg"
//             alt="Payvantage Logo"
//             width={160}
//             height={40}
//             style={{ width: 'auto', height: 'auto' }}
//             className="h-8"
//           />
//         </div>

//         {/* Main grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">

//           {/* Brand Info - full width on mobile */}
//           <div className="col-span-2 md:col-span-1">
//             <p className="text-white font-bold text-[14px] leading-6">
//               Flexible and value-driven payment platforms reaching both banked and unbanked Nigerians through mobile channels.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               <a href="#" className="flex items-center justify-center">
//                 <img src="/image/in_logo.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
//               </a>
//             </div>
//           </div>

//           {/* Company */}
//           <div className="col-span-1">
//             <h4 className="font-bold mb-4 text-lg">Company</h4>
//             <ul className="space-y-2 text-gray-400 text-sm font-medium">
//               <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
//               <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
//               <li><Link href="/privacy" className="hover:text-white transition-colors">Code of Practice</Link></li>
//             </ul>
//           </div>

//           {/* Developers */}
//           <div className="col-span-1">
//             <h4 className="font-bold mb-4 text-lg">Developers</h4>
//             <ul className="space-y-2 text-gray-400 text-sm font-medium">
//               <li><Link href="/docs" className="hover:text-white transition-colors">API Documentation</Link></li>
//               <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
//             </ul>
//           </div>

//           {/* Contact - full width on mobile */}
//           <div className="col-span-2 md:col-span-1">
//             <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
//             <ul className="space-y-2 text-gray-400 text-[14px] font-semibold">
//               <li>2, Dele Omodara Close off Titilayo Adedoyin Street, Omole Phase 1, Lagos.</li>
//               <li><a href="mailto:info@payvantage.com.ng" className="hover:text-white transition-colors">info@payvantage.com.ng</a></li>
//               <li><a href="tel:+2348022473198" className="hover:text-white transition-colors">08022473198</a></li>
//             </ul>
//           </div>

//         </div>

//         <hr className="border-white/10 mb-8" />

//         {/* Bottom bar */}
//         <div className="flex flex-col items-start space-y-4">
//           {/* PCI Badge */}
//           <div className="bg-white px-3 py-1.5 rounded-md shadow-sm">
//             <Image
//               src="/image/pci.svg"
//               alt="PCI DSS Compliant"
//               width={90}
//               height={28}
//               style={{ width: 'auto', height: 'auto' }}
//               className="h-6 lg:h-7"
//             />
//           </div>

//           {/* Copyright */}
//           <span className="text-white font-semibold text-[13px] md:text-[15px]">
//             © 2026 Payvantage Ltd. All Rights Reserved
//           </span>
//         </div>

//       </div>
//     </footer>
//   );
// }