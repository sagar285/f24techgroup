import React from 'react';
import { Metadata } from 'next';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import { getConnection } from '@/lib/db';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const connection = await getConnection();
    const [seoData] = await connection.execute(
      'SELECT * FROM seo_settings WHERE page = ?',
      ['services']
    );
    
    const seo = (seoData as any[])[0];
    
    return {
      title: seo?.title || 'Technology Services - Java, Python, PHP, JavaScript Development | F24Tech',
      description: seo?.description || 'Expert technology services including Java Spring Boot, React.js, Angular, Python Django, PHP Laravel development and comprehensive CRM solutions.',
      keywords: seo?.keywords || 'java spring boot, react js, angular, python django, php laravel, javascript frameworks, web development services',
      openGraph: {
        title: seo?.og_title || seo?.title,
        description: seo?.og_description || seo?.description,
        images: seo?.og_image ? [seo.og_image] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Technology Services | F24Tech',
      description: 'Expert technology services and solutions',
    };
  }
}

const ServicesPage = () => {
  return (
    <div className="pt-16">
      <Services />
      <Technologies />
    </div>
  );
};

export default ServicesPage;