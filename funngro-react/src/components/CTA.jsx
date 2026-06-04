import { ANDROID_URL, IOS_URL } from '../hooks/useStoreLink';

export default function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-h2">
      <h2 id="cta-h2">Be Independent<br/><span style={{ color: 'var(--acid)' }}>Before 18.</span></h2>
      <p>Join 50 lakh+ smart teens already earning on Funngro. Free to join, no experience needed.</p>
      <div className="cta-store">
        <a href={ANDROID_URL} className="store-btn" aria-label="Get it on Google Play" target="_blank" rel="noreferrer">
          <svg className="store-icon" viewBox="0 0 24 24" fill="none">
            <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5-14 8.5c-.5.33-1.5.33-1.5-.5z" fill="#c8f135"/>
          </svg>
          <div><span className="store-lbl">Get it on</span><span className="store-name">Google Play</span></div>
        </a>
        <a href={IOS_URL} className="store-btn" aria-label="Download on App Store" target="_blank" rel="noreferrer">
          <svg className="store-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.5 2 8 5 8 5s-3.5.5-3.5 4c0 2 1 4 3.5 5.5L12 22l4-7.5c2.5-1.5 3.5-3.5 3.5-5.5 0-3.5-3.5-4-3.5-4S15.5 2 12 2z" fill="#c8f135"/>
          </svg>
          <div><span className="store-lbl">Download on the</span><span className="store-name">App Store</span></div>
        </a>
      </div>
    </section>
  );
}
