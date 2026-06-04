import { useEffect } from 'react';
import gsap from 'gsap';
import { getStoreLink } from '../hooks/useStoreLink';

export default function Hero() {
  const storeLink = getStoreLink();
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('.hero-badge', { opacity: 1, y: 0, duration: 0.7, delay: 0.2 })
      .to('.hero-h1 .word', { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out' }, '-=0.4')
      .to('.hero-sub', { opacity: 1, duration: 0.7 }, '-=0.4')
      .to('.hero-actions', { opacity: 1, duration: 0.7 }, '-=0.5')
      .to('.hero-meta', { opacity: 1, duration: 0.7 }, '-=0.4')
      .to('.hero-img-main', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.9')
      .to('.hero-img-sub', { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, '-=0.6')
      .to('.hero-float-card', { opacity: 1, x: 0, duration: 0.7 }, '-=0.5');
  }, []);

  return (
    <section className="hero" id="hero" aria-labelledby="h1">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          India&apos;s #1 Teen Freelancing Platform
        </div>
        <h1 className="hero-h1" id="h1">
          <span className="line"><span className="word">Real Work.</span></span>
          <span className="line"><span className="word">Real Money.</span></span>
          <span className="line"><span className="word accent">Real You.</span></span>
        </h1>
        <p className="hero-sub">
          Work with 4,000+ companies on real projects. Build experience, earn income, and grow into a professional — all before you turn 18.
        </p>
        <div className="hero-actions">
          <a href={storeLink} className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">
            Start Earning
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#how" className="btn btn-ghost btn-lg">How It Works</a>
        </div>
        <div className="hero-meta">
          <div className="hero-meta-item"><span className="hero-meta-val">50L+</span><span className="hero-meta-label">Teen Freelancers</span></div>
          <div className="hero-meta-item"><span className="hero-meta-val">4K+</span><span className="hero-meta-label">Companies</span></div>
          <div className="hero-meta-item"><span className="hero-meta-val">1K+</span><span className="hero-meta-label">Live Projects</span></div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-img-main">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Teens working" />
        </div>
        <div className="hero-img-row">
          <div className="hero-img-sub">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80" alt="Teen freelancer" />
          </div>
          <div className="hero-img-sub">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Working on laptop" />
          </div>
        </div>
        <div className="hero-float-card">
          <div className="float-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
          </div>
          <div>
            <div className="float-label">Latest Earning</div>
            <div className="float-val">₹3,500 received</div>
          </div>
        </div>
      </div>
    </section>
  );
}
