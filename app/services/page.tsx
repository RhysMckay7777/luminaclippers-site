import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Distribution Services | Lumina Clippers',
  description: 'Explore our content clipping and distribution services across TikTok, Instagram Reels, YouTube Shorts, and X. 62,900+ clippers, 18B+ views delivered.',
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Content Clipping Distribution",
            "provider": {
              "@type": "Organization",
              "name": "Lumina Clippers"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Content Distribution Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "TikTok Content Distribution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instagram Reels Distribution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "YouTube Shorts Distribution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Twitter/X Video Distribution"
                  }
                }
              ]
            }
          })
        }}
      />
      
      <main>
        <article className="sr-only-seo" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h1>Content Clipping & Distribution Services</h1>
          
          <p>Lumina Clippers offers comprehensive content clipping and distribution services across all major short-form video platforms. Our network of 62,900+ clippers has delivered over 18 billion views for brands, AI products, apps, and crypto projects.</p>
          
          <section>
            <h2>Our Services</h2>
            
            <h3><a href="/services/tiktok-content-distribution">TikTok Content Distribution</a></h3>
            <p>Reach Gen Z and Millennial audiences with the highest organic reach potential. Our TikTok distribution service delivers 5-10M+ views per month through optimized clips distributed across our clipper network.</p>
            
            <h3><a href="/services/instagram-reels-distribution">Instagram Reels Distribution</a></h3>
            <p>Target premium demographics with higher purchasing power. Instagram Reels offers 22% higher conversion rates with cross-posting to Feed and Stories for maximum visibility.</p>
            
            <h3><a href="/services/youtube-shorts-distribution">YouTube Shorts Distribution</a></h3>
            <p>Build lasting SEO value with content that remains discoverable through Google search. YouTube Shorts reaches 2B+ logged-in users monthly with unique evergreen benefits.</p>
            
            <h3><a href="/services/twitter-x-video-distribution">Twitter/X Video Distribution</a></h3>
            <p>Establish thought leadership and reach B2B audiences. X video distribution drives real-time engagement and direct conversation with decision-makers.</p>
          </section>
          
          <section>
            <h2>Why Choose Lumina Clippers</h2>
            <ul>
              <li><strong>62,900+ active clippers</strong> — the largest distribution network</li>
              <li><strong>18B+ total views delivered</strong> — proven results at scale</li>
              <li><strong>Multi-platform distribution</strong> — TikTok, Reels, Shorts, X</li>
              <li><strong>AI-powered optimization</strong> — clips designed for virality</li>
              <li><strong>Managed service</strong> — we handle everything</li>
            </ul>
          </section>
          
          <section>
            <h2>Pricing</h2>
            <p>All services start at $3,000/month with custom pricing based on volume and goals. Contact us for a quote.</p>
            <p>Email: rhys@luminaclippers.com | Phone: +971 588 241 651</p>
          </section>
          
          <section>
            <h2>Related Resources</h2>
            <ul>
              <li><a href="/content-clipping-guide">The Complete Guide to Content Clipping</a></li>
              <li><a href="/faq">Frequently Asked Questions</a></li>
              <li><a href="/about">About Lumina Clippers</a></li>
            </ul>
          </section>
        </article>

        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <iframe
            title="Lumina Clippers Services"
            src="/lumina.html"
            style={{ width: '100%', height: '100%', border: '0' }}
          />
        </div>
      </main>
    </>
  );
}
