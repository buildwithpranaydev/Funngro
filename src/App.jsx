import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhySection from './components/WhySection';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FeaturedIn from './components/FeaturedIn';
import TrustedBy from './components/TrustedBy';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Section titles reveal
    document.querySelectorAll('.section-h2').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <Stats />
      <WhySection />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <FeaturedIn />
      <TrustedBy />
      <FAQ />
      <CTA />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
