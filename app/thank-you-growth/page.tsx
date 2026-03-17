import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call Booked — Lumina Clippers",
  description: "Your growth consultation has been scheduled.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouGrowth() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-4xl font-bold mb-4">You're Booked!</h1>
        <p className="text-gray-400 text-lg mb-4">
          Your growth consultation is confirmed. Check your email for the calendar invite.
        </p>
        <p className="text-gray-500 mb-8">
          We'll dive into how Lumina Clippers can distribute your content across 65,000+ creators.
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
