import { generateMetadata } from '@/lib/seo';
export const metadata = generateMetadata('Home', 'Premium digital marketing agency offering SEO, paid ads, content marketing, and web design. Generate leads and grow your business.');
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
