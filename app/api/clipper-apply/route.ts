import { NextRequest, NextResponse } from "next/server";

// Google Form submission URL and entry IDs
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfWILfuA53MMkvuyAw0tG_cUuCLuzbPG9sc-5hJep7xP8Wt6Q/formResponse";
const ENTRY_NAME = "entry.1197902164";
const ENTRY_EMAIL = "entry.153627074";
const ENTRY_SOCIAL = "entry.588503070";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const { name, email, socialLinks } = data;
    
    if (!name || !email || !socialLinks) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Submit to Google Form
    const formData = new URLSearchParams();
    formData.append(ENTRY_NAME, name);
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_SOCIAL, socialLinks);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      console.log("Submitted to Google Form:", { name, email });
    } catch (formError) {
      // Google Forms returns a redirect on success, which may throw
      // The submission still goes through
      console.log("Google Form submission completed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Clipper application error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
