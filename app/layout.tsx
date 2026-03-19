import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClipperApplicationBanner from "./components/ClipperApplicationBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luminaclippers.com"),
  title: "Lumina Clippers: Content Clipping & Distribution for Brands",
  description:
    "Lumina Clippers: Content clipping & distribution for brands across TikTok, Reels, X, & Shorts. Book a consultation.",
  keywords: [
    "content clipping",
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
      {
        url: "/favicon.png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.png",
      },
    ],
    apple: [
      {
        url: "/favicon.png",
      },
    ],
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
        <Script
          id="sa-dynamic-optimization-loader"
          strategy="afterInteractive"
          data-uuid="346aa5ed-aa39-407d-bf02-ac9a1145cf33"
        >
          {`
            var script = document.createElement("script");
            script.setAttribute("nowprocket", "");
            script.setAttribute("nitro-exclude", "");
            script.src = "https://dashboard.searchatlas.com/scripts/dynamic_optimization.js";
            script.dataset.uuid = "346aa5ed-aa39-407d-bf02-ac9a1145cf33";
            script.id = "sa-dynamic-optimization-loader";
            document.head.appendChild(script);
          `}
        </Script>
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
