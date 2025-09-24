import React from 'react';
import { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About F24Tech - Leading Technology Solutions Provider | F24Tech India',
  description: 'Learn about F24Tech, a leading technology solutions provider specializing in Java, JavaScript, Python, PHP development, and comprehensive CRM solutions including Zoho and NetSuite.',
  keywords: 'about f24tech, f24tech india, f24tech group, f24tech softwares, technology company, software development company',
};

const AboutPage = () => {
  return (
    <div className="pt-16">
      <About />
    </div>
  );
};

export default AboutPage;