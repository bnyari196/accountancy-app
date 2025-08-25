
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
          'At Tyrone Tax & VAT Specialists, we are an Omagh-based accounting firm providing professional accounting services for individuals and small businesses across Tyrone and the surrounding areas. Our goal is to make managing your finances simple, accurate, and stress-free, so you can focus on growing your business with confidence.',
          
          'With years of experience in accounting services, tax returns, VAT compliance, and bookkeeping, our team combines technical expertise with a friendly, approachable service. We take the time to understand your business, answer your questions clearly, and provide practical solutions tailored to your unique needs.',
          
          "Transparency, trust, and technology are at the heart of everything we do. Whether it's preparing self-assessment tax returns, ensuring VAT compliance, or providing guidance on financial planning and cash flow, we aim to help clients make informed decisions and stay fully compliant with HMRC regulations.",
          
          'Find out for yourself how professional accounting and tax services can be straightforward, reliable, and approachable.'
        ]}
        imageUrl="/about-us.jpg"
    />
    <Testimonials />

  </main>
  );
}
