import { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/ghost";

export const metadata: Metadata = {
  title: "Blog | Lumina Clippers",
  description:
    "Insights on content clipping, short-form video distribution, TikTok marketing, and brand growth strategies from Lumina Clippers.",
  alternates: {
    canonical: "/blog",
  },
};

const staticArticles = [
  {
    slug: "short-form-video-roi-statistics",
    title: "Short-Form Video ROI Statistics Every Brand Should Know in 2025",
    excerpt:
      "The definitive collection of short-form video ROI data for 2025 — HubSpot, Wyzowl, Sprout Social, Cisco, and Verizon Media statistics with source citations.",
    date: "April 15, 2025",
    readingTime: 9,
  },
  {
    slug: "how-brands-get-1-million-views-from-video-clipping",
    title: "How Brands Get 1M+ Views From Video Clipping (Real Data, No Fluff)",
    excerpt:
      "The exact mechanism behind brands hitting 1M+ views through video clipping — with Lumina Clippers' verified data: 62,900+ creators, 18B+ views, 10M monthly per brand.",
    date: "April 15, 2025",
    readingTime: 8,
  },
  {
    slug: "tiktok-clipping-service-comparison-2025",
    title: "TikTok Clipping Service Comparison 2025: What the Data Actually Shows",
    excerpt:
      "Side-by-side comparison of TikTok clipping services in 2025. Network size, views delivered, platform coverage, and real client results.",
    date: "April 15, 2025",
    readingTime: 9,
  },
  {
    slug: "clipping-agency-vs-in-house-editor",
    title: "Clipping Agency vs. In-House Editor: Which Is Right for Your Brand in 2025?",
    excerpt:
      "Honest cost and output comparison: clipping agency vs. in-house video editor. Real numbers, real tradeoffs, clear recommendation.",
    date: "April 15, 2025",
    readingTime: 8,
  },
  {
    slug: "how-to-clip-podcast-highlights-for-reels",
    title: "How to Clip Podcast Highlights for Instagram Reels (And Why Most Brands Get It Wrong)",
    excerpt:
      "Most brands waste their best podcast content. Learn the exact process for clipping podcast highlights into high-performing Instagram Reels.",
    date: "April 15, 2025",
    readingTime: 7,
  },
  {
    slug: "how-to-repurpose-long-form-video-for-tiktok",
    title: "How to Repurpose Long-Form Video for TikTok: A Brand's Guide (2025)",
    excerpt:
      "Learn exactly how to repurpose long-form video content for TikTok. Practical steps, real data, and the distribution strategy top brands use to get millions of views.",
    date: "April 15, 2025",
    readingTime: 8,
  },
];

export default async function BlogPage() {
  const ghostPosts = await getPosts();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400 text-lg mb-12">
          Insights on content clipping, short-form distribution, and brand growth.
        </p>

        <div className="space-y-8">
          {/* Static SEO articles */}
          {staticArticles.map((article) => (
            <article
              key={article.slug}
              className="border-b border-gray-800 pb-8 last:border-0"
            >
              <Link href={`/blog/${article.slug}`} className="group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-green-400 transition">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readingTime} min read</span>
                </div>
              </Link>
            </article>
          ))}

          {/* Ghost CMS posts */}
          {ghostPosts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-800 pb-8 last:border-0"
            >
              <Link href={`/blog/${post.slug}`} className="group">
                {post.feature_image && (
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition"
                  />
                )}
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-green-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {post.reading_time && (
                    <span>{post.reading_time} min read</span>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="text-green-400 hover:text-green-300 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
