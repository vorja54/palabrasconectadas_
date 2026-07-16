import { useEffect, useRef } from 'react';

/**
 * AdSense banner component.
 *
 * Auto-ads are already enabled via the <script> tag in index.html.
 * This component provides manual ad placements for specific locations
 * once ad units are created in the AdSense console.
 *
 * To use: create an ad unit in your AdSense console, get its slot ID,
 * and pass it as the `slot` prop.
 */
export default function AdBanner({ slot, format = 'auto', className = '' }) {
  const adRef = useRef(null);
  const loaded = useRef(false);

  useEffect(() => {
    // Only attempt to push if we have a slot and it's our first render
    if (!slot || loaded.current) return;
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
        loaded.current = true;
      }
    } catch {
      // Silently fail — ad blocking or no AdSense
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If no slot is configured yet, render nothing (auto-ads handle it)
  if (!slot) return null;

  return (
    <div className={`ad-banner flex justify-center overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minWidth: 300, minHeight: 100 }}
        data-ad-client="ca-pub-5361044982771544"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}