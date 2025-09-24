'use client';

import React from 'react';
import { Code2, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Custom Software Development',
    description: 'Expert development using Java frameworks like Spring Boot, Hibernate, JSF, and modern JavaScript frameworks including React, Angular, and Vue.js.',
    technologies: ['Java Spring Boot', 'React.js', 'Angular', 'Vue.js', 'Node.js'],
    link: '/services/custom-development'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Full-stack web development with Python Django, Flask, PHP Laravel, Symfony, and modern front-end technologies.',
    technologies: ['Python Django', 'PHP Laravel', 'Next.js', 'TypeScript', 'PostgreSQL'],
    link: '/services/web-development'
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications using React Native, Flutter, and native iOS/Android development.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    link: '/services/mobile-development'
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Database Solutions',
    description: 'Database design, optimization, and management with MySQL, PostgreSQL, MongoDB, and Oracle database systems.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Redis'],
    link: '/services/database-solutions'
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Services',
    description: 'Cloud migration, deployment, and management on AWS, Azure, Google Cloud, and other cloud platforms.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    link: '/services/cloud-services'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Enterprise Solutions',
    description: 'Enterprise-grade applications with robust security, scalability, and integration capabilities.',
    technologies: ['Microservices', 'API Gateway', 'Security', 'Integration', 'DevOps'],
    link: '/services/enterprise-solutions'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            F24Tech provides comprehensive technology solutions using cutting-edge frameworks and technologies 
            to deliver exceptional results for businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={service.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors group"
              >
                Learn More
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="/get-quote"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Custom Quote for Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;