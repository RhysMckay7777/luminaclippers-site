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

    // Aggressive override of window.open to catch ALL navigation attempts
    // Framer buttons call window.open with various URL patterns
    const originalOpen = window.open;
    window.open = function(url?: string | URL, target?: string, features?: string) {
      const urlStr = String(url || '');

      // Redirect to Calendly for booking buttons
      // Match: ./#bookacall, ./, #bookacall, internal anchors, or empty URLs from buttons
      if (
        urlStr === './#bookacall' ||
        urlStr === './' ||
        urlStr === '#bookacall' ||
        urlStr === '' ||
        urlStr.includes('bookacall') ||
        (urlStr.startsWith('/') && urlStr.includes('book'))
      ) {
        window.location.href = CALENDLY_URL;
        return null;
      }

      return originalOpen.call(window, url, target, features);
    } as typeof window.open;

    // Intercept messages from Framer iframe
    // Framer may use postMessage for navigation
    const handleIframeMessage = (e: MessageEvent) => {
      const data = e.data;

      // Check for Framer navigation signals
      if (data && typeof data === 'object') {
        const destination = data.destination || data.href || data.url || data.link || '';
        if (
          destination.includes('book') ||
          destination.includes('calendly') ||
          destination === '' ||
          destination === '/'
        ) {
          window.location.href = CALENDLY_URL;
          return;
        }
      }
    };

    window.addEventListener('message', handleIframeMessage);

    // Watch for any navigation attempts on the page
    const handleBeforeUnload = (e: Event) => {
      const target = e.target as any;
      if (target && (target.href === '' || target.href?.includes('book'))) {
        e.preventDefault();
        window.location.href = CALENDLY_URL;
      }
    };

    // Intercept anchor clicks (fallback)
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).href;
        if (href.includes('./#bookacall') || href.endsWith('./') || href.includes('book')) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = CALENDLY_URL;
        }
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('click', handleBeforeUnload, true);

    // Cleanup listeners on unmount
    return () => {
      window.open = originalOpen;
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('click', handleBeforeUnload, true);
      window.removeEventListener('message', handleIframeMessage);
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
      
      <iframe
        id="framer-growth"
        src="https://caring-vision-569896.framer.app/growth?calendly=true"
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
        onLoad={() => {
          // Send Calendly URL to iframe so it can use it
          const iframe = document.getElementById('framer-growth') as HTMLIFrameElement;
          if (iframe?.contentWindow) {
            iframe.contentWindow.postMessage({
              type: 'SET_CALENDLY_URL',
              url: CALENDLY_URL
            }, '*');
          }
        }}
      />
    </>
  )
}
