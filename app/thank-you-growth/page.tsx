import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Important Next Steps — Lumina Clippers",
  description: "Your growth consultation is booked. Watch the video before our call.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouGrowth() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Stop Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent py-4">
        <p className="text-center text-2xl md:text-4xl font-bold text-green-400 animate-pulse">
          STOP DO NOT LEAVE THIS PAGE
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center pt-24 pb-16 px-4">
        {/* Important Next Steps */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            Important Next Steps
          </h1>
          
          <ol className="text-left text-lg md:text-2xl lg:text-3xl space-y-2 mb-8 max-w-2xl mx-auto">
            <li className="flex gap-3">
              <span>1.</span>
              <span>Open your email and confirm your invite.</span>
            </li>
            <li className="flex gap-3">
              <span>2.</span>
              <span>Please select <strong>YES</strong> confirming your attendance.</span>
            </li>
            <li className="flex gap-3">
              <span>3.</span>
              <span>Check meeting details are available in your calendar.</span>
            </li>
          </ol>

          <p className="text-lg md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto">
            Watch this quick 3 minute video below, it is absolutely
            <br />crucial before we speak.
          </p>
        </div>

        {/* Video Embed */}
        <div className="w-full max-w-4xl mb-12">
          <video 
            className="w-full rounded-3xl"
            controls 
            autoPlay
            playsInline
            preload="metadata"
          >
            <source src="https://framerusercontent.com/assets/oBjjjdL0vDPX4jFZI1jVjdjWwUE.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* CTA Button */}
        <a 
          href="https://www.youtube.com/@luminaclippers"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-900/50 backdrop-blur-sm border border-green-800 hover:bg-green-800/50 text-white font-bold py-4 px-8 rounded-xl transition mb-16"
        >
          FREE VIDEOS → CLICK HERE
        </a>

        {/* Case Studies Section */}
        <div className="w-full max-w-5xl bg-black py-4 px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="space-y-4">
              <video 
                className="w-full rounded-lg"
                controls 
                muted
                playsInline
                preload="none"
              >
                <source src="https://framerusercontent.com/assets/oUtSowxkfcPtAgaLGlRTHcLc4.mp4" type="video/mp4" />
              </video>
              <h3 className="text-2xl font-semibold">Case Studies</h3>
              <p className="text-gray-500 text-xl">
                In depth look at our companies case studies.
              </p>
            </div>

            {/* Case Study 2 - Stake YouTube */}
            <div className="space-y-4">
              <div className="relative aspect-video">
                <iframe 
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/LUMqbLJNOU8?rel=0&modestbranding=1"
                  title="How Stake Took Over With Clipping"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-2xl font-semibold">How Stake Took Over With Clipping</h3>
              <p className="text-gray-500 text-xl">
                A deep dive look at the exact strategy Stake is using to put their logo everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer gradient */}
      <div className="h-32 bg-gradient-to-t from-green-950/30 to-transparent" />
    </div>
  );
}
