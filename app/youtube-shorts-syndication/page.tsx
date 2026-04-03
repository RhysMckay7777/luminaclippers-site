import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'YouTube Shorts Syndication Agency | Subscriber Growth | Lumina Clippers',
  description: 'YouTube Shorts syndication for brands. 62,900+ clippers drive subscriber growth. Shorts viewers subscribe 2x more than regular video viewers. SEO benefits included.',
  keywords: [
    'YouTube Shorts syndication',
    'YouTube Shorts distribution',
    'YouTube Shorts agency',
    'YouTube growth service',
    'Shorts subscriber growth',
    'YouTube clip distribution',
  ],
  alternates: {
    canonical: '/youtube-shorts-syndication/',
  },
  openGraph: {
    title: 'YouTube Shorts Syndication Agency | Lumina Clippers',
    description: '62,900+ clippers. 2x subscriber growth. YouTube Shorts syndication that builds channels.',
    url: '/youtube-shorts-syndication/',
    type: 'website',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://luminaclippers.com/" },
        { "@type": "ListItem", "position": 2, "name": "YouTube Shorts Syndication", "item": "https://luminaclippers.com/youtube-shorts-syndication/" }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "YouTube Shorts Content Syndication",
      "name": "YouTube Shorts Syndication Agency",
      "provider": {
        "@type": "Organization",
        "name": "Lumina Clippers",
        "url": "https://luminaclippers.com"
      },
      "areaServed": "Worldwide",
      "description": "Professional YouTube Shorts syndication service. We distribute brand content across 62,900+ creator channels, driving subscriber growth and SEO benefits.",
      "offers": {
        "@type": "Offer",
        "price": "3000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do YouTube Shorts help subscriber growth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YouTube Shorts appear in a dedicated Shorts feed and are recommended alongside regular videos. Viewers who discover channels through Shorts subscribe at 2x the rate of viewers who find channels through regular videos. Shorts act as top-of-funnel content that drives long-form video views and subscriptions."
          }
        },
        {
          "@type": "Question",
          "name": "Do YouTube Shorts help with SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. YouTube is the world's second-largest search engine. Shorts are indexed by Google and appear in search results. Brands using Shorts syndication see their content ranking for long-tail keywords that traditional videos can't capture. Each Short is an additional indexed page that can drive organic traffic."
          }
        },
        {
          "@type": "Question",
          "name": "How many views can YouTube Shorts generate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YouTube Shorts reach 2B+ logged-in users monthly. Our average Shorts campaign generates 3-7M views per month. YouTube's algorithm is generous with Shorts distribution because the platform is actively competing with TikTok and Reels for short-form dominance."
          }
        },
        {
          "@type": "Question",
          "name": "Can Shorts drive traffic to my main YouTube channel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Shorts viewers who engage with your content are shown your long-form videos in their recommendations. Brands using Shorts syndication see 40% more views on their main channel content within 60 days. Shorts serve as discovery content that funnels viewers into your full content library."
          }
        }
      ]
    }
  ]
};

export default function YouTubeShortsSyndicationPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Script
        id="shorts-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">→</span>
          <span className="text-white">YouTube Shorts Syndication</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            YouTube Shorts Syndication — 2x Subscriber Growth + SEO
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Lumina Clippers syndicates your content as YouTube Shorts across 62,900+ creator channels. 
            Shorts viewers subscribe at 2x the rate of regular viewers — and every Short is indexed by Google.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Get Started — Book a Call
          </Link>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-gray-900 rounded-xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">2B+</div>
            <div className="text-sm text-gray-400">Monthly Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">2x</div>
            <div className="text-sm text-gray-400">Subscriber Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">40%</div>
            <div className="text-sm text-gray-400">More Channel Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">Google</div>
            <div className="text-sm text-gray-400">SEO Indexed</div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How YouTube Shorts Syndication Works</h2>
          <p className="text-gray-300 mb-6">
            YouTube is the world&apos;s second-largest search engine and the only short-form platform 
            where content is indexed by Google. Shorts syndication builds both reach and SEO authority.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-white shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-lg">Shorts Optimization</h3>
                <p className="text-gray-400">We transform your content into YouTube-optimized Shorts: vertical 9:16, under 60 seconds, keyword-rich titles and descriptions, and strategic hashtags for discoverability.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-white shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-lg">Channel Syndication</h3>
                <p className="text-gray-400">Your Shorts are distributed across our network of 62,900+ YouTube channels. Each upload is a new indexed page that can rank in Google search results.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-white shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-lg">Algorithm Amplification</h3>
                <p className="text-gray-400">YouTube&apos;s algorithm recommends Shorts to viewers across the platform. High-performing Shorts drive subscribers and views to your main channel content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Results Brands Get on YouTube Shorts</h2>
          <p className="text-gray-300 mb-6">
            YouTube Shorts launched to compete with TikTok, and the platform is investing heavily in 
            Shorts discovery. This means generous algorithmic distribution for brands that post consistently.
          </p>
          
          <div className="bg-gray-900 p-6 rounded-xl mb-6">
            <h3 className="font-semibold mb-4">Platform Statistics (2024-2025)</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>2B+ logged-in users monthly</strong> watch YouTube Shorts</li>
              <li>• <strong>70B+ daily Shorts views</strong> globally (YouTube&apos;s own data)</li>
              <li>• <strong>2x subscription rate</strong> from Shorts viewers vs regular video viewers</li>
              <li>• <strong>40% increase in channel views</strong> for brands using Shorts syndication</li>
              <li>• <strong>Google-indexed</strong> — every Short can rank in search results</li>
              <li>• <strong>Highest CPM</strong> of any short-form platform for monetized content</li>
            </ul>
          </div>

          <p className="text-gray-300">
            Unlike TikTok or Reels, YouTube Shorts has a unique advantage: <strong>search permanence</strong>. 
            A Short uploaded today can drive traffic for years via Google search. This makes Shorts 
            syndication a compounding investment in your brand&apos;s discoverability.
          </p>
        </section>

        {/* Why Shorts ROI */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why YouTube Shorts Drive ROI</h2>
          <p className="text-gray-300 mb-6">
            YouTube Shorts is the only short-form platform with built-in SEO benefits and direct 
            monetization. Here&apos;s why Shorts syndication delivers long-term value:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-red-400">SEO Benefits</h3>
              <p className="text-gray-400 text-sm">YouTube is the #2 search engine. Shorts are indexed by Google. Each Short is a new page that can rank for long-tail keywords and drive organic traffic.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-red-400">Subscriber Funnel</h3>
              <p className="text-gray-400 text-sm">Shorts act as top-of-funnel content. Viewers who engage are shown your long-form videos, driving subscriptions and watch time on your main channel.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-red-400">Content Longevity</h3>
              <p className="text-gray-400 text-sm">TikToks and Reels have 24-48 hour viral windows. Shorts can drive traffic for months or years via search and recommendations.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-red-400">Monetization Ready</h3>
              <p className="text-gray-400 text-sm">YouTube Shorts Fund and ad revenue sharing mean your distributed content can generate passive income alongside brand awareness.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-6">
              <h3 className="font-semibold mb-2">How do YouTube Shorts help subscriber growth?</h3>
              <p className="text-gray-400">YouTube Shorts appear in a dedicated Shorts feed and are recommended alongside regular videos. Viewers who discover channels through Shorts subscribe at 2x the rate of viewers who find channels through regular videos. Shorts act as top-of-funnel content that drives long-form video views and subscriptions.</p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="font-semibold mb-2">Do YouTube Shorts help with SEO?</h3>
              <p className="text-gray-400">Yes. YouTube is the world&apos;s second-largest search engine. Shorts are indexed by Google and appear in search results. Brands using Shorts syndication see their content ranking for long-tail keywords that traditional videos can&apos;t capture.</p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="font-semibold mb-2">How many views can YouTube Shorts generate?</h3>
              <p className="text-gray-400">YouTube Shorts reach 2B+ logged-in users monthly. Our average Shorts campaign generates 3-7M views per month. YouTube&apos;s algorithm is generous with Shorts distribution as the platform competes with TikTok.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-semibold mb-2">Can Shorts drive traffic to my main YouTube channel?</h3>
              <p className="text-gray-400">Absolutely. Shorts viewers who engage with your content are shown your long-form videos in their recommendations. Brands using Shorts syndication see 40% more views on their main channel content within 60 days.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-red-900/50 to-red-800/50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate YouTube Shorts?</h2>
          <p className="text-gray-300 mb-8">Join brands getting 2x subscriber growth and Google SEO benefits.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Book Your Free Consultation
          </Link>
        </section>

        {/* Related Pages */}
        <nav className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="font-semibold mb-4">Explore Other Platforms</h3>
          <ul className="flex flex-wrap gap-4">
            <li><Link href="/tiktok-clipping-agency/" className="text-red-400 hover:underline">TikTok Clipping Agency →</Link></li>
            <li><Link href="/instagram-reels-distribution/" className="text-red-400 hover:underline">Instagram Reels Distribution →</Link></li>
            <li><Link href="/x-twitter-clip-distribution/" className="text-red-400 hover:underline">X/Twitter Clip Distribution →</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
