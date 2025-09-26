// app/crm/dynamics/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 CRM Implementation | F24Tech',
  description: 'Professional Microsoft Dynamics 365 implementation, customization, and integration services.',
  keywords: 'microsoft dynamics 365, dynamics crm, dynamics implementation, dynamics customization',
};

const DynamicsPage = () => {
  const services = [
    'Dynamics 365 Implementation',
    'Custom Entity Development',
    'Power Apps Development',
    'Power Automate Workflows',
    'Azure Integration',
    'Business Process Flows',
    'Data Migration',
    'Dynamics Training'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Microsoft Dynamics 365</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Enterprise CRM solutions with Microsoft Dynamics 365
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-full font-semibold">
              Get Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Dynamics 365 Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicsPage;