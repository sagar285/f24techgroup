import React from 'react';
import { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact F24Tech - Get Free Technology Consultation | F24Tech India',
  description: 'Contact F24Tech for expert technology solutions, CRM implementations, and custom software development. Get free consultation for your project requirements.',
  keywords: 'contact f24tech, f24tech contact, technology consultation, software development quote, crm implementation',
};

const ContactPage = () => {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
};

export default ContactPage;