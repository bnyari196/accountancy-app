
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesCarousel from './components/ServicesCarousel';
import Testimonials from './components/Testimonials';
import About from './components/About';


export default function Home() {
  return (
   <main>
    <Hero />
    <Services />
    <ServicesCarousel />
    <About />
    <Testimonials />

  </main>
  );
}
