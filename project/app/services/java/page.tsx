import React from 'react';
import { Metadata } from 'next';
import { Code2, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Java Development Services - Spring Boot, Hibernate, JSF | F24Tech India',
  description: 'Expert Java development services using Spring Boot, Hibernate, JSF, and other Java frameworks. Custom enterprise Java applications by F24Tech India.',
  keywords: 'java development, spring boot, hibernate, jsf, java frameworks, enterprise java, java consulting, f24tech java',
};

const JavaDevelopmentPage = () => {
  const technologies = [
    'Java Spring Boot', 'Hibernate ORM', 'JSF (JavaServer Faces)', 
    'Spring MVC', 'Spring Security', 'JPA', 'Maven', 'Gradle'
  ];

  const services = [
    'Custom Java Application Development',
    'Spring Boot Microservices',
    'Enterprise Java Solutions',
    'Java API Development',
    'Legacy Java Modernization',
    'Java Performance Optimization',
    'Java Security Implementation',
    'Third-party Integration'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Code2 className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Java Development Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade Java applications built with modern frameworks and best practices
            </p>
            <Link 
              href="/get-quote" 
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
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
          <h2 className="text-3xl font-bold text-center mb-12">Java Technologies We Master</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Java Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Java Application?</h2>
          <p className="text-xl mb-8">Let's discuss your Java development needs</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JavaDevelopmentPage;