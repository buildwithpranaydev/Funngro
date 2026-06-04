import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categoriesData = [
  { name: 'Social Media Marketing', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-3 5-12 5S-2 4 2 4s3 5 12 5 8-5 8-5"/><circle cx="12" cy="12" r="3"/><path d="M22 20s-3-5-12-5S-2 20 2 20s3-5 12-5 8 5 8 5"/></svg> },
  { name: 'Video Creation', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg> },
  { name: 'Website Design', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, active: true },
  { name: 'Influencer Marketing', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { name: 'Mobile App Dev', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg> },
  { name: 'Campus Ambassador', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: 'Data Entry', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
  { name: 'Voice Over', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg> },
  { name: 'Content Writing', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg> },
  { name: 'Graphics Design', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12"/></svg> },
  { name: 'Research & Surveys', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg> },
  { name: 'App Testing', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
];

export default function Categories() {
  const [activeIdx, setActiveIdx] = useState(2);

  useEffect(() => {
    document.querySelectorAll('.cat-card').forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.04, ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="cat-section" id="categories" aria-labelledby="cat-h2">
      <div className="section-label">Project Categories</div>
      <h2 className="section-h2" id="cat-h2">Pick Your<br/>Superpower</h2>
      <p className="section-sub">12 skill categories with hundreds of live projects. Register and start applying.</p>
      <div className="cat-grid" role="list">
        {categoriesData.map((cat, i) => (
          <div
            className={`cat-card${i === activeIdx ? ' active' : ''}`}
            role="listitem"
            key={i}
            onClick={() => setActiveIdx(i)}
          >
            <div className="cat-icon-wrap">{cat.icon}</div>
            <span className="cat-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
