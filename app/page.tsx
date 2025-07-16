
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
    <About
        title="About Our Company"
        paragraphs={[
          'We are a forward-thinking firm offering innovative accounting solutions.',
          'Our team of experienced professionals is committed to helping your business grow.',
          'Transparency, trust, and technology are at the heart of everything we do.',
        ]}
        imageUrl="/about-us.jpg"
      />
    <Testimonials />

  </main>
  );
}
