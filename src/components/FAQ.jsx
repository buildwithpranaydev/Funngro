import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: 'How can I start earning money?', a: 'Register on the Funngro app, complete your profile, finish your first evaluation project to unlock company projects, then apply and start earning real money for every project you complete.' },
  { q: 'What is the minimum age to join?', a: 'Funngro is designed for teenagers aged 13–19 who want to earn real income by working on freelance projects from verified companies across India.' },
  { q: 'What types of projects can I work on?', a: 'Social media marketing, video creation, website design, influencer marketing, content writing, graphics design, data entry, voice over, app testing, campus ambassador roles, and research assignments.' },
  { q: 'Is Funngro free to join?', a: 'Yes, Funngro is completely free for teen freelancers. Download the app, register, and start working. No subscription fees or hidden charges.' },
  { q: 'Do I get a certificate for completing projects?', a: 'Yes! Every completed project earns you a verified experience certificate from the company. Build a portfolio and show employers real professional experience.' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);

  useEffect(() => {
    document.querySelectorAll('.faq-item').forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.07, ease: 'power3.out',
      });
    });
  }, []);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? -1 : i);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-h2">
      <div className="section-label">FAQ</div>
      <h2 className="section-h2" id="faq-h2">Common<br/>Questions</h2>
      <div className="faq-wrap">
        <div className="faq-list" role="list">
          {faqs.map((f, i) => (
            <div className={`faq-item${openIdx === i ? ' open' : ''}`} role="listitem" key={i}>
              <div
                className="faq-q"
                tabIndex="0"
                aria-expanded={openIdx === i}
                onClick={() => toggle(i)}
              >
                <span>{f.q}</span>
                <button className="faq-toggle" aria-label="Toggle answer">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
        <div className="faq-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="faq-image" aria-hidden="true" style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '4/5', maxWidth: '360px', width: '100%' }}>
            <img src="/images/faq-image.png" alt="FAQ" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
