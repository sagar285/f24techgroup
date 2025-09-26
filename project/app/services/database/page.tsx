import React from 'react';
import { Metadata } from 'next';
import { Database, Code2, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Database Solutions - MySQL, PostgreSQL, MongoDB, Oracle, Redis | F24Tech',
  description:
    'Database design, optimization, and management with MySQL, PostgreSQL, MongoDB, Oracle, and Redis. Scalable and high-performance database solutions by F24Tech India.',
  keywords:
    'database solutions, mysql, postgresql, mongodb, oracle, redis, database management, database optimization, data modeling, backend solutions',
};

const DatabaseSolutionsPage = () => {
  const technologies = [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Oracle',
    'Redis',
    'Database Design',
    'Query Optimization',
    'Data Security',
  ];

  const services = [
    'Database Design & Modeling',
    'Performance Optimization & Indexing',
    'Database Migration & Upgrades',
    'Replication & Backup Solutions',
    'High Availability & Clustering',
    'NoSQL & SQL Database Solutions',
    'Monitoring & Maintenance',
    'Enterprise Data Management',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Database className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Database Solutions
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Database design, optimization, and management with MySQL, PostgreSQL, MongoDB, Oracle, and Redis.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
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
                className="bg-purple-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
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
            Our Database Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <CheckCircle className="w-6 h-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabaseSolutionsPage;
