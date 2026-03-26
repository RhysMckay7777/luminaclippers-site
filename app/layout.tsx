import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClipperApplicationBanner from "./components/ClipperApplicationBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevents FOIT, improves LCP
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luminaclippers.com"),
  title: "Clipping Agency for Brands | Lumina Clippers — Content Distribution",
  description:
    "Lumina Clippers is a clipping agency that distributes your content across TikTok, Reels, X, & Shorts. 62,900+ clippers. 18B+ views delivered. Book a consultation.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Lumina Clippers — The Clipping Network for Brands",
    description:
      "We mobilize 10,000+ clippers to clip and mass-distribute your content across TikTok, Reels, X, and Shorts. Built for brands, AI products, apps, and crypto.",
    siteName: "Lumina Clippers",
    images: [
      {
        url: "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
        alt: "Lumina Clippers — The Clipping Network for Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Clippers — The Clipping Network for Brands",
    description:
      "Distribute content across TikTok, Reels & more with 10,000+ clippers. For brands, AI & crypto. #ContentDistribution",
    images: [
      "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  // Bing Webmaster Tools verification - update after registering at bing.com/webmasters
  verification: {
    other: {
      "msvalidate.01": "PENDING_BING_VERIFICATION_CODE",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for Core Web Vitals optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://dashboard.searchatlas.com" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17977271671"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17977271671');
          `}
        </Script>
        {/* SearchAtlas - deferred to reduce render blocking */}
        <Script
          id="sa-dynamic-optimization"
          data-uuid="346aa5ed-aa39-407d-bf02-ac9a1145cf33"
          src="https://dashboard.searchatlas.com/scripts/dynamic_optimization.js"
          strategy="lazyOnload"
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lumina Clippers",
              "url": "https://luminaclippers.com",
              "logo": "https://luminaclippers.com/logo.png",
              "description": "Lumina Clippers is a clipping agency that distributes content for brands across TikTok, Reels, X, and Shorts. We manage 62,900+ clippers, payouts, reporting, and campaign growth.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1209 Mountain Road PL NE Ste H",
                "addressLocality": "Albuquerque",
                "addressRegion": "NM",
                "postalCode": "87110",
                "addressCountry": "US"
              },
              "telephone": "+971588241651",
              "email": "rhys@luminaclippers.com",
              "founder": {
                "@type": "Person",
                "name": "Rhys McKay",
                "jobTitle": "Founder & CEO",
                "url": "https://www.linkedin.com/in/rhys-mckay-founder-luminaclipping/"
              },
              "sameAs": [
                "https://x.com/luminaclippers",
                "https://www.linkedin.com/in/rhys-mckay-founder-luminaclipping/",
                "https://instagram.com/luminaclippers"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "name": "Lumina Clippers Sales",
                "contactType": "sales",
                "telephone": "+971588241651",
                "email": "rhys@luminaclippers.com",
                "availableLanguage": "English"
              }
            })
          }}
        />
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a clipping agency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A clipping agency is a specialized service that transforms long-form video content into short-form clips and distributes them across social media platforms like TikTok, Instagram Reels, YouTube Shorts, and X. Unlike traditional video editing, a clipping agency manages the entire distribution process including a network of clippers who post your content to their audiences. Lumina Clippers is the leading clipping agency for brands, managing 62,900+ clippers and delivering 18B+ total views across client campaigns."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is content clipping distribution?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Content clipping distribution is the process of transforming long-form video content into optimized short-form clips and distributing them across multiple social media platforms like TikTok, Instagram Reels, YouTube Shorts, and X. According to Wyzowl's 2024 Video Marketing Statistics, short-form video generates 2.5x more engagement than long-form content. Brands using content clipping distribution typically see 10M+ views per month by reaching audiences across 100+ distribution accounts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does content clipping work for brands?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brands provide their long-form content (podcasts, interviews, webinars, livestreams) to a content clipping service. The service uses AI and human editors to identify viral-worthy moments, create optimized clips with captions and formatting, and distribute them across a network of social media accounts. Lumina Clippers manages the entire process including clipper coordination, payouts, performance reporting, and campaign optimization. The average brand sees results within 2-4 weeks of launching their clipping campaign."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which platforms do you distribute clips to?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lumina Clippers distributes content across all major short-form video platforms: TikTok, Instagram Reels, YouTube Shorts, X (Twitter), Facebook Reels, and LinkedIn. Our network of 62,900+ clippers maintains accounts across these platforms, ensuring maximum reach and engagement. Each platform has unique algorithm requirements, and our clippers optimize content specifically for each platform's best practices."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does content clipping cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Content clipping campaigns typically range from $3,000 to $8,000 per month depending on volume and distribution goals. This includes clip creation, distribution across our network of 62,900+ clippers, performance tracking, and campaign optimization. Compared to traditional influencer marketing or paid ads, content clipping delivers significantly lower cost-per-view (CPV) and higher organic reach. Contact Lumina Clippers for a custom quote based on your specific goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What results can I expect from content clipping?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brands working with Lumina Clippers typically see 10M+ views per month, significant increases in brand awareness, and measurable growth in website traffic and conversions. Our network has generated over 18 billion total views across client campaigns. Results vary based on content quality, niche, and campaign duration, but most brands see meaningful traction within 2-4 weeks. We provide detailed analytics and reporting so you can track ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is content clipping different from regular video editing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Traditional video editing focuses on creating polished final products. Content clipping goes further by identifying viral-worthy moments, optimizing for each platform's algorithm, adding captions and hooks, AND distributing across hundreds of accounts. The distribution network is the key differentiator—you're not just getting edited clips, you're getting mass distribution to audiences who are actively consuming short-form content. This creates compounding organic reach that paid ads can't replicate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to provide edited clips or raw footage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can provide either long-form raw footage or pre-edited content—Lumina Clippers handles both. Many brands share their podcast episodes, webinar recordings, livestreams, or interview footage, and our clippers identify the best 15-60 second moments. If you already have edited clips, we can distribute those directly. The more content you provide, the more clips we can create and the better results you'll see from your campaign."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to see results from content clipping?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most brands see initial traction within 1-2 weeks of launching their clipping campaign, with significant results by week 3-4. Viral moments can happen at any time, but consistent distribution builds compounding reach over time. We recommend a minimum 3-month commitment to see the full flywheel effect of content clipping distribution. Our top-performing campaigns run continuously, generating millions of views month over month."
                  }
                }
              ]
            })
          }}
        />
        {/* Review Schema - Testimonials for AI citation boost */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Lumina Clippers Content Distribution Service",
              "description": "Full-service content clipping and distribution across TikTok, Reels, X, and Shorts",
              "brand": {
                "@type": "Brand",
                "name": "Lumina Clippers"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "47"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Chen"
                  },
                  "reviewBody": "Lumina Clippers generated 15M views for our brand in the first 30 days. The ROI compared to traditional influencer marketing is unmatched. We went from zero TikTok presence to trending sounds in under a month.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "datePublished": "2025-11-15"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Marcus Williams"
                  },
                  "reviewBody": "Traditional UGC was costing us $200+ per video with unpredictable reach. With Lumina, we get 50+ clips distributed monthly at a fraction of the cost, with guaranteed network distribution.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "datePublished": "2025-12-03"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "David Park"
                  },
                  "reviewBody": "Lumina Clippers scaled our TikTok clip distribution to 200+ creators in under two weeks. Our brand awareness metrics jumped 340% in the first month.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "datePublished": "2026-01-22"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClipperApplicationBanner />
        {children}
      </body>
    </html>
  );
}
