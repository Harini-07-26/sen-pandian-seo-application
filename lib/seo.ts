import { Metadata } from 'next';

/**
 * Generate a minimal `Metadata` object for a page.
 *
 * @param title       The page title.
 * @param description A concise description for SEO and Open Graph.
 */
export function generateMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_SITE_URL ?? '',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
