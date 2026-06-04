import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, title: 'First Real Income', desc: 'Work with real companies and earn actual money — not pocket money, not gift cards. Real rupees in your account.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, title: 'Turn Passion into Profession', desc: 'Love design, social media, or coding? Get paid for skills you already have and build a career head start others won\'t get until college.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>, title: 'Experiential Learning', desc: 'Real projects beat textbooks. Learn by doing — every task is live, used by real teams, adding to real portfolios.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>, title: 'Verified Certifications', desc: 'Earn experience certificates from real companies — not coaching centres. Build a portfolio that speaks for itself.' },
];

export default function WhySection() {
  useEffect(() => {
    document.querySelectorAll('.why-card').forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.09, ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="section" id="why" aria-labelledby="why-h2">
      <div className="section-label">Why Funngro</div>
      <h2 className="section-h2" id="why-h2">Why Work<br/>in Your Teens?</h2>
      <p className="section-sub">Warren Buffett, Bill Gates, Steve Jobs — all started in their teens. Here&apos;s your reason.</p>
      <div className="why-grid">
        {cards.map((c, i) => (
          <article className="why-card" key={i}>
            <div className="why-card-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
