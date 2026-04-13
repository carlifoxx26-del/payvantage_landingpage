import Link from "next/link";

export default function APIDocsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2C2E6A] mb-6">API Documentation</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          Explore our extensive documentation and developer guides to integrate Payvantage seamlessly.
        </p>
        <Link 
          href="/" 
          className="bg-[#2C2E6A] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#3E4095] transition-all shadow-md"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
