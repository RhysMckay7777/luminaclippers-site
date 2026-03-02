"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Calendly widget
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const existing = document.querySelector('script[src*="calendly"]');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Platforms />
        <Benefits />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐧</span>
          <span className="text-xl font-bold">
            Lumina<span className="text-[#4ADE80]">Clippers</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-gray-400 hover:text-white transition">Benefits</a>
          <a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a>
          <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
        </nav>
        <a
          href="#booking"
          className="bg-[#4ADE80] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#22C55E] transition"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4ADE80]/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-[#4ADE80] font-semibold mb-4 uppercase tracking-wider text-sm">
          The #1 Clipping Agency
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          The Fastest Way to{" "}
          <span className="text-[#4ADE80]">Mass Distribute</span> Your Brand
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Launch clipping campaigns that flood social feeds with clips, built to maximize reach, retention, and results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-[#4ADE80] text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-[#22C55E] transition"
          >
            Start Your Clipping Era →
          </a>
          <a
            href="#how-it-works"
            className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/5 transition"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { number: "10,000+", label: "Active Clippers" },
    { number: "1B+", label: "Views Generated" },
    { number: "500+", label: "Brand Campaigns" },
    { number: "24/7", label: "Distribution" },
  ];

  return (
    <section className="py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-[#4ADE80]">{stat.number}</p>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 uppercase tracking-wider text-sm mb-8">
          Everywhere Short-Form Lives
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {["TikTok", "Instagram Reels", "YouTube Shorts", "X / Twitter"].map((platform) => (
            <div key={platform} className="text-2xl font-bold text-gray-600 hover:text-white transition">
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: "🚀",
      title: "Mass Distribution",
      description: "Your content clipped and spread across TikTok, Reels, and Shorts—seen everywhere your audience scrolls.",
    },
    {
      icon: "📊",
      title: "Real-Time Tracking",
      description: "See views, likes, comments, and shares update live so you always know what's working.",
    },
    {
      icon: "📈",
      title: "Scalable Campaigns",
      description: "From a single launch to always-on distribution, spin up hundreds of clips in days.",
    },
    {
      icon: "👥",
      title: "Creator Community",
      description: "Tap into a vetted network of 10,000+ clippers who know how to create viral short-form content.",
    },
    {
      icon: "🎯",
      title: "Data-Backed Insights",
      description: "Spot top-performing clips, identify trends, and double down on formats that drive momentum.",
    },
    {
      icon: "✨",
      title: "Hands-Off Ops",
      description: "We handle briefs, clippers, payouts, and reporting—so you can focus on your brand.",
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#4ADE80] font-semibold text-center mb-4 uppercase tracking-wider text-sm">
          Why Choose Our Clipping Agency
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          The Clipping Network Built for Scale
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#4ADE80]/50 transition"
            >
              <span className="text-4xl mb-4 block">{benefit.icon}</span>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Send Us Your Content",
      description: "Share your videos, podcasts, streams, or any content you want distributed.",
    },
    {
      step: "02",
      title: "We Brief Our Clippers",
      description: "Our team creates briefs and distributes to our network of 10,000+ clippers.",
    },
    {
      step: "03",
      title: "Clips Flood Social Media",
      description: "Clippers create unique edits and post across TikTok, Reels, Shorts & X.",
    },
    {
      step: "04",
      title: "Track & Optimize",
      description: "Real-time dashboards show performance. We double down on what works.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#4ADE80] font-semibold text-center mb-4 uppercase tracking-wider text-sm">
          How Our Clipping Agency Works
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Simple, Smart, Scalable
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <span className="text-6xl font-bold text-[#4ADE80]/20 absolute -top-4 left-0">
                {step.step}
              </span>
              <div className="pt-12">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const features = [
    "Massive distribution across TikTok, Reels, Shorts",
    "Scale campaigns to thousands of clips in days",
    "Real-time performance tracking",
    "Access to 10,000+ active clippers",
    "24/7 community management",
    "Transparent reporting & analytics",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#4ADE80] font-semibold text-center mb-4 uppercase tracking-wider text-sm">
          Comparison
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Why Lumina Stands Out
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#4ADE80]">Lumina Clippers</h3>
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 mb-4">
                <span className="text-[#4ADE80]">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-500">Others</h3>
            {[
              "Limited reach on single-platform ads",
              "Slow & expensive influencer deals",
              "Little to no performance transparency",
              "Small creator pools with limited variety",
              "Bad community management",
              "No real-time tracking",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 mb-4 text-gray-500">
                <span>✗</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Lumina Clippers generated 50M+ views for our launch campaign. The best clipping agency we've worked with.",
      author: "AI Startup Founder",
    },
    {
      quote: "We went from 0 to viral in 2 weeks. Their clipper network is insane.",
      author: "Content Creator",
    },
    {
      quote: "Finally a clipping agency that actually delivers. Real results, real tracking, real ROI.",
      author: "Brand Marketing Director",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <p className="text-[#4ADE80] font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What is a clipping agency?",
      a: "A clipping agency distributes your content across social media by mobilizing creators (clippers) to clip, edit, and post your content. Lumina Clippers is the leading clipping agency with 10,000+ active clippers.",
    },
    {
      q: "How does your clipping service work?",
      a: "We take your content and distribute it across TikTok, Reels, X, and Shorts through our network of 10,000+ clippers. Each clipper creates unique edits, flooding social feeds with your brand.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing varies based on campaign scale and goals. Book a call to discuss your specific needs and get a custom quote.",
    },
    {
      q: "What kind of results can I expect?",
      a: "Most clients see millions of views across platforms. Our data-backed approach identifies winning formats and scales what works for maximum reach.",
    },
    {
      q: "What platforms do you distribute on?",
      a: "We distribute across all major short-form platforms: TikTok, Instagram Reels, YouTube Shorts, and X (Twitter).",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#4ADE80] font-semibold text-center mb-4 uppercase tracking-wider text-sm">
          FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-[#4ADE80] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-t from-[#4ADE80]/10 via-transparent to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Go Viral?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Book a call and let's discuss how our clipping agency can flood social media with your brand.
        </p>
        <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden max-w-2xl mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/luminaclippers/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐧</span>
          <span className="text-xl font-bold">
            Lumina<span className="text-[#4ADE80]">Clippers</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 Lumina Clippers. The #1 Clipping Agency for Brands.
        </p>
      </div>
    </footer>
  );
}
