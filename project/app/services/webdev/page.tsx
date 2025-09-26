import React from 'react';
import { Metadata } from 'next';
import { Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development Services - Django, Laravel, Next.js, TypeScript, PostgreSQL | F24Tech',
  description:
    'Full-stack web development with Python Django, Flask, PHP Laravel, Symfony, and modern front-end technologies like Next.js and TypeScript. Scalable and reliable solutions with PostgreSQL.',
  keywords:
    'web development, python django, flask, php laravel, symfony, next js, typescript, postgresql, full stack development, backend api, frontend development',
};

const WebDevelopmentPage = () => {
  const technologies = [
    'Python Django',
    'Flask',
    'PHP Laravel',
    'Symfony',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'REST & GraphQL APIs',
  ];

  const services = [
    'Custom Web Application Development',
    'Full-Stack Development with Django & Laravel',
    'Next.js & TypeScript Frontend Development',
    'RESTful & GraphQL API Development',
    'Database Design & Optimization with PostgreSQL',
    'Enterprise Web Portals & Dashboards',
    'CMS & E-commerce Solutions',
    'Web Application Performance Optimization',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Development
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Full-stack web development with Python Django, Flask, PHP Laravel,
              Symfony, and modern front-end technologies.
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
            Our Web Development Services
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

export default WebDevelopmentPage;
