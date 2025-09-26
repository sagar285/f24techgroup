import React from 'react';
import { Metadata } from 'next';
import { Code2, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JavaScript Development Services - React, Angular, Vue.js, Node.js | F24Tech',
  description: 'Expert JavaScript development using React.js, Angular, Vue.js, Node.js, and modern frameworks. Full-stack JavaScript solutions by F24Tech India.',
  keywords: 'javascript development, react js, angular, vue js, node js, typescript, next js, javascript consulting',
};

const JavaScriptPage = () => {
  const technologies = ['React.js', 'Angular', 'Vue.js', 'Node.js', 'Next.js', 'TypeScript', 'Express.js', 'Nest.js'];
  const services = [
    'Single Page Applications (SPA)',
    'Progressive Web Apps (PWA)',
    'React.js Development',
    'Angular Applications',
    'Vue.js Projects',
    'Node.js Backend Development',
    'Full-Stack JavaScript Solutions',
    'JavaScript Performance Optimization'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Code2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">JavaScript Development</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Modern JavaScript applications with React, Angular, Vue, and Node.js
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-yellow-50 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our JavaScript Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JavaScriptPage;