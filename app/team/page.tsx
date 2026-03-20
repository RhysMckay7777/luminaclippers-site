import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Lumina Clippers Leadership',
  description: 'Meet the team behind Lumina Clippers. Led by founder Rhys McKay, our team brings decades of experience in digital marketing, creator economies, and technology.',
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Lumina Clippers Team",
            "description": "Meet the leadership team at Lumina Clippers",
            "mainEntity": [
              {
                "@type": "Person",
                "name": "Rhys McKay",
                "jobTitle": "Founder & CEO",
                "description": "Serial entrepreneur with expertise in digital marketing and Web3. Previously founded Lumina Web3, managing $30M+ in crypto marketing campaigns.",
                "url": "https://www.linkedin.com/in/rhys-mckay-founder-luminaclipping/",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Lumina Clippers"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/rhys-mckay-founder-luminaclipping/",
                  "https://x.com/luminaclippers"
                ]
              }
            ]
          })
        }}
      />
      
      <main>
        {/* SEO Content - Crawlable */}
        <article className="sr-only-seo" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h1>Lumina Clippers Team</h1>
          
          <section>
            <h2>Leadership</h2>
            
            <div>
              <h3>Rhys McKay — Founder & CEO</h3>
              <p><strong>Experience:</strong> 5+ years in digital marketing, Web3, and creator economies</p>
              <p><strong>Background:</strong> Serial entrepreneur who previously founded Lumina Web3, a leading crypto marketing agency that has managed over $30 million in campaign spend for major Web3 projects including Polkadot, OKX, Stake, and Humanity Protocol.</p>
              <p><strong>Expertise:</strong> Growth marketing, content strategy, creator network development, Web3 marketing, performance optimization</p>
              <p><strong>Education:</strong> Self-taught entrepreneur with hands-on experience building and scaling marketing agencies</p>
              <p><strong>Vision:</strong> "Every brand deserves access to viral distribution. We're building the infrastructure that makes that possible."</p>
              <p><strong>Connect:</strong> linkedin.com/in/rhys-mckay-founder-luminaclipping/</p>
            </div>
          </section>

          <section>
            <h2>Our Team Values</h2>
            <p>At Lumina Clippers, we've assembled a team of experts across content strategy, platform optimization, creator relations, and technology. Our diverse backgrounds—spanning crypto, AI, consumer brands, and media—give us unique insights into what makes content go viral.</p>
            <p>We're a remote-first team operating globally, with team members across the US, UK, UAE, and Asia. This distributed model allows us to serve clients in every timezone and stay ahead of platform trends worldwide.</p>
          </section>

          <section>
            <h2>Advisory Network</h2>
            <p>Lumina Clippers is supported by advisors with deep experience in social media, creator economies, and growth marketing. Our advisory network includes former executives from major platforms and successful founders who have scaled viral content businesses.</p>
          </section>

          <section>
            <h2>Join Our Team</h2>
            <p>We're always looking for talented individuals passionate about content, creators, and growth marketing. Current openings include clipper network managers, content strategists, and platform specialists.</p>
            <p>Contact us at rhys@luminaclippers.com with your resume and a note about why you want to join Lumina Clippers.</p>
          </section>
        </article>

        {/* Visual Content - Framer Embed */}
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <iframe
            title="Lumina Clippers Team"
            src="/lumina.html"
            style={{ width: '100%', height: '100%', border: '0' }}
          />
        </div>
      </main>
    </>
  );
}
