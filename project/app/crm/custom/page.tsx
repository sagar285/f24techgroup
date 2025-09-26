// app/crm/custom/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Settings, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom CRM Development Services | F24Tech India',
  description: 'Bespoke CRM solutions built from scratch using modern technologies. Custom CRM development tailored to your business needs.',
  keywords: 'custom crm development, bespoke crm, crm software development, custom crm solutions',
};

const CustomCRMPage = () => {
  const services = [
    'Custom CRM Architecture',
    'API Development',
    'Mobile CRM Applications',
    'Advanced Analytics',
    'Custom Integrations',
    'Workflow Automation',
    'Role-based Access Control',
    'Custom Reporting'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Settings className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom CRM Development</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Bespoke CRM solutions built specifically for your business needs
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-full font-semibold">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Custom CRM Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomCRMPage;