// app/crm/salesforce/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Salesforce Development & Implementation Services | F24Tech',
  description: 'Expert Salesforce development, Lightning components, Apex development, and Salesforce integration services.',
  keywords: 'salesforce development, lightning components, apex development, salesforce integration, salesforce consulting',
};

const SalesforcePage = () => {
  const services = [
    'Salesforce Implementation',
    'Lightning Component Development',
    'Apex & Visualforce Development',
    'Salesforce Integration',
    'Custom App Development',
    'Salesforce Migration',
    'Process Automation',
    'Salesforce Training'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Salesforce Solutions</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Complete Salesforce development and implementation services
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Salesforce Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesforcePage;