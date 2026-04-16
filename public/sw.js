// Service Worker to redirect booking attempts to Calendly
const CALENDLY_URL = 'https://calendly.com/d/cyjt-srn-4mn/lumina-clippers-growth-opportunity-meet';
const BOOKING_PATTERNS = [
  '/book',
  'book-a-call',
  'bookacall',
  '/growth#book',
  'appointment',
  'schedule'
];

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Check if the request is for a booking-related path
  const isBooking = BOOKING_PATTERNS.some(pattern =>
    url.pathname.toLowerCase().includes(pattern) ||
    url.hash.toLowerCase().includes(pattern)
  );

  if (isBooking && event.request.method === 'GET') {
    // Redirect to Calendly
    event.respondWith(Response.redirect(CALENDLY_URL, 302));
  }
});

// Listen for messages from the page to redirect
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'REDIRECT_TO_CALENDLY') {
    event.ports[0].postMessage({
      url: CALENDLY_URL
    });
  }
});
