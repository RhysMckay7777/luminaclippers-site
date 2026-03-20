import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Lumina Clippers | Content Clipping Distribution Network',
  description: 'Learn about Lumina Clippers, the leading content clipping distribution network with 62,900+ clippers and 18B+ views delivered. Founded in 2024 by Rhys McKay.',
  openGraph: {
    title: 'About Lumina Clippers',
    description: 'The leading content clipping distribution network for brands, AI products, and crypto projects.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Lumina Clippers",
              "description": "The leading content clipping distribution network for brands",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Rhys McKay",
                "jobTitle": "Founder & CEO",
                "url": "https://www.linkedin.com/in/rhys-mckay-founder-luminaclipping/"
              }
            }
          })
        }}
      />
      
      <main>
        {/* SEO Content - Crawlable */}
        <article className="sr-only-seo" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h1>About Lumina Clippers</h1>
          
          <section>
            <h2>Our Mission</h2>
            <p>Lumina Clippers exists to democratize content distribution for brands of all sizes. We believe every brand deserves access to the viral reach that was previously only available to those with massive marketing budgets. Our mission is to transform how brands build awareness by harnessing the power of creator networks and short-form video distribution at scale.</p>
            <p>Founded in 2024, we've rapidly grown to become the leading content clipping distribution network, serving brands, AI products, apps, and crypto projects worldwide. Our network of 62,900+ clippers has delivered over 18 billion views across TikTok, Instagram Reels, YouTube Shorts, and X.</p>
          </section>

          <section>
            <h2>Our Story</h2>
            <p>Lumina Clippers was founded by Rhys McKay after recognizing a fundamental gap in the content marketing landscape. While brands were investing heavily in content creation, most of that content was reaching only a fraction of its potential audience. The insight was simple but powerful: what if brands could tap into a network of thousands of creators who specialize in redistributing content to engaged audiences?</p>
            <p>Starting with just a handful of clippers in early 2024, we've grown exponentially by focusing on quality, results, and brand safety. Today, we manage the largest clipper network in the industry, with sophisticated tools for content optimization, performance tracking, and payout management.</p>
          </section>

          <section>
            <h2>Leadership</h2>
            <h3>Rhys McKay — Founder & CEO</h3>
            <p>Rhys McKay is a serial entrepreneur with deep expertise in digital marketing, Web3, and creator economies. Before founding Lumina Clippers, he built Lumina Web3, a leading crypto marketing agency that has managed over $30 million in campaign spend for projects including Polkadot, OKX, and Humanity Protocol. With over 5 years of experience in high-growth marketing, Rhys brings a unique perspective on how brands can leverage creator networks for exponential reach.</p>
            <p>Connect with Rhys on LinkedIn: linkedin.com/in/rhys-mckay-founder-luminaclipping/</p>
          </section>

          <section>
            <h2>Key Milestones</h2>
            <ul>
              <li><strong>2024 Q1:</strong> Lumina Clippers founded, first 100 clippers onboarded</li>
              <li><strong>2024 Q2:</strong> Reached 10,000 active clippers, 1B total views milestone</li>
              <li><strong>2024 Q3:</strong> Launched AI-powered clip selection, 5B views delivered</li>
              <li><strong>2024 Q4:</strong> Expanded to 50,000+ clippers, enterprise clients onboarded</li>
              <li><strong>2025 Q1:</strong> Crossed 62,900 clippers, 18B+ total views delivered</li>
            </ul>
          </section>

          <section>
            <h2>By the Numbers</h2>
            <ul>
              <li><strong>62,900+</strong> active clippers in our network</li>
              <li><strong>18B+</strong> total views delivered across all campaigns</li>
              <li><strong>10M+</strong> average views per month per campaign</li>
              <li><strong>4</strong> major platforms: TikTok, Reels, Shorts, X</li>
              <li><strong>127+</strong> brands served since launch</li>
              <li><strong>2-4 weeks</strong> average time to meaningful results</li>
            </ul>
          </section>

          <section>
            <h2>Our Values</h2>
            <p><strong>Results Over Vanity:</strong> We measure success by real business impact, not just view counts. Every campaign is optimized for maximum ROI.</p>
            <p><strong>Creator-First:</strong> Our clippers are partners, not contractors. We invest in their success through fair payouts, training, and tools.</p>
            <p><strong>Transparency:</strong> Real-time analytics, clear pricing, and honest communication. No hidden fees, no inflated metrics.</p>
            <p><strong>Innovation:</strong> We continuously improve our AI tools, distribution strategies, and platform support to stay ahead of algorithm changes.</p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p><strong>Email:</strong> rhys@luminaclippers.com</p>
            <p><strong>Phone:</strong> +971 588 241 651</p>
            <p><strong>Address:</strong> 1209 Mountain Road PL NE Ste H, Albuquerque, NM 87110</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/rhys-mckay-founder-luminaclipping/</p>
            <p><strong>X (Twitter):</strong> x.com/luminaclippers</p>
          </section>
        </article>

        {/* Visual Content - Framer Embed */}
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <iframe
            title="About Lumina Clippers"
            src="/lumina.html"
            style={{ width: '100%', height: '100%', border: '0' }}
          />
        </div>
      </main>
    </>
  );
}
