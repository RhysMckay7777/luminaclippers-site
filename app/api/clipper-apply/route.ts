import { NextRequest, NextResponse } from "next/server";

// Formspree endpoint - free form backend that syncs to email
const FORMSPREE_URL = "https://formspree.io/f/xyzgkqbw"; // Will create this

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, socialLinks, platforms, submittedAt } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Send to Formspree (emails to rhys@luminaclippers.com)
    const formData = {
      _subject: `New Clipper Application: ${name}`,
      name,
      email,
      socialLinks: socialLinks || "N/A",
      platforms: platforms || "N/A",
      submittedAt: submittedAt || new Date().toISOString(),
    };

    // Try Formspree
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });
    } catch (e) {
      console.error("Formspree error:", e);
    }

    // Log the application (Vercel logs as backup)
    console.log("NEW CLIPPER APPLICATION:", JSON.stringify({
      timestamp: submittedAt || new Date().toISOString(),
      name,
      email,
      socialLinks,
      platforms,
    }));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
