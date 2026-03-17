import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received — Lumina Clippers",
  description: "Thank you for applying to become a Lumina Clipper.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClipperThankYou() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">🎬</div>
        <h1 className="text-4xl font-bold mb-4">Application Received!</h1>
        <p className="text-gray-400 text-lg mb-8">
          Thanks for applying to become a Lumina Clipper. We'll review your application and get back to you soon.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
