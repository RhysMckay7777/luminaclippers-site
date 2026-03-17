import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs } from "@/lib/ghost";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Lumina Clippers",
    };
  }

  return {
    title: `${post.title} | Lumina Clippers Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      images: post.feature_image ? [post.feature_image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.feature_image ? [post.feature_image] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.primary_author?.name || "Lumina Clippers Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Lumina Clippers",
      logo: {
        "@type": "ImageObject",
        url: "https://framerusercontent.com/images/xdkJE9KGqcqSEqqXZb1LXRbblPM.png",
      },
    },
    mainEntityOfPage: `https://luminaclippers.com/blog/${slug}`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    image: post.feature_image || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="text-green-400 hover:text-green-300 transition mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span>
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post.reading_time && <span>{post.reading_time} min read</span>}
              {post.primary_author && (
                <span>By {post.primary_author.name}</span>
              )}
            </div>
          </header>

          {post.feature_image && (
            <img
              src={post.feature_image}
              alt={post.title}
              className="w-full rounded-lg mb-10"
            />
          )}

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="mt-16 pt-8 border-t border-gray-800">
            <section className="bg-gray-900 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-400 mb-2">Written by</p>
              <p className="font-semibold">
                {post.primary_author?.name || "Lumina Clippers Editorial Team"}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                We publish practical guides on short-form distribution, clipping
                campaigns, creator-led growth, and brand visibility.
              </p>
              <Link
                href="/about"
                className="text-green-400 text-sm hover:underline mt-2 inline-block"
              >
                About the team →
              </Link>
            </section>

            <div className="flex gap-4">
              <Link
                href="/blog"
                className="text-green-400 hover:text-green-300 transition"
              >
                ← More articles
              </Link>
              <Link
                href="/contact"
                className="text-green-400 hover:text-green-300 transition"
              >
                Book a call →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
