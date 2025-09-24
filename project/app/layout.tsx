import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'F24Tech - Leading Technology Solutions Provider | Java, Python, PHP, CRM Development',
  description: 'F24Tech provides comprehensive technology solutions including Java frameworks, JavaScript, Python, PHP development, Zoho, NetSuite implementation, and custom CRM software development in India.',
  keywords: 'f24tech, f24tech softwares, f24tech india, f24tech group, java frameworks, javascript development, python programming, php development, crm software, zoho implementation, netsuite consulting, custom software development',
  authors: [{ name: 'F24Tech' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'F24Tech - Leading Technology Solutions Provider',
    description: 'Comprehensive technology solutions for modern businesses',
    url: 'https://f24tech.com',
    siteName: 'F24Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'F24Tech Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F24Tech - Leading Technology Solutions Provider',
    description: 'Comprehensive technology solutions for modern businesses',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://f24tech.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "F24Tech",
              "alternateName": ["F24Tech Softwares", "F24Tech India", "F24Tech Group"],
              "url": "https://f24tech.com",
              "logo": "https://f24tech.com/logo.png",
              "description": "Leading technology solutions provider specializing in Java, Python, PHP, JavaScript development and CRM implementation",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "sameAs": [
                "https://linkedin.com/company/f24tech",
                "https://twitter.com/f24tech"
              ],
              "offers": {
                "@type": "Service",
                "serviceType": ["Software Development", "CRM Implementation", "Web Development", "Mobile App Development"]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-poppins`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}