import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Stats from '@/components/Stats';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Values />
        <Stats />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
