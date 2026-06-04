import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Download the App', desc: 'Get Funngro from Google Play or the App Store. Create your free account in under 2 minutes.' },
  { num: '02', title: 'Complete Your Profile', desc: 'Tell us about your skills, interests and what kind of projects you want to work on.' },
  { num: '03', title: 'Finish Evaluation Project', desc: 'Complete one quick evaluation project to prove your skills and unlock company projects.' },
  { num: '04', title: 'Apply to Projects', desc: 'Browse hundreds of live projects from 4,000+ companies and apply to the ones you love.' },
  { num: '05', title: 'Earn Real Money', desc: 'Complete projects, get rated by companies, earn money directly into your account.' },
];

export default function HowItWorks() {
  useEffect(() => {
    document.querySelectorAll('.step-item').forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.08, ease: 'power3.out',
      });
    });
    gsap.to('.how-img-wrap', {
      scrollTrigger: { trigger: '.how-img-wrap', start: 'top 85%', once: true },
      opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
    });
  }, []);

  return (
    <section className="how-section" id="how" aria-labelledby="how-h2">
      <div className="section-label">Process</div>
      <h2 className="section-h2" id="how-h2">5 Steps to<br/>Your First Payday</h2>
      <div className="how-grid">
        <div className="how-img-wrap" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Process" />
        </div>
        <div className="steps-list">
          {steps.map((s, i) => (
            <div className="step-item" key={i}>
              <div className="step-num-wrap">{s.num}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
