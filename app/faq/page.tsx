import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions About Content Clipping | Lumina Clippers',
  description: 'Get answers to common questions about content clipping distribution, pricing, platforms, results, and how Lumina Clippers works for brands.',
};

const faqItems = [
  {
    question: "What is content clipping distribution?",
    answer: "Content clipping distribution is the process of transforming long-form video content into optimized short-form clips and distributing them across multiple social media platforms like TikTok, Instagram Reels, YouTube Shorts, and X. According to Wyzowl's 2024 Video Marketing Statistics, short-form video generates 2.5x more engagement than long-form content. Brands using content clipping distribution typically see 10M+ views per month by reaching audiences across 100+ distribution accounts."
  },
  {
    question: "How does content clipping work for brands?",
    answer: "Brands provide their long-form content (podcasts, interviews, webinars, livestreams) to Lumina Clippers. Our team uses AI and human editors to identify viral-worthy moments, create optimized clips with captions and formatting, and distribute them across our network of 62,900+ clippers. We manage the entire process including clipper coordination, payouts, performance reporting, and campaign optimization. The average brand sees results within 2-4 weeks of launching their clipping campaign."
  },
  {
    question: "Which platforms do you distribute clips to?",
    answer: "Lumina Clippers distributes content across all major short-form video platforms: TikTok (1B+ monthly active users), Instagram Reels (premium demographics), YouTube Shorts (2B+ logged-in users), X (Twitter) for real-time engagement, Facebook Reels for broad demographics, and LinkedIn for B2B audiences. Our clippers maintain optimized accounts across these platforms, ensuring maximum reach and engagement with platform-specific best practices."
  },
  {
    question: "How much does content clipping cost?",
    answer: "Content clipping campaigns typically range from $3,000 to $8,000 per month depending on volume and distribution goals. This includes clip creation, distribution across our network of 62,900+ clippers, performance tracking, and campaign optimization. Compared to traditional influencer marketing or paid ads, content clipping delivers significantly lower cost-per-view (CPV) and higher organic reach. Contact us for a custom quote based on your specific goals."
  },
  {
    question: "What results can I expect from content clipping?",
    answer: "Brands working with Lumina Clippers typically see 10M+ views per month, significant increases in brand awareness, and measurable growth in website traffic and conversions. Our network has generated over 18 billion total views across client campaigns. Results vary based on content quality, niche, and campaign duration, but most brands see meaningful traction within 2-4 weeks. We provide detailed analytics and reporting so you can track ROI."
  },
  {
    question: "How is content clipping different from regular video editing?",
    answer: "Traditional video editing focuses on creating polished final products. Content clipping goes further by identifying viral-worthy moments, optimizing for each platform's algorithm, adding captions and hooks, AND distributing across hundreds of accounts. The distribution network is the key differentiator—you're not just getting edited clips, you're getting mass distribution to audiences who are actively consuming short-form content."
  },
  {
    question: "Do I need to provide edited clips or raw footage?",
    answer: "You can provide either long-form raw footage or pre-edited content—Lumina Clippers handles both. Many brands share their podcast episodes, webinar recordings, livestreams, or interview footage, and our clippers identify the best 15-60 second moments. If you already have edited clips, we can distribute those directly. The more content you provide, the more clips we can create and distribute."
  },
  {
    question: "How long does it take to see results from content clipping?",
    answer: "Most brands see initial traction within 1-2 weeks of launching their clipping campaign, with significant results by week 3-4. Viral moments can happen at any time, but consistent distribution builds compounding reach over time. We recommend a minimum 3-month commitment to see the full flywheel effect of content clipping distribution."
  },
  {
    question: "How many clippers are in the Lumina Clippers network?",
    answer: "Lumina Clippers manages the largest content clipping network in the industry with over 62,900 active clippers. These creators maintain accounts across TikTok, Instagram, YouTube, X, Facebook, and LinkedIn, with combined reach exceeding billions of potential impressions. We continuously recruit and vet new clippers to ensure quality and coverage across all niches."
  },
  {
    question: "How do clipper payouts work?",
    answer: "We handle all clipper payments through our managed payout system. Clippers are compensated based on performance metrics including views, engagement, and conversions. This performance-based model ensures clippers are motivated to create high-quality clips that drive real results. Brands don't need to manage individual clipper relationships—we handle everything."
  },
  {
    question: "What types of content work best for clipping?",
    answer: "The best content for clipping includes podcasts, interviews, webinars, product demos, behind-the-scenes footage, expert commentary, and educational content. Content with clear hooks, emotional moments, valuable insights, or entertaining segments performs best. We recommend content that's at least 10-60 minutes long so we can extract multiple high-quality clips."
  },
  {
    question: "Is content clipping suitable for B2B brands?",
    answer: "Absolutely. B2B brands are seeing excellent results from content clipping, especially on LinkedIn and YouTube. Thought leadership content, industry insights, conference presentations, and expert interviews all perform well when clipped and distributed. B2B clipping campaigns typically focus on building authority and driving qualified leads rather than mass awareness."
  },
  {
    question: "How do you ensure brand safety?",
    answer: "Brand safety is paramount at Lumina Clippers. We vet all clippers before they join our network, provide clear brand guidelines for each campaign, review content before distribution, and have systems to quickly remove any content that doesn't meet standards. You retain full approval rights over how your content is presented."
  },
  {
    question: "Can I see examples of successful campaigns?",
    answer: "Yes, we can share case studies and examples from previous campaigns during your discovery call. Our clients include AI startups, consumer brands, crypto projects, apps, and B2B companies. One AI startup generated 15M views in their first 30 days. Contact us to see relevant examples for your industry."
  },
  {
    question: "How do I get started with Lumina Clippers?",
    answer: "Getting started is simple: 1) Book a discovery call through our website to discuss your goals, 2) We'll create a custom campaign strategy based on your content and target audience, 3) Provide your long-form content, and 4) We launch your campaign and start delivering results within 2-4 weeks. Book your call at luminaclippers.com."
  }
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      
      <main>
        {/* SEO Content - Crawlable */}
        <article className="sr-only-seo" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h1>Frequently Asked Questions About Content Clipping Distribution</h1>
          
          <p>Find answers to the most common questions about content clipping distribution, how Lumina Clippers works, pricing, results, and getting started with your campaign.</p>
          
          {faqItems.map((item, index) => (
            <section key={index}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </section>
          ))}
          
          <section>
            <h2>Still Have Questions?</h2>
            <p>Contact our team directly at rhys@luminaclippers.com or book a discovery call to discuss your specific needs. We're happy to answer any questions about content clipping distribution and how Lumina Clippers can help your brand achieve massive reach.</p>
          </section>
        </article>

        {/* Visual Content - Framer Embed */}
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <iframe
            title="Lumina Clippers FAQ"
            src="/lumina.html"
            style={{ width: '100%', height: '100%', border: '0' }}
          />
        </div>
      </main>
    </>
  );
}
