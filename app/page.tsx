
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesCarousel from './components/ServicesCarousel';
import Testimonials from './components/Testimonials';

/*import { AiOutlineWhatsApp } from "react-icons/ai";*/


export default function Home() {
  return (
   <main>
    <Hero />
    <Services />
    <ServicesCarousel />
    <Testimonials />

  </main>
  );
}
