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

    // Try to intercept window.open calls from within the iframe
    const originalOpen = window.open;
    (window as any).open = function(url?: string | URL, target?: string, features?: string) {
      // If any window.open is called with empty or relative URL, assume it's a booking button
      const urlStr = String(url || '');
      if (!urlStr || urlStr === './' || urlStr === './#bookacall' || urlStr === '#bookacall' || urlStr.includes('book')) {
        window.location.href = CALENDLY_URL;
        return null;
      }
      return originalOpen.apply(window, [url, target, features] as any);
    };

    // Intercept all clicks on the page
    // Since we can't access the iframe DOM, we'll listen for clicks that propagate
    const handlePageClick = (e: Event) => {
      const target = e.target as HTMLElement;

      // Check if click is on a link or button with "Book" in the text
      if (target && target.textContent) {
        const text = target.textContent.toLowerCase();
        if ((text.includes('book') || text.includes('call')) && (text.includes('book') && text.includes('call'))) {
          // This looks like a booking button
          e.preventDefault();
          e.stopPropagation();
          window.location.href = CALENDLY_URL;
          return false;
        }
      }

      // Check if the clicked element or its parents are inside the Framer iframe
      // and likely a button (by position/size)
      let element: HTMLElement | null = target;
      while (element) {
        if (element.id === 'framer-growth') {
          // Click was inside the iframe, can't intercept directly
          // But we can watch for navigation
          break;
        }
        element = element.parentElement;
      }
    };

    document.addEventListener('click', handlePageClick, { capture: true });

    // Monitor iframe for any attempts to navigate
    const iframe = document.getElementById('framer-growth') as HTMLIFrameElement;
    if (iframe) {
      // Try to detect when the iframe tries to navigate
      iframe.addEventListener('load', () => {
        try {
          // This will fail for cross-origin, but we try anyway
          const iframeDoc = iframe.contentDocument;
          if (iframeDoc) {
            // If we can access it, set up click handlers
            iframeDoc.addEventListener('click', (e: Event) => {
              const target = e.target as HTMLElement;
              if (target?.textContent?.toLowerCase().includes('book')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = CALENDLY_URL;
              }
            }, true);
          }
        } catch (e) {
          // Cross-origin iframe - expected
        }
      });
    }

    // Cleanup
    return () => {
      (window as any).open = originalOpen;
      document.removeEventListener('click', handlePageClick);
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

      {/* Framer iframe - fully interactive */}
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

      {/* Inline script to intercept clicks at the earliest opportunity */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const CALENDLY_URL = '${CALENDLY_URL}';

            // Override window.open globally and immediately
            const originalOpen = window.open;
            window.open = function(url, target, features) {
              if (!url || String(url).includes('book') || String(url) === '' || String(url) === './') {
                window.location.href = CALENDLY_URL;
                return null;
              }
              return originalOpen.apply(this, arguments);
            };

            // Intercept all clicks
            document.addEventListener('click', function(e) {
              const target = e.target;
              if (target && target.textContent && target.textContent.toLowerCase().includes('book') && target.textContent.toLowerCase().includes('call')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = CALENDLY_URL;
              }
            }, true);
          `,
        }}
      />
    </>
  )
}
