import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import CRMSolutions from '@/components/CRMSolutions';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <CRMSolutions />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}