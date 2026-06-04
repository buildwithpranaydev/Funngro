export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-name">
            <img src="/images/funngro-icon.png" alt="" aria-hidden="true" style={{ height: '28px', width: '28px', objectFit: 'contain', borderRadius: '50%' }} />
            Funngro
          </div>
          <p>Enable Smart Teenagers and Smart Companies to realize their full potentials. It&apos;s fun to grow.</p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(244,240,230,0.2)' }}>© 2025 Wishbanc Technologies Pvt. Ltd.</p>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="/teen">For Teens</a></li>
            <li><a href="/company">For Companies</a></li>
            <li><a href="/shelancer">Shelancer</a></li>
            <li><a href="/earn">Earn Now</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/investors">Investors</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms &amp; Conditions</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">Funngro — Wishbanc Technologies Private Limited · All rights reserved</p>
        <div className="footer-socials" aria-label="Social links">
          <a href="https://instagram.com/funngro" className="soc-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://youtube.com/@funngro" className="soc-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://linkedin.com/company/funngro" className="soc-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
