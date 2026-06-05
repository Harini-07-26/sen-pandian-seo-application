import { generateMetadata } from '@/lib/seo';
export const metadata = generateMetadata('Contact', 'Get in touch with Sen Pandian Digital Marketing Agency for SEO, ads, and web design services.');

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-background text-foreground flex items-center justify-center py-12">
      <ContactForm />
    </section>
  );
}
