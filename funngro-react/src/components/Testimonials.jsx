import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StarIcon = () => (
  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const testimonials = [
  { text: '"I earned ₹12,000 in my first month on Funngro. The projects are real, the companies are real, and the money hits different when you\'re 16."', name: 'Arjun M.', role: 'Social Media, 16 y/o', initials: 'AM' },
  { text: '"Funngro helped me build a real portfolio before college. Now I have experience certificates from 3 companies and actual work samples."', name: 'Priya S.', role: 'Content Writer, 17 y/o', initials: 'PS' },
  { text: '"My parents didn\'t believe I could earn money online. After my first payout from Funngro, they became my biggest supporters."', name: 'Rohit K.', role: 'Video Creator, 15 y/o', initials: 'RK' },
];

export default function Testimonials() {
  useEffect(() => {
    document.querySelectorAll('.proof-card').forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="proof-section" aria-labelledby="proof-h2">
      <div className="section-label">Testimonials</div>
      <h2 className="section-h2" id="proof-h2">Teens Who<br/>Walked the Talk</h2>
      <p className="section-sub">Real stories from real teen freelancers on Funngro.</p>
      <div className="proof-grid">
        {testimonials.map((t, i) => (
          <div className="proof-card" key={i}>
            <div className="stars">
              {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
            </div>
            <p className="proof-text">{t.text}</p>
            <div className="proof-author">
              <div className="proof-av">{t.initials}</div>
              <div>
                <div className="proof-name">{t.name}</div>
                <div className="proof-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
