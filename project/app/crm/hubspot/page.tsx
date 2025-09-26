// app/crm/hubspot/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HubSpot CRM Implementation & Integration Services | F24Tech',
  description: 'Professional HubSpot CRM setup, customization, and integration services for inbound marketing and sales automation.',
  keywords: 'hubspot crm, hubspot implementation, marketing automation, sales automation, hubspot integration',
};

const HubSpotPage = () => {
  const services = [
    'HubSpot CRM Setup',
    'Marketing Automation',
    'Sales Pipeline Configuration',
    'Custom Properties & Workflows',
    'Email Campaign Management',
    'Integration Services',
    'Reporting & Analytics',
    'HubSpot Training'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-orange-500 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HubSpot CRM Solutions</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Comprehensive HubSpot implementation and marketing automation
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-full font-semibold">
              Get Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our HubSpot Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubSpotPage;