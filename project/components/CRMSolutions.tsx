'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { Database, Users, BarChart3, Settings, Zap, Shield } from 'lucide-react';

const crmSolutions = [
  {
    title: 'Zoho Implementation',
    description: 'Complete Zoho CRM setup, customization, and integration services. We help businesses maximize their Zoho investment with tailored configurations.',
    features: ['Custom Fields & Workflows', 'Third-party Integrations', 'Data Migration', 'Training & Support'],
    icon: <Database className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    link: '/crm/zoho' //
  },
  {
    title: 'NetSuite Consulting',
    description: 'Expert NetSuite implementation, customization, and optimization services for enterprise-level businesses requiring comprehensive ERP solutions.',
    features: ['ERP Implementation', 'Custom Scripts', 'SuiteScript Development', 'Business Process Optimization'],
    icon: <BarChart3 className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500',
    link: '/crm/netsuite' //

  },
  {
    title: 'Custom CRM Development',
    description: 'Bespoke CRM solutions built from scratch using modern technologies to meet unique business requirements and workflows.',
    features: ['Custom Architecture', 'API Development', 'Mobile CRM Apps', 'Advanced Analytics'],
    icon: <Settings className="w-8 h-8" />,
    color: 'from-green-500 to-teal-500',
    link: '/crm/custom' //

  },
  {
    title: 'Salesforce Solutions',
    description: 'Salesforce implementation, customization, and development services including Lightning components and Apex development.',
    features: ['Lightning Development', 'Apex & Visualforce', 'Integration Services', 'Custom Apps'],
    icon: <Zap className="w-8 h-8" />,
    color: 'from-blue-600 to-indigo-600',
    link: '/crm/salesforce' //

  },
  {
    title: 'HubSpot Integration',
    description: 'HubSpot setup, customization, and integration with existing business systems for comprehensive inbound marketing and sales automation.',
    features: ['Marketing Automation', 'Sales Pipeline Setup', 'Custom Properties', 'Reporting Dashboards'],
    icon: <Users className="w-8 h-8" />,
    color: 'from-orange-600 to-pink-500',
    link: '/crm/hubspot' //

  },
  {
    title: 'Microsoft Dynamics',
    description: 'Microsoft Dynamics 365 implementation and customization for businesses looking for integrated business applications.',
    features: ['D365 Setup', 'Power Platform', 'Custom Entities', 'Business Intelligence'],
    icon: <Shield className="w-8 h-8" />,
    color: 'from-purple-600 to-blue-600',
    link: '/crm/dynamics' //
  }
];

const CRMSolutions = () => {
    const router = useRouter(); // initialize router

  return (
    <section id="crm-solutions" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            CRM <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            F24Tech specializes in CRM implementation, customization, and development. From Zoho and NetSuite to custom CRM solutions, 
            we help businesses streamline their customer relationships and boost productivity.
          </p>
        </div>

        {/* CRM Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {crmSolutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} mb-6`}>
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <div className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className="text-blue-400 font-semibold hover:text-white transition-colors group"
                onClick={() => router.push(solution.link)} // Redirect on click
              >
                Learn More
                <svg className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CRM Comparison */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose F24Tech for CRM Solutions?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">100+</span>
              </div>
              <h4 className="font-semibold mb-2">CRM Implementations</h4>
              <p className="text-gray-300 text-sm">Successfully deployed CRM solutions across industries</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h4 className="font-semibold mb-2">CRM Platforms</h4>
              <p className="text-gray-300 text-sm">Expertise in all major CRM platforms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-gray-300 text-sm">Round-the-clock CRM support and maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">99%</span>
              </div>
              <h4 className="font-semibold mb-2">Success Rate</h4>
              <p className="text-gray-300 text-sm">High success rate in CRM implementations</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="/crm-consultation"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Free CRM Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CRMSolutions;