import React from 'react';
import { Metadata } from 'next';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Microservices, API Gateway, Security, Integration, DevOps | F24Tech',
  description:
    'Enterprise-grade applications with robust security, scalability, and integration capabilities. Solutions include microservices, API gateways, DevOps, and enterprise integration by F24Tech India.',
  keywords:
    'enterprise solutions, microservices, api gateway, security, integration, devops, scalable applications, enterprise apps, cloud integration',
};

const EnterpriseSolutionsPage = () => {
  const technologies = ['Microservices', 'API Gateway', 'Security', 'Integration', 'DevOps', 'Enterprise Architecture', 'CI/CD', 'Scalable Systems'];

  const services = [
    'Enterprise Application Architecture',
    'Microservices Design & Development',
    'API Gateway & Management',
    'Security & Compliance Solutions',
    'DevOps & CI/CD Implementation',
    'System Integration & Data Flow',
    'Scalability & Performance Optimization',
    'Maintenance & Support for Enterprise Systems',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Enterprise-grade applications with robust security, scalability, and integration capabilities.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-green-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Enterprise Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
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

export default EnterpriseSolutionsPage;
