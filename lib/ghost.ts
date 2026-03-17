const GHOST_URL = "https://ghost-production-8c5d.up.railway.app";
const GHOST_CONTENT_KEY = "31b0e371294c25c0e3bc1370da";

export interface GhostPost {
  id: string;
  slug: string;
  title: string;
  html: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  updated_at: string;
  reading_time: number;
  primary_author?: {
    name: string;
    profile_image: string | null;
  };
  tags?: Array<{
    name: string;
    slug: string;
  }>;
}

export async function getPosts(): Promise<GhostPost[]> {
  const res = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_KEY}&include=authors,tags&limit=all`,
    { next: { revalidate: 3600 } }
  );
  
  if (!res.ok) {
    console.error("Failed to fetch posts:", res.status);
    return [];
  }
  
  const data = await res.json();
  return data.posts || [];
}

export async function getPost(slug: string): Promise<GhostPost | null> {
  const res = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/slug/${slug}/?key=${GHOST_CONTENT_KEY}&include=authors,tags`,
    { next: { revalidate: 3600 } }
  );
  
  if (!res.ok) {
    return null;
  }
  
  const data = await res.json();
  return data.posts?.[0] || null;
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getPosts();
  return posts.map((post) => post.slug);
}
