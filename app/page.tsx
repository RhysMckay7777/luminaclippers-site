import { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Lumina Clippers — #1 Clipping Agency for Brands | 10,000+ Clippers",
  description:
    "The leading clipping agency for brands. Mass-distribute your content across TikTok, Reels, X & Shorts with 10,000+ clippers. Get viral reach at scale.",
  keywords: [
    "clipping agency",
    "content clipping agency",
    "clipping service",
    "TikTok clipping agency",
    "viral clipping agency",
    "short-form content distribution",
    "Lumina Clippers",
  ],
};

export default function Home() {
  // Read the Framer HTML at build time
  const htmlPath = path.join(process.cwd(), "public", "lumina.html");
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
