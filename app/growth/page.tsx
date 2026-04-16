'use client'

import { useEffect, useState } from 'react'

// Declare fbq type for TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const CALENDLY_URL = 'https://calendly.com/d/cyjt-srn-4mn/lumina-clippers-growth-opportunity-meet';

export default function GrowthPage() {
  const [bookCallRegions, setBookCallRegions] = useState<Array<{x: number, y: number, width: number, height: number}>>([]);

  useEffect(() => {
    // Register Service Worker to intercept booking redirects
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.debug('SW registration failed:', err);
      });
    }

    // Track GrowthPageView custom event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'GrowthPageView');
    }

    // Calendly Lead Tracking - fires when a booking is completed
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        if (window.fbq) {
          window.fbq('track', 'Lead', { content_name: 'Growth Page Booking' });
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    // Scan Framer iframe for "Book A Call" button locations
    const scanForButtons = () => {
      try {
        const iframe = document.getElementById('framer-growth') as HTMLIFrameElement;
        if (!iframe || !iframe.contentDocument) return;

        const iframeDoc = iframe.contentDocument;
        const iframeRect = iframe.getBoundingClientRect();

        // Search for buttons/elements containing "Book A Call" or "Book An Intro"
        const walker = iframeDoc.createTreeWalker(
          iframeDoc.body,
          NodeFilter.SHOW_TEXT,
          null
        );

        const regions: Array<{x: number, y: number, width: number, height: number}> = [];
        let textNode;

        while ((textNode = walker.nextNode())) {
          const text = textNode.textContent || '';
          if ((text.includes('Book A Call') || text.includes('Book An')) && text.trim().length < 50) {
            // Get the parent clickable element
            let element: Node | null = textNode.parentElement;
            let depth = 0;
            while (element && depth < 5) {
              const el = element as HTMLElement;
              if (el.offsetParent !== null && (el.offsetHeight > 30 || el.offsetWidth > 80)) {
                const rect = el.getBoundingClientRect();
                if (rect.width > 40 && rect.height > 20) {
                  regions.push({
                    x: iframeRect.left + rect.left,
                    y: iframeRect.top + rect.top,
                    width: rect.width,
                    height: rect.height,
                  });
                  break;
                }
              }
              element = el.parentElement;
              depth++;
            }
          }
        }

        if (regions.length > 0) {
          setBookCallRegions(regions);
        }
      } catch (e) {
        // Cross-origin restriction or iframe not ready - will retry
      }
    };

    // Scan when iframe loads
    const iframe = document.getElementById('framer-growth') as HTMLIFrameElement;
    if (iframe) {
      iframe.addEventListener('load', scanForButtons);
    }

    // Periodic scanning to catch dynamically loaded content
    const scanInterval = setInterval(scanForButtons, 1500);

    // Also scan immediately
    setTimeout(scanForButtons, 500);
    setTimeout(scanForButtons, 2000);

    // Cleanup listeners on unmount
    return () => {
      clearInterval(scanInterval);
      window.removeEventListener('message', handleCalendlyEvent);
      if (iframe) {
        iframe.removeEventListener('load', scanForButtons);
      }
    };
  }, []);

  return (
    <>
      <title>Lumina Clippers — The Clipping Network for Brands</title>
      <meta name="description" content="The fastest way to mass distribute your brand. Launch campaigns that flood social feeds with clips, built to maximize reach, retention, and results." />
      <meta property="og:title" content="Lumina Clippers — The Clipping Network for Brands" />
      <meta property="og:description" content="Flood social feeds with hundreds of clips so your brand dominates the conversation." />
      <meta property="og:type" content="website" />

      {/* Framer iframe */}
      <iframe
        id="framer-growth"
        src="https://caring-vision-569896.framer.app/growth"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Transparent clickable overlay for "Book A Call" buttons */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1000,
        }}
      >
        {bookCallRegions.map((region, idx) => (
          <button
            key={idx}
            onClick={() => {
              window.location.href = CALENDLY_URL;
            }}
            style={{
              position: 'fixed',
              left: `${region.x}px`,
              top: `${region.y}px`,
              width: `${region.width}px`,
              height: `${region.height}px`,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              pointerEvents: 'auto',
              zIndex: 1001,
              padding: 0,
              margin: 0,
            }}
            aria-label="Book A Call - Navigate to Calendly"
            type="button"
          />
        ))}
      </div>
    </>
  )
}
