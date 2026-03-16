import { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Thank You — Lumina Clippers",
  description:
    "Thank you for booking a call with Lumina Clippers. Please confirm your attendance and watch the video before we speak.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouGrowth() {
  // Read the Framer HTML at build time
  const htmlPath = path.join(process.cwd(), "public", "thank-you-growth.html");
  const htmlContent = fs.readFileSync(htmlPath, "utf-8");

  // Extract body content (between <body> and </body>)
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : "";

  // Extract styles from head
  const styleMatches = htmlContent.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
  const linkMatches = htmlContent.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || [];

  return (
    <>
      {/* Inject Framer styles */}
      {styleMatches.map((style, i) => (
        <div key={i} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      {linkMatches.map((link, i) => (
        <div key={`link-${i}`} dangerouslySetInnerHTML={{ __html: link }} />
      ))}
      
      {/* Render Framer body content */}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}
