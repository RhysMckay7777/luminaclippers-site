import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luminaclippers.com"),
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
    "mass content distribution",
    "brand clipping service",
    "social media clipping",
    "content distribution agency",
    "Reels clipping",
    "Shorts clipping",
    "clip distribution network",
  ],
  alternates: {
    canonical: "https://luminaclippers.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://luminaclippers.com",
    title: "Lumina Clippers — #1 Clipping Agency for Brands",
    description:
      "The leading clipping agency. Mass-distribute content across TikTok, Reels, X & Shorts with 10,000+ clippers. Viral reach at scale.",
    siteName: "Lumina Clippers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumina Clippers — The #1 Clipping Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Clippers — #1 Clipping Agency for Brands",
    description:
      "Mass-distribute content with 10,000+ clippers across TikTok, Reels & Shorts. The leading clipping agency for viral reach.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationSchema />
        <ServiceSchema />
        <FAQSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumina Clippers",
    url: "https://luminaclippers.com",
    logo: "https://luminaclippers.com/favicon.png",
    description:
      "The leading clipping agency for brands. Mass-distribute content across TikTok, Reels, X & Shorts with 10,000+ clippers.",
    foundingDate: "2024",
    knowsAbout: [
      "Clipping Agency",
      "Content Distribution",
      "Short-Form Video",
      "TikTok Marketing",
      "Viral Content",
      "Social Media Marketing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Clipping Agency",
    provider: {
      "@type": "Organization",
      name: "Lumina Clippers",
      url: "https://luminaclippers.com",
    },
    name: "Content Clipping & Distribution Service",
    description:
      "Mass-distribute your brand content across TikTok, Reels, X & Shorts with our network of 10,000+ clippers. The #1 clipping agency for viral reach.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clipping Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mass Content Distribution",
            description: "Flood social feeds with hundreds of clips across TikTok, Reels & Shorts.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creator Network Access",
            description: "Access to 10,000+ vetted clippers who create viral short-form content.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema() {
  const faqItems = [
    {
      question: "What is a clipping agency?",
      answer:
        "A clipping agency distributes your content across social media platforms by mobilizing creators (clippers) to clip, edit, and post your content. Lumina Clippers is the leading clipping agency with 10,000+ active clippers.",
    },
    {
      question: "How does your clipping service work?",
      answer:
        "We take your content (videos, podcasts, streams) and distribute it across TikTok, Reels, X, and Shorts through our network of 10,000+ clippers. Each clipper creates unique edits, flooding social feeds with your brand.",
    },
    {
      question: "How many views can I expect from a clipping campaign?",
      answer:
        "Results vary by content quality and niche, but most clients see millions of views across platforms. Our data-backed approach identifies winning formats and scales what works.",
    },
    {
      question: "What platforms do you distribute content on?",
      answer:
        "We distribute across all major short-form platforms: TikTok, Instagram Reels, YouTube Shorts, and X (Twitter). Our clippers are active on all platforms.",
    },
    {
      question: "How is Lumina Clippers different from other clipping agencies?",
      answer:
        "We have the largest clipper network (10,000+), real-time performance tracking, transparent reporting, and hands-off operations. We handle briefs, clippers, payouts, and reporting so you focus on your brand.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
