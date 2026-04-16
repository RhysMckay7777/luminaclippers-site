'use client'

import { useEffect } from 'react'

// Declare fbq type for TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const CALENDLY_URL = 'https://calendly.com/d/cyjt-srn-4mn/lumina-clippers-growth-opportunity-meet';

export default function GrowthPage() {
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

    // Override window.open for any booking-related navigation
    const originalOpen = window.open;
    (window as any).open = function(url?: string | URL, target?: string, features?: string) {
      const urlStr = String(url || '');
      if (!urlStr || urlStr === '/' || urlStr.includes('book') || urlStr === '#' || urlStr === '.') {
        window.location.href = CALENDLY_URL;
        return null;
      }
      return originalOpen.apply(window, [url, target, features] as any);
    };

    // Global click interceptor for buttons containing "Book"
    document.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Walk up the DOM tree to find a clickable element
      let element: HTMLElement | null = target;
      for (let i = 0; i < 10; i++) {
        if (!element) break;

        const text = (element.textContent || '').toLowerCase();
        const isButton = element.tagName === 'BUTTON' || element.tagName === 'A' || element.className.includes('button');
        const isBooking = text.includes('book') || text.includes('call') || text.includes('intro');

        if (isButton && isBooking) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = CALENDLY_URL;
          return;
        }

        element = element.parentElement;
      }
    }, { capture: true });

    // Listen for any unload/navigation attempts
    const originalLocation = window.location;
    window.addEventListener('beforeunload', (e) => {
      // Allow Calendly redirects
      if (!window.location.href.includes('calendly')) {
        // This event fires for ANY navigation
      }
    });

    return () => {
      (window as any).open = originalOpen;
      window.removeEventListener('message', handleCalendlyEvent);
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
        title="Lumina Clippers Growth Page"
      />

      {/* Script that runs BEFORE React loads to ensure earliest possible interception */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const CALENDLY_URL = '${CALENDLY_URL}';

              // Stage 1: Override window.open immediately
              const originalOpen = window.open || function() {};
              window.open = function(url, target, features) {
                const urlStr = String(url || '');
                if (!urlStr || urlStr === '/' || urlStr.includes('book') || urlStr === '#') {
                  window.location.href = CALENDLY_URL;
                  return null;
                }
                return originalOpen.apply(window, arguments);
              };

              // Stage 2: Intercept clicks as early as possible
              function interceptClicks(e) {
                const target = e.target;
                if (!target) return;

                // Check element and up to 10 parents
                let el = target;
                for (let i = 0; i < 10; i++) {
                  if (!el) break;
                  const text = (el.textContent || '').toLowerCase();
                  const tag = el.tagName;

                  // Look for "Book A Call", "Book An Intro", etc.
                  if ((text.includes('book') && (text.includes('call') || text.includes('intro'))) ||
                      (tag === 'BUTTON' && text.includes('book')) ||
                      (tag === 'A' && text.includes('book'))) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = CALENDLY_URL;
                    return false;
                  }

                  el = el.parentElement;
                }
              }

              // Attach at document level with capture
              document.addEventListener('click', interceptClicks, true);
              document.addEventListener('mousedown', interceptClicks, true);

              // Stage 3: Watch for navigation via any means
              let lastHref = window.location.href;
              setInterval(function() {
                if (window.location.href !== lastHref) {
                  lastHref = window.location.href;
                  // Navigation detected - let it happen (unless we catch it above)
                }
              }, 100);
            })();
          `,
        }}
      />
    </>
  )
}
