
import Link from "next/link";

export default function DevelopersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="bg-[#2C2E6A]">
        
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center mt-10">
        <h1 className="text-4xl font-bold text-[#2C2E6A] mb-4">Developers</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Build the future of payments with our comprehensive APIs and easy-to-use SDKs designed for scale and security.
        </p>
        <Link href="/" className="px-6 py-3 bg-[#5153A0] text-white rounded-md font-medium hover:bg-[#2C2E6A] transition-colors">
          Return Home
        </Link>
      </div>
    </main>
  );
}
