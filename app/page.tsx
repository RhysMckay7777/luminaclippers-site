import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Clipping Agency for Brands | Lumina Clippers",
  description:
    "The #1 clipping agency for brands. Distribute your content across TikTok, Reels, X & Shorts with 62,900+ clippers and 18B+ views. Book a free consultation.",
  keywords: [
    "clipping agency",
    "content clipping agency",
    "content clipping",
    "clipping service",
    "video clipping agency",
    "social media distribution",
    "brand awareness",
    "TikTok marketing",
    "Reels promotion",
    "X platform engagement",
    "Shorts content strategy",
    "AI product marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Clipping Agency for Brands | Lumina Clippers",
    description:
      "62,900+ clippers. 18B+ views delivered. We distribute your content across TikTok, Reels, X & Shorts.",
    images: [
      {
        url: "https://luminaclippers.com/images/results-stats.svg",
        alt: "Lumina Clippers results: 18 billion views delivered across TikTok, Reels, and Shorts",
        width: 700,
        height: 180,
      },
      {
        url: "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
        alt: "Lumina Clippers — The Clipping Network for Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipping Agency for Brands | Lumina Clippers",
    description:
      "62,900+ clippers. 18B+ views delivered. Content distribution across TikTok, Reels, X & Shorts.",
    images: [
      "https://luminaclippers.com/images/results-stats.svg",
    ],
  },
};

// Combined structured data for SEO (Organization, Service, Images)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema - Entity verification for AI crawlers
    {
      "@type": "Organization",
      "@id": "https://luminaclippers.com/#organization",
      "name": "Lumina Clippers",
      "url": "https://luminaclippers.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://luminaclippers.com/favicon-512.png",
        "width": 512,
        "height": 512
      },
      "description": "Lumina Clippers is a clipping agency distributing brand content across TikTok, Reels, X, and YouTube Shorts with 62,900+ clippers and 18B+ views delivered.",
      "foundingDate": "2024",
      "sameAs": [
        "https://twitter.com/luminaclippers",
        "https://www.linkedin.com/company/luminaclippers",
        "https://www.instagram.com/luminaclippers"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://luminaclippers.com/contact",
        "availableLanguage": "English"
      },
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Content Clipping",
        "TikTok Marketing",
        "Short-Form Video Distribution",
        "Brand Awareness",
        "Social Media Marketing"
      ]
    },
    // Service Schema - Core offering
    {
      "@type": "Service",
      "@id": "https://luminaclippers.com/#service",
      "serviceType": "Content Clipping and Distribution",
      "name": "Content Clipping Service",
      "provider": {
        "@type": "Organization",
        "@id": "https://luminaclippers.com/#organization"
      },
      "areaServed": "Worldwide",
      "description": "AI-powered short-form video clipping and multi-platform distribution across TikTok, Instagram Reels, X, and YouTube Shorts. Turn long-form content into viral clips distributed by 62,900+ clippers.",
      "offers": {
        "@type": "Offer",
        "url": "https://luminaclippers.com/contact",
        "priceCurrency": "USD",
        "price": "3000",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Content Clipping Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Clip Selection",
              "description": "AI identifies the best 15-30 viral moments from your long-form content"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-Platform Distribution",
              "description": "Clips posted across TikTok, Reels, Shorts, and X by 62,900+ clippers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Analytics",
              "description": "Real-time tracking of views and engagement across all platforms"
            }
          }
        ]
      }
    },
    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://luminaclippers.com/#website",
      "url": "https://luminaclippers.com",
      "name": "Lumina Clippers",
      "description": "The clipping agency for brands. 62,900+ clippers. 18B+ views delivered.",
      "publisher": {
        "@type": "Organization",
        "@id": "https://luminaclippers.com/#organization"
      }
    },
    // BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      "@id": "https://luminaclippers.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://luminaclippers.com"
        }
      ]
    },
    // ImageObject Schemas
    {
      "@type": "ImageObject",
      "@id": "https://luminaclippers.com/images/clipping-process.svg",
      "url": "https://luminaclippers.com/images/clipping-process.svg",
      "contentUrl": "https://luminaclippers.com/images/clipping-process.svg",
      "name": "Lumina Clippers Content Clipping Process",
      "description": "How Lumina Clippers works: upload content, AI picks the best clips, then 62,900+ clippers share them everywhere",
      "width": 800,
      "height": 200,
      "encodingFormat": "image/svg+xml"
    },
    {
      "@type": "ImageObject",
      "@id": "https://luminaclippers.com/images/platform-logos.svg",
      "url": "https://luminaclippers.com/images/platform-logos.svg",
      "contentUrl": "https://luminaclippers.com/images/platform-logos.svg",
      "name": "Platforms We Post To",
      "description": "TikTok, Instagram Reels, YouTube Shorts, X, and Facebook — where your clips get posted",
      "width": 600,
      "height": 100,
      "encodingFormat": "image/svg+xml"
    },
    {
      "@type": "ImageObject",
      "@id": "https://luminaclippers.com/images/results-stats.svg",
      "url": "https://luminaclippers.com/images/results-stats.svg",
      "contentUrl": "https://luminaclippers.com/images/results-stats.svg",
      "name": "Lumina Clippers Results",
      "description": "18 billion views delivered, 62,900+ active clippers, 10M+ monthly views per brand",
      "width": 700,
      "height": 180,
      "encodingFormat": "image/svg+xml"
    }
  ]
};

export default function Home() {
  return (
    <main>
      {/* Structured Data - Organization, Service, WebSite, BreadcrumbList, Images */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* SEO Content - Optimized for readability (Grade 8 level) */}
      <article 
        className="seo-content"
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          zIndex: -1,
          opacity: 0.01,
          pointerEvents: 'none',
          background: '#0a0a0a',
        }}
      >
        <h1>Clipping Agency for Brands — Get Millions of Views on TikTok, Reels, and Shorts</h1>
        
        <section>
          <p>
            <strong>Lumina Clippers is a clipping agency</strong> that helps brands go viral. 
            We turn your long videos into short clips. Then we share them everywhere.
          </p>
          <p>
            Here&apos;s what sets us apart:
          </p>
          <ul>
            <li><strong>62,900+ active clippers</strong> ready to share your content</li>
            <li><strong>18B+ views delivered</strong> for brands like yours</li>
            <li><strong>10M+ views per month</strong> on average per campaign</li>
            <li>Posts go live on <strong>TikTok, Reels, Shorts, and X</strong></li>
          </ul>
          <p>
            As a result, your brand shows up everywhere your audience scrolls.
          </p>
        </section>

        {/* Results Stats Infographic */}
        <figure>
          <Image
            src="/images/results-stats.svg"
            alt="Lumina Clippers results: 18 billion views, 62,900 clippers, 10M monthly views per brand"
            width={700}
            height={180}
            loading="eager"
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <figcaption>Real results from real campaigns</figcaption>
        </figure>

        <section>
          <h2>How Content Clipping Works</h2>
          <p>
            Content clipping is simple. You give us your videos. We do the rest.
          </p>
          <p>
            First, our AI scans your content. It finds the best moments. 
            Next, we turn those moments into short clips. Finally, our clippers post them.
          </p>
          <p>
            Short videos get <strong>2.5x more engagement</strong> than long ones. 
            That&apos;s why clip distribution works so well.
          </p>
          
          {/* Process Diagram */}
          <figure>
            <Image
              src="/images/clipping-process.svg"
              alt="3 steps: Upload your video, AI picks the best clips, clippers share them everywhere"
              width={800}
              height={200}
              loading="lazy"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <figcaption>Our simple 3-step process</figcaption>
          </figure>
          
          <h3>Step 1: Upload Your Video</h3>
          <p>
            Share any long video with us. This could be a podcast, webinar, or interview. 
            Even product demos work great.
          </p>
          <p>
            For example, a 60-minute video gives us 15-30 great clips. 
            Each clip is 15-60 seconds long.
          </p>
          
          <h3>Step 2: AI Picks the Best Clips</h3>
          <p>
            Our AI finds the most engaging moments in your video. 
            It looks for hooks that grab attention.
          </p>
          <p>
            Then we add captions and format each clip for different platforms. 
            Brands using our AI see <strong>3.2x higher engagement</strong>.
          </p>
          
          <h3>Step 3: Clippers Share Everywhere</h3>
          <p>
            This is where the magic happens. Our 62,900+ clippers post your clips to their accounts.
          </p>
          <p>
            Your brand appears on thousands of feeds at once. 
            The cost? Just <strong>$2-5 per thousand views</strong>. 
            Compare that to $15-40 for paid ads.
          </p>
        </section>

        <section id="platforms">
          <h2>Where We Post Your Clips</h2>
          <p>
            We post to every major short-video platform. Your brand shows up where your audience hangs out.
          </p>
          
          {/* Platform Logos */}
          <figure>
            <Image
              src="/images/platform-logos.svg"
              alt="TikTok, Instagram Reels, YouTube Shorts, X, and Facebook logos"
              width={600}
              height={100}
              loading="lazy"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <figcaption>All the platforms your audience uses</figcaption>
          </figure>
          
          <ul>
            <li><a href="/tiktok-clipping-agency/"><strong>TikTok</strong></a> — 1B+ users, best for going viral</li>
            <li><a href="/instagram-reels-distribution/"><strong>Instagram Reels</strong></a> — Great for sales and conversions</li>
            <li><a href="/youtube-shorts-syndication/"><strong>YouTube Shorts</strong></a> — 2B+ users, helps your SEO</li>
            <li><a href="/x-twitter-clip-distribution/"><strong>X (Twitter)</strong></a> — Perfect for B2B and tech brands</li>
            <li><strong>Facebook Reels</strong> — Reaches all age groups</li>
          </ul>
        </section>

        <section id="proven-results">
          <h2>Results You Can Expect</h2>
          <p>
            Short video now drives <strong>82% of internet traffic</strong>. 
            Brands using content clipping capture this attention fast.
          </p>
          <p>
            Here&apos;s what our clients typically see:
          </p>
          <ul>
            <li><strong>3.2x more views</strong> within 60 days</li>
            <li><strong>1M views</strong> in the first 14 days (average)</li>
            <li><strong>89% of clients</strong> stay with us long-term</li>
            <li>Payouts to clippers in <strong>under 48 hours</strong></li>
          </ul>
          <p>
            In other words, you get massive reach without the hassle.
          </p>
        </section>

        <section>
          <h2>Why Brands Choose Us</h2>
          <p>
            Building your own clipper network takes 6-12 months. It costs $200K or more just to start.
          </p>
          <p>
            With Lumina Clippers, you skip all that. You get instant access to 62,900+ creators on day one.
          </p>
          <p>
            We handle everything:
          </p>
          <ul>
            <li>Clip creation and editing</li>
            <li>Clipper management and payouts</li>
            <li>Real-time performance tracking</li>
            <li>Platform-specific optimization</li>
          </ul>
          <p>
            <strong>Ready to grow your brand?</strong> Book a free consultation today.
          </p>
          <p>
            <a href="/compare/">See how we compare →</a>
          </p>
        </section>

        <section>
          <h2>Learn More</h2>
          <nav>
            <ul>
              <li><a href="/how-it-works">See how it works step by step →</a></li>
              <li><a href="/casestudies">Read success stories from brands →</a></li>
              <li><a href="/tools/roi-calculator.html">Calculate your ROI →</a></li>
              <li><a href="/contact">Book your free consultation →</a></li>
            </ul>
          </nav>
        </section>

        <section>
          <h2>From the Blog</h2>
          <p>
            Practical guides on short-form video distribution, content clipping strategy, and brand
            growth from the Lumina Clippers editorial team.
          </p>
          <ul>
            <li>
              <a href="/blog/short-form-video-roi-statistics">
                Short-Form Video ROI Statistics Every Brand Should Know in 2025
              </a>
            </li>
            <li>
              <a href="/blog/how-brands-get-1-million-views-from-video-clipping">
                How Brands Get 1M+ Views From Video Clipping (Real Data, No Fluff)
              </a>
            </li>
            <li>
              <a href="/blog/how-to-repurpose-long-form-video-for-tiktok">
                How to Repurpose Long-Form Video for TikTok: A Brand&apos;s Guide (2025)
              </a>
            </li>
          </ul>
          <p>
            <a href="/blog">Read all articles →</a>
          </p>
        </section>
      </article>

      {/* Visual Experience - Framer Design */}
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <iframe
          title="Lumina Clippers Website"
          src="/lumina.html"
          loading="eager"
          style={{ width: "100%", height: "100%", border: "0" }}
        />
      </div>
    </main>
  );
}
