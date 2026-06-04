import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const companies = [
  { name: 'boAt',           logo: '/images/logo-boat.png',           hasLogo: false },
  { name: 'Mamaearth',      logo: '/images/logo-mamaearth.png',      hasLogo: true  },
  { name: 'PhysicsWallah',  logo: '/images/logo-physicswallah.png',  hasLogo: true  },
  { name: 'Cuvette',        logo: '/images/logo-cuvette.png',        hasLogo: false },
  { name: 'NxtWave',        logo: '/images/logo-nxtwave.png',        hasLogo: true  },
  { name: 'Internshala',    logo: '/images/logo-internshala.png',    hasLogo: false },
  { name: 'Zepto',          logo: '/images/logo-zepto.png',          hasLogo: true  },
  { name: 'Nykaa',          logo: '/images/logo-nykaa.png',          hasLogo: true  },
  { name: 'Josh Talks',     logo: '/images/logo-joshtalks.png',      hasLogo: true  },
  { name: 'CollegeDunia',   logo: '/images/logo-collegedunia.png',   hasLogo: false },
  { name: 'Pepper Content', logo: '/images/logo-peppercontent.png',  hasLogo: true  },
  { name: 'iSchoolConnect', logo: '/images/logo-ischoolconnect.png', hasLogo: true  },
  { name: 'Headstart',      logo: '/images/logo-headstart.png',      hasLogo: true  },
  { name: 'Qapita',         logo: '/images/logo-qapita.png',         hasLogo: true  },
];

function LogoCard({ company }) {
  const [failed, setFailed] = useState(!company.hasLogo);

  return (
    <div className="trust-logo-card" role="listitem">
      {!failed ? (
        <img
          src={company.logo}
          alt={company.name}
          className="trust-logo-img"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="trust-logo-fallback">{company.name}</span>
      )}
    </div>
  );
}

export default function TrustedBy() {
  useEffect(() => {
    document.querySelectorAll('.trust-logo-card').forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        opacity: 1, y: 0, duration: 0.5, delay: i * 0.05, ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="trust-section" aria-labelledby="trust-h2">
      <div className="section-label">Trusted By</div>
      <h2 className="section-h2" id="trust-h2">4,000+ Companies Trust Funngro</h2>
      <div className="trust-logos" role="list">
        {companies.map((c, i) => (
          <LogoCard key={i} company={c} />
        ))}
      </div>
    </section>
  );
}
