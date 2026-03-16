"use client";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfWILfuA53MMkvuyAw0tG_cUuCLuzbPG9sc-5hJep7xP8Wt6Q/viewform";

export default function ClipperApplicationBanner() {
  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white relative z-[9999] hover:opacity-90 transition"
    >
      <div className="py-4 px-6 text-center">
        <p className="font-semibold text-lg">
          🎬 Want to become a clipper? Apply now! →
        </p>
      </div>
    </a>
  );
}
