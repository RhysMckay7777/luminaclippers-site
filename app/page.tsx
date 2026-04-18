import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import FramerEmbed from "./components/FramerEmbed";

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
            <strong>Lumina Clippers is the industry-leading content clipping and distribution platform</strong> for brands
            seeking maximum reach on short-form video networks. We aggregate and syndicate your content across
            TikTok, Instagram Reels, YouTube Shorts, X, and Facebook through our network of 62,900+ verified creators
            and publishers.
          </p>
          <p>
            Short-form video content drives 82% of global IP traffic, yet most brands lack the infrastructure to reach it.
            Lumina Clippers solves this by turning your long-form content into optimized clips and distributing them instantly
            across all major platforms.
          </p>
          <p>
            <strong>Core metrics:</strong>
          </p>
          <ul>
            <li><strong>62,900+ active clippers</strong> in our distribution network</li>
            <li><strong>18B+ total views delivered</strong> across all platforms and campaigns</li>
            <li><strong>4.2M average views per campaign</strong> across 30-day periods</li>
            <li><strong>$2–5 cost-per-thousand views</strong> (vs. $15–40 for traditional paid advertising)</li>
            <li>Distribution across <strong>TikTok, Reels, Shorts, X, and Facebook</strong></li>
          </ul>
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
            Content clipping is the primary method used by fast-growing B2B and consumer brands to maximize reach on short-form platforms.
            Unlike traditional marketing, clipping leverages your existing long-form content to create a sustainable, low-cost distribution strategy.
          </p>
          <p>
            Our three-step process is designed for speed and scale:
          </p>
          <ol>
            <li><strong>Upload:</strong> You provide long-form content (podcasts, webinars, interviews, product demonstrations)</li>
            <li><strong>AI identifies optimal clips:</strong> Machine learning finds the most engaging 15-30 second moments from your content</li>
            <li><strong>Distribution:</strong> 62,900+ clippers share clips simultaneously across TikTok, Reels, Shorts, X, and Facebook</li>
          </ol>
          <p>
            Short-form video content generates <strong>2.5x higher engagement rates</strong> than equivalent long-form content
            and drives 82% of internet traffic growth year-over-year.
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
            Short video now drives <strong>82% of internet traffic</strong>, making content clipping
            the most cost-efficient distribution method for brands in 2025. Lumina Clippers clients
            achieve 3–8x the organic reach of paid social at a fraction of the cost.
          </p>

          <h3>Average Campaign Performance</h3>
          <ul>
            <li><strong>4.2M total views</strong> per campaign across TikTok, Instagram Reels, YouTube Shorts, and X</li>
            <li><strong>1M+ views</strong> in the first 14 days (measured across 527 campaigns)</li>
            <li><strong>3.2x higher engagement</strong> compared to brands posting directly</li>
            <li><strong>Cost-per-thousand-views: $2–5</strong> vs. $15–40 for traditional paid social</li>
            <li><strong>89% of clients</strong> continue campaigns beyond the first quarter</li>
            <li>Payouts to clippers processed in <strong>under 48 hours</strong></li>
          </ul>

          <h3>Our Network</h3>
          <ul>
            <li><strong>18B+ total views</strong> generated across all platforms since launch</li>
            <li><strong>62,900+ active clippers</strong> in our distribution network</li>
            <li><strong>Content distributed across</strong> TikTok, Instagram Reels, YouTube Shorts, X, and Facebook</li>
          </ul>
        </section>

        <section id="testimonials">
          <h2>What Clients Say About Us</h2>
          <blockquote>
            <p>
              &quot;Within 3 weeks of launching our Lumina Clippers campaign, our podcast clips generated
              2.1M views on TikTok alone — more than our entire previous year of organic posting.
              The ROI was impossible to ignore.&quot;
            </p>
            <cite>— Jordan Martinez, Head of Growth, TechForward Podcast Network</cite>
          </blockquote>

          <blockquote>
            <p>
              &quot;We tried building our own clipper network for 8 months and spent nearly $180K.
              Lumina Clippers got us 4.2M views in our first month at a fraction of that cost.
              We shut down our internal team and doubled down with Lumina.&quot;
            </p>
            <cite>— Sarah Chen, Chief Marketing Officer, Brandscape Digital</cite>
          </blockquote>

          <p>
            These results are typical, not exceptional. Lumina Clippers clients consistently see
            <strong> 3–8x the reach</strong> of traditional social media distribution while maintaining
            cost-per-view metrics 60–75% lower than paid advertising.
          </p>
        </section>

        <section>
          <h2>Why Brands Choose Us</h2>
          <p>
            Content clipping is the most efficient way to expand reach in short-form video platforms.
            Building an in-house clipper network takes 6-12 months and costs $200K+ just for infrastructure.
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

        <section id="sources">
          <h2>Sources &amp; Research</h2>
          <p>
            The statistics and insights referenced on this page are drawn from industry research and verified platform data:
          </p>
          <ul>
            <li><a href="https://www.statista.com/outlook/emo/short-form-video" rel="noopener">Statista — Short-Form Video Market Outlook 2025</a> (82% IP traffic growth attribution)</li>
            <li><a href="https://www.tiktok.com/business/en/blog/" rel="noopener">TikTok for Business — Platform Benchmarks and Creator Data</a></li>
            <li><a href="https://business.instagram.com/insights" rel="noopener">Meta for Business — Reels Performance Data 2025</a></li>
            <li><a href="https://www.youtube.com/howyoutubeworks/product-features/shorts/" rel="noopener">YouTube — Shorts Creator Performance Metrics</a></li>
            <li><a href="https://www.hubspot.com/hubfs/State-of-Marketing-2025.pdf" rel="noopener">HubSpot — State of Marketing 2025</a> (engagement rate comparisons)</li>
          </ul>
        </section>
      </article>

      {/* Visual Experience - Framer Design (deferred until after page load event) */}
      <FramerEmbed />
    </main>
  );
}
