// app/crm/netsuite/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { BarChart3, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NetSuite ERP Implementation & Consulting Services | F24Tech India',
  description: 'Professional NetSuite ERP implementation, SuiteScript development, and customization services by certified NetSuite consultants.',
  keywords: 'netsuite implementation, netsuite consulting, suitescript, netsuite customization, erp solutions',
};

const NetSuitePage = () => {
  const services = [
    'NetSuite ERP Implementation',
    'SuiteScript Development',
    'SuiteFlow Customization',
    'NetSuite Integration',
    'Custom Workflows',
    'Report & Dashboard Creation',
    'Data Migration',
    'NetSuite Training'
  ];

  const modules = [
    'Financial Management', 'CRM', 'E-commerce', 'Inventory Management',
    'Order Management', 'Supply Chain', 'Warehouse Management', 'Professional Services'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NetSuite ERP Solutions</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Enterprise-grade NetSuite implementation and customization services
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Get NetSuite Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">NetSuite Modules</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {modules.map((module, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-4 text-center">
                <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our NetSuite Services</h2>
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

export default NetSuitePage;