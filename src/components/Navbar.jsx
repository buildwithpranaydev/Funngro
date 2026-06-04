import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getStoreLink } from '../hooks/useStoreLink';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const storeLink = getStoreLink();

  useEffect(() => {
    ScrollTrigger.create({
      start: 80,
      onEnter: () => navRef.current?.classList.add('scrolled'),
      onLeaveBack: () => navRef.current?.classList.remove('scrolled'),
    });
  }, []);

  return (
    <nav id="nav" ref={navRef} role="navigation" aria-label="Main Navigation">
      <a href="/" className="nav-logo" aria-label="Funngro Home">
        <img src="/images/funngro-icon.png" alt="" aria-hidden="true" style={{ height: '32px', width: '32px', objectFit: 'contain', borderRadius: '50%' }} />
        Funngro
      </a>
      <ul className="nav-links">
        <li><a href="/teen" className="active" aria-current="page">Teen</a></li>
        <li><a href="/company">Company</a></li>
        <li><a href="/shelancer">Shelancer</a></li>
        <li><a href="/blogs">Blog</a></li>
      </ul>
      <div className="nav-right">
        <a href={storeLink} className="btn btn-primary" target="_blank" rel="noreferrer">
          Earn Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
