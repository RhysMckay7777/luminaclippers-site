'use client'

import { useEffect } from 'react'

const CALENDLY_URL = 'https://calendly.com/d/cyjt-srn-4mn/lumina-clippers-growth-opportunity-meet'

export default function GrowthReplica() {
  useEffect(() => {
    // Track pageview
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', 'GrowthReplicaPageView')
    }
  }, [])

  const handleBookCall = () => {
    window.location.href = CALENDLY_URL
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 z-50 bg-gray-900/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Lumina Clippers</div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Case Studies</a>
          </nav>
          <button
            onClick={handleBookCall}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Book A Call
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-6 mb-12">
          <p className="text-gray-400 text-lg">Do what the top in the world are doing</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            The fastest way to<br />mass distribute<br />your brand
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Launch campaigns that flood social feeds with clips, built to maximize reach, retention, and results.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleBookCall}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition"
            >
              Book A Call
            </button>
            <button className="border-2 border-gray-500 hover:border-white text-white font-bold px-8 py-4 rounded-lg text-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Stand out with scale</h3>
            <p className="text-gray-300">
              Flood social feeds with hundreds of clips so your brand dominates the conversation.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Enterprise Insights</h3>
            <p className="text-gray-300">
              See what clips perform best, double down on winning formats, and track results in real time.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Data-backed distribution</h3>
            <p className="text-gray-300">
              Every campaign comes with transparent reporting—views, clicks, and conversions you can act on.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Book a Call With Lumina</h2>
        <p className="text-xl text-gray-300 mb-8">
          Tell us about your goals—we'll show you how clipping campaigns can put your brand everywhere short-form lives.
        </p>
        <button
          onClick={handleBookCall}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-10 py-4 rounded-lg text-lg transition w-full md:w-auto"
        >
          Schedule a Meeting
        </button>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Lumina?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Mass Distribution',
              desc: 'Your content clipped and spread across TikTok, Reels, and Shorts—seen everywhere your audience scrolls.'
            },
            {
              title: 'Real-Time Tracking',
              desc: 'See views, likes, comments, and shares update live so you always know what\'s working.'
            },
            {
              title: 'Scalable Campaigns',
              desc: 'From a single launch to always-on distribution, spin up hundreds of clips in days.'
            },
            {
              title: 'Creator Community',
              desc: 'Tap into a vetted network of 10,000+ clippers who know how to create viral short-form content.'
            },
            {
              title: 'Data-Backed Insights',
              desc: 'Spot top-performing clips, identify trends, and double down on formats that drive momentum.'
            },
            {
              title: 'Hands-Off Ops',
              desc: 'We handle briefs, clippers, payouts, and reporting—so you can focus on your brand.'
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-4 text-center">Platforms We Distribute On</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          We clip and distribute your content across today's biggest platforms—maximizing reach, engagement, and cultural impact.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {['TikTok', 'Instagram Reels', 'YouTube Shorts', 'YouTube'].map((platform) => (
            <div key={platform} className="bg-gray-800 p-8 rounded-lg text-center">
              <p className="font-semibold text-lg">{platform}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Lumina Stands Out</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-4 font-bold">Feature</th>
                <th className="pb-4 font-bold text-emerald-400">Lumina</th>
                <th className="pb-4 font-bold text-gray-400">Others</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Massive distribution across platforms', lumina: '✓', others: '✗' },
                { feature: 'Scale campaigns to thousands of clips in days', lumina: '✓', others: '✗' },
                { feature: 'Real-time performance tracking', lumina: '✓', others: '✗' },
                { feature: 'Access to 10,000+ active clippers', lumina: '✓', others: '✗' },
                { feature: '24/7 community management', lumina: '✓', others: '✗' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td className="py-4">{row.feature}</td>
                  <td className="py-4 text-emerald-400">{row.lumina}</td>
                  <td className="py-4 text-gray-400">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What makes Lumina Clippers different?',
              a: 'We mobilize a vetted network of 10,000+ clippers to create and distribute content at scale—giving your brand reach that traditional influencer deals can\'t match.'
            },
            {
              q: 'How fast can we launch a campaign?',
              a: 'Most campaigns go live within 3–7 days once we have your content, goals, and brand guidelines.'
            },
            {
              q: 'What platforms do you distribute on?',
              a: 'We focus on TikTok, Instagram Reels, and YouTube Shorts, with optional cross-posting through our creators\' own channels.'
            },
            {
              q: 'What\'s the minimum budget to get started?',
              a: 'We recommend at least $5K per campaign for meaningful results, though larger budgets allow for wider distribution and stronger momentum.'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">{item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Grow With Lumina?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Turn your content into hundreds of clips distributed across TikTok, Reels, and Shorts—powered by our network of 10,000+ clippers.
        </p>
        <button
          onClick={handleBookCall}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-10 py-4 rounded-lg text-lg transition"
        >
          Book An Intro Call
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold mb-4">Lumina Clippers</p>
              <p className="text-gray-400">Turn short-form content into cultural reach—fast.</p>
            </div>
            <div>
              <p className="font-bold mb-4">Product</p>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Company</p>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Follow</p>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 Lumina Clippers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
