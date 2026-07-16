const GA_MEASUREMENT_ID = typeof import.meta !== 'undefined' ? import.meta.env.VITE_GA_MEASUREMENT_ID : undefined;

let initialized = false;

function initGA4() {
  if (initialized || !GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  initialized = true;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

// Auto-initialize on module load
initGA4();

export function trackEvent(action, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
}