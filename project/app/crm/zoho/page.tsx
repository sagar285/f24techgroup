// app/crm/zoho/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Database, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zoho CRM Implementation & Customization Services | F24Tech India',
  description: 'Expert Zoho CRM implementation, customization, integration, and consulting services. Maximize your Zoho investment with F24Tech.',
  keywords: 'zoho crm, zoho implementation, zoho customization, zoho integration, zoho consulting, crm solutions',
};

const ZohoCRMPage = () => {
  const services = [
    'Zoho CRM Setup & Configuration',
    'Custom Module Development',
    'Workflow Automation',
    'Third-party Integration',
    'Data Migration Services',
    'Zoho Analytics Setup',
    'Training & Support',
    'Custom Zoho Functions'
  ];

  const features = [
    'Lead Management', 'Sales Pipeline', 'Contact Management', 'Email Integration',
    'Reports & Analytics', 'Mobile CRM', 'API Integration', 'Custom Fields'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Database className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Zoho CRM Solutions</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Complete Zoho CRM implementation, customization, and integration services
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Get Zoho Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Zoho CRM Features</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="bg-orange-50 rounded-lg p-4 text-center">
                <Zap className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Zoho Services</h2>
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

      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Business with Zoho CRM</h2>
          <p className="text-xl mb-8">Let us help you maximize your Zoho CRM investment</p>
          <Link href="/contact" className="inline-flex items-center bg-white text-orange-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ZohoCRMPage;