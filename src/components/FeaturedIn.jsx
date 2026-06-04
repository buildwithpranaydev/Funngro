import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pressTiles = [
  { name: 'Shark Tank India', src: '/images/Logo_of_Shark_Tank_India.png' },
  { name: 'YourStory', src: '/images/yourstory-seeklogo.png' },
  { name: 'Inc42', src: '/images/inc42-startup-company-innovation-business-seed-money-business-e3aebe49b7024b28d38f2e08ee14612d.png' },
  { name: 'Economic Times', src: '/images/The_Economic_Times_logo.png' },
  { name: 'Hindustan Times', src: '/images/hindustan-times-seeklogo.png' },
  { name: 'Business Standard', src: '/images/the-business-standard-seeklogo.png' },
];

export default function FeaturedIn() {
  useEffect(() => {
    document.querySelectorAll('.press-tile').forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.06, ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="featured-section" aria-labelledby="feat-h2">
      <div className="section-label">Featured In</div>
      <h2 className="section-h2" id="feat-h2">As Seen On</h2>
      <div className="press-grid">
        {pressTiles.map((t, i) => (
          <div className="press-tile" key={i}>
            <img 
              src={t.src} 
              alt={t.name} 
              style={{ maxWidth: '100%', maxHeight: '40px', objectFit: 'contain', filter: 'grayscale(100%) brightness(200%)', opacity: 0.6 }} 
              onMouseOver={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = 1; }}
              onMouseOut={e => { e.currentTarget.style.filter = 'grayscale(100%) brightness(200%)'; e.currentTarget.style.opacity = 0.6; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

