import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Clipping Glossary | Lumina Clippers",
  description:
    "Definitions for content clipping, clipper networks, short-form distribution, UGC clipping, and more. Learn the terminology of video content distribution.",
  keywords: [
    "content clipping definition",
    "what is a clipper network",
    "UGC clipping meaning",
    "short-form distribution glossary",
    "content distribution terms",
    "TikTok clipping explained",
    "Reels distribution definition",
    "video clipping terminology",
  ],
  alternates: {
    canonical: "/glossary",
  },
  openGraph: {
    type: "website",
    url: "/glossary",
    title: "Content Clipping Glossary — Lumina Clippers",
    description:
      "Complete glossary of content clipping and video distribution terminology for brands and marketers.",
  },
};

const glossaryTerms = [
  {
    term: "Content Clipping",
    definition: "The process of repurposing long-form brand content (podcasts, interviews, webinars) into short-form clips optimized for distribution across TikTok, Instagram Reels, YouTube Shorts, and X. Content clipping differs from traditional video editing by focusing on viral-worthy moments and platform-specific optimization."
  },
  {
    term: "Clipper Network",
    definition: "A managed network of vetted social media creators who specialize in distributing short-form video content. Lumina Clippers operates the largest brand-focused clipper network with 62,900+ active creators across all major platforms. Clipper networks provide brands with instant distribution scale without individual creator negotiations."
  },
  {
    term: "Short-Form Distribution",
    definition: "The strategy of distributing video content under 60 seconds across multiple social media platforms simultaneously. According to Cisco's Annual Internet Report, short-form video now drives 82% of all consumer internet traffic, making distribution the highest-ROI content strategy available."
  },
  {
    term: "UGC Clipping",
    definition: "User-Generated Content clipping refers to repurposing brand content into clips that appear organic and creator-native. Unlike traditional branded content, UGC clips are posted from individual creator accounts, generating 47% higher engagement according to Sprout Social's benchmark data."
  },
  {
    term: "Clip Campaign",
    definition: "A structured content distribution initiative where multiple clips from a single content source are distributed across a clipper network over a defined period. Typical clip campaigns run 30-90 days and include 50-150+ individual clips distributed to thousands of creator accounts."
  },
  {
    term: "Payout Per View (PPV)",
    definition: "A performance-based compensation model where clippers earn payments based on the views their distributed clips generate. Lumina Clippers processes payouts within 48 hours of reaching engagement milestones, incentivizing quality distribution and sustained effort."
  },
  {
    term: "Reels Distribution",
    definition: "The specific strategy of distributing short-form video content on Instagram Reels. Reels distribution targets premium audience demographics with high conversion rates. Instagram's algorithm favors content posted from individual creator accounts over brand accounts."
  },
  {
    term: "Shorts Syndication",
    definition: "The distribution of vertical video content across YouTube Shorts. Shorts syndication benefits from YouTube's 2B+ logged-in monthly users and strong SEO benefits, as Shorts content often appears in Google search results and YouTube recommendations."
  },
  {
    term: "Viral Coefficient",
    definition: "A metric measuring how often distributed clips get re-shared by viewers beyond the original posting. A viral coefficient above 1.0 indicates exponential reach growth. Top-performing clip campaigns achieve viral coefficients of 1.5-3.0x."
  },
  {
    term: "Content Cascade",
    definition: "The effect created when the same brand content appears across hundreds of creator accounts simultaneously. Content cascades create the perception of organic brand momentum and trend participation, driving higher engagement than single-source posting."
  },
  {
    term: "Hook Optimization",
    definition: "The process of crafting the first 1-3 seconds of a clip to maximize viewer retention. Platform algorithms heavily weight early-video engagement, making hook optimization critical for distribution success. AI-optimized hooks generate 3.2x higher completion rates."
  },
  {
    term: "Platform-Native Formatting",
    definition: "Adapting video content to match each platform's preferred specifications—9:16 aspect ratio for TikTok/Reels, auto-captions, trending audio overlays, and native editing styles. Platform-native clips outperform cross-posted content by 2-4x on engagement metrics."
  }
];

export default function Glossary() {
  return (
    <main>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://luminaclippers.com"},
              {"@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://luminaclippers.com/glossary"}
            ]
          })
        }}
      />
      
      {/* DefinedTermSet Schema for all glossary terms */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "name": "Content Clipping Glossary",
            "description": "Comprehensive glossary of content clipping and video distribution terminology",
            "hasDefinedTerm": glossaryTerms.map(item => ({
              "@type": "DefinedTerm",
              "name": item.term,
              "description": item.definition
            }))
          })
        }}
      />

      {/* SEO Content */}
      <article className="sr-only-seo" style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/glossary">Glossary</a></li>
          </ol>
        </nav>

        <h1>Content Clipping Glossary: Terms Every Brand Should Know</h1>
        
        <p>
          Understanding content clipping terminology is essential for brands exploring video distribution strategies. 
          This glossary defines key terms used in the content clipping industry, from basic concepts to advanced 
          distribution metrics.
        </p>

        <p>
          According to <a href="https://www.hubspot.com/state-of-marketing" rel="noopener">HubSpot&apos;s 2026 State of Marketing Report</a>, 
          <strong>91% of businesses now use video as a marketing tool</strong>, and short-form video delivers the 
          highest ROI of any content format.
        </p>

        <section>
          <h2>Core Terminology</h2>
          <dl>
            {glossaryTerms.map((item, index) => (
              <div key={index}>
                <dt><strong>{item.term}</strong></dt>
                <dd>{item.definition}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>Related Resources</h2>
          <ul>
            <li><a href="/how-it-works">See how content clipping distribution works →</a></li>
            <li><a href="/casestudies">Read our brand success stories →</a></li>
            <li><a href="/#book-a-call">Book a consultation →</a></li>
          </ul>
        </section>
      </article>

      {/* Visual Experience */}
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <iframe
          title="Glossary - Lumina Clippers"
          src="/lumina.html"
          style={{ width: "100%", height: "100%", border: "0" }}
        />
      </div>
    </main>
  );
}
