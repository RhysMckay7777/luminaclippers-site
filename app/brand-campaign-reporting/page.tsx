import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Campaign Reporting | Analytics & ROI Dashboards | Lumina Clippers",
  description:
    "Track views, engagement, and ROI across all platforms with Lumina Clippers reporting dashboards. Real-time analytics for content clipping campaigns.",
  keywords: [
    "brand content clipping campaign reporting",
    "content distribution analytics",
    "clip performance dashboard",
    "social media campaign ROI",
    "video marketing analytics",
  ],
  alternates: {
    canonical: "/brand-campaign-reporting",
  },
};

export default function BrandCampaignReporting() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Campaign Reporting and Analytics
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Content distribution without measurement is just hope. Lumina Clippers provides real-time dashboards 
          showing exactly how your clips perform across every platform, every clipper, and every campaign. 
          No black boxes — full transparency on views, engagement, and ROI.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Real-Time Performance Dashboards</h2>
          <p className="text-gray-300 mb-4">
            The moment a clip goes live, tracking begins. Our dashboards update in real-time, showing:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>Total views</strong> across all platforms and clippers</li>
            <li><strong>Engagement metrics</strong> — likes, comments, shares, saves</li>
            <li><strong>Platform breakdowns</strong> — TikTok vs Reels vs Shorts vs X</li>
            <li><strong>Top-performing clips</strong> ranked by engagement rate</li>
            <li><strong>Top clippers</strong> driving the most views for your brand</li>
          </ul>
          <p className="text-gray-300">
            According to Sprout Social's 2025 benchmark, brands with real-time analytics optimize campaigns 
            <strong> 3x faster</strong> than those relying on weekly reports.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Platform-Specific Analytics</h2>
          <p className="text-gray-300 mb-4">
            Each platform has different success metrics. What works on TikTok doesn't automatically translate 
            to YouTube Shorts. Our reporting breaks down performance by platform:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2">TikTok</h3>
              <p className="text-gray-400 text-sm">Watch time, completion rate, shares, FYP reach</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Instagram Reels</h3>
              <p className="text-gray-400 text-sm">Plays, reach, saves, profile visits</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2">YouTube Shorts</h3>
              <p className="text-gray-400 text-sm">Views, watch time, subscribers gained</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2">X (Twitter)</h3>
              <p className="text-gray-400 text-sm">Impressions, engagement rate, retweets, link clicks</p>
            </div>
          </div>
          <p className="text-gray-300">
            This granularity lets you double down on platforms that work and adjust strategy on those that don't. 
            See how we optimize for <Link href="/services/tiktok-content-distribution" className="text-green-400 hover:underline">TikTok specifically</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ROI Calculations and Cost Metrics</h2>
          <p className="text-gray-300 mb-4">
            Views are vanity. ROI is sanity. Every campaign includes clear financial metrics:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>Cost per view (CPV)</strong> — typically $0.002-0.005 with content clipping</li>
            <li><strong>Cost per engagement (CPE)</strong> — likes, comments, shares tracked separately</li>
            <li><strong>Comparison benchmarks</strong> — how your CPV compares to paid ads ($15-40 CPM)</li>
            <li><strong>Reach efficiency</strong> — unique viewers per dollar spent</li>
          </ul>
          <p className="text-gray-300">
            The average Lumina client achieves <strong>$2-5 CPM</strong> compared to $15-40 CPM for paid social ads — 
            a 5-10x efficiency improvement on reach.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Clipper Performance Tracking</h2>
          <p className="text-gray-300 mb-4">
            Not all clippers perform equally. Our reporting shows which creators in your campaign are driving 
            results and which are underperforming. This informs:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Which clippers to prioritize for future campaigns</li>
            <li>Content themes that resonate with different audiences</li>
            <li>Posting times and frequencies that maximize reach</li>
          </ul>
          <p className="text-gray-300">
            Learn more about <Link href="/clipper-network-management" className="text-green-400 hover:underline">how we manage our clipper network</Link> and 
            maintain quality standards.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Weekly and Monthly Reports</h2>
          <p className="text-gray-300 mb-4">
            Beyond real-time dashboards, every client receives:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>Weekly performance summaries</strong> with trend analysis</li>
            <li><strong>Monthly deep-dives</strong> including content recommendations</li>
            <li><strong>Quarterly strategy reviews</strong> with optimization roadmaps</li>
          </ul>
          <p className="text-gray-300">
            Reports are exportable in PDF, CSV, or direct integration with your BI tools. 
            Compare how this differs from <Link href="/content-clipping-vs-ugc" className="text-green-400 hover:underline">traditional UGC reporting</Link>.
          </p>
        </section>

        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">See a Sample Dashboard</h2>
          <p className="text-gray-300 mb-6">
            Book a consultation to see real campaign data and how our reporting works.
          </p>
          <Link 
            href="https://calendly.com/d/cyjt-srn-4mn/lumina-clippers-growth-opportunity-meet"
            className="inline-block bg-green-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-green-400 transition"
          >
            Book a Consultation →
          </Link>
        </div>
      </article>
    </main>
  );
}
