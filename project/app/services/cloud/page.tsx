// app/services/cloud/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Cloud, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Services - AWS, Azure, Google Cloud Solutions | F24Tech India',
  description: 'Cloud migration, deployment, and management services for AWS, Azure, and Google Cloud Platform by F24Tech.',
  keywords: 'cloud services, aws, azure, google cloud, cloud migration, devops, kubernetes, docker',
};

const CloudPage = () => {
  const technologies = ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD'];
  const services = [
    'Cloud Migration Services',
    'AWS Solutions Architecture',
    'Azure Cloud Development',
    'Google Cloud Platform',
    'DevOps Implementation',
    'Container Orchestration',
    'Cloud Security',
    'Performance Optimization'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Cloud className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Services</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Scalable cloud solutions on AWS, Azure, and Google Cloud Platform
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Explore Cloud Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Cloud Technologies</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-indigo-50 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Cloud Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudPage;