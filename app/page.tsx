import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/home/hero';
import { Problems } from '@/components/home/problems';
import { Solution } from '@/components/home/solution';
import { Modules } from '@/components/home/modules';
import { Stats } from '@/components/home/stats';
import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--bg-base)', minHeight: '100vh' }}>
      <Header />
      <main className="pt-16">
        <Hero />
        <Problems />
        <Solution />
        <Modules />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}