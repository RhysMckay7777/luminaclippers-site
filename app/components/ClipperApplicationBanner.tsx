"use client";

import { useState } from "react";

export default function ClipperApplicationBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialLinks: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/clipper-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/clipper-thank-you";
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white relative z-[9999]">
      <div
        className="py-3 px-6 text-center cursor-pointer hover:bg-gray-900 transition border-b border-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold text-lg">
          🎬 Want to become a clipper? Apply now! {isOpen ? "▲" : "▼"}
        </p>
      </div>

      {isOpen && (
        <div className="py-8 px-6 border-b border-gray-800">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Social Account Links</label>
              <textarea
                required
                value={formData.socialLinks}
                onChange={(e) => setFormData({ ...formData, socialLinks: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Paste your social media profile links"
                rows={3}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? "Submitting..." : "Apply!"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
