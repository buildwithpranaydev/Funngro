import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { count: 4000, suffix: '+', label: 'Partner Companies' },
  { count: 12, suffix: '', label: 'Skill Categories' },
  { count: 50, suffix: 'L+', label: 'Teen Freelancers' },
  { count: 1000, suffix: '+', label: 'Live Projects' },
];

export default function Stats() {
  useEffect(() => {
    document.querySelectorAll('.stat-box').forEach((box, i) => {
      ScrollTrigger.create({
        trigger: box,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(box, { opacity: 1, y: 0, duration: 0.5, delay: i * 0.08 });
          const numEl = box.querySelector('.stat-num');
          const target = +numEl.dataset.count;
          const suffix = numEl.dataset.suffix || '';
          gsap.to({ v: 0 }, {
            v: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: function () {
              numEl.textContent = Math.floor(this._targets[0].v).toLocaleString('en-IN') + suffix;
            },
          });
        },
      });
    });
  }, []);

  return (
    <div className="stats-strip" aria-label="Platform statistics">
      {statsData.map((s, i) => (
        <div className="stat-box" key={i}>
          <div className="stat-num" data-count={s.count} data-suffix={s.suffix}>0</div>
          <div className="stat-lbl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
