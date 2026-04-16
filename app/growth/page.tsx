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

    // Override window.open to redirect booking links
    const originalOpen = window.open;
    window.open = function(url?: string | URL, target?: string, features?: string) {
      if (url === './#bookacall' || url === './') {
        window.location.href = CALENDLY_URL;
        return null;
      }
      return originalOpen.apply(window, [url, target, features] as Parameters<typeof originalOpen>);
    } as typeof window.open;

    // Intercept anchor clicks
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).href;
        if (href.includes('./#bookacall') || href.endsWith('./')) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = CALENDLY_URL;
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    // Cleanup listeners on unmount
    return () => {
      window.open = originalOpen;
      document.removeEventListener('click', handleClick, true);
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
    </>
  )
}
