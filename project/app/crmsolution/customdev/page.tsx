'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';

const customCRMSections = [
  {
    title: 'Custom CRM Architecture & Design',
    details: [
      'Requirement Analysis & Consultation: Understand your business workflows, processes, and data needs.',
      'Custom Data Models: Design objects, relationships, and schemas tailored to your business.',
      'Scalable Architecture: Build CRMs that grow with your business and handle high volumes of data.',
      'UI/UX Design: Intuitive and user-friendly interfaces for web and mobile applications.',
    ],
  },
  {
    title: 'Development & Integration',
    details: [
      'API Development & Integration: Connect your CRM with third-party tools like ERP, marketing platforms, payment gateways, or internal apps.',
      'Custom Modules & Features: Build functionalities like automated lead scoring, complex approval workflows, or AI-driven recommendations.',
      'Third-Party System Sync: Real-time synchronization with external databases or SaaS platforms.',
      'Workflow Automation: Automate repetitive tasks, notifications, approvals, and reporting.',
    ],
  },
  {
    title: 'Mobile CRM Applications',
    details: [
      'Cross-Platform Mobile Apps: Android and iOS apps with offline capabilities.',
      'Push Notifications & Alerts: Reminders, updates, and real-time notifications for sales or support teams.',
      'Mobile Analytics: Track key KPIs and customer interactions on the go.',
      'Geo-Location & Field Management: Tools for field sales, deliveries, and customer visits.',
    ],
  },
  {
    title: 'Advanced Analytics & Reporting',
    details: [
      'Custom Dashboards: Role-specific dashboards for executives, sales, marketing, and support teams.',
      'Predictive Analytics: Forecast trends, customer behavior, and sales opportunities.',
      'Custom Reports: Build ad-hoc reports for leads, opportunities, customer journeys, and revenue.',
      'Business Intelligence Integration: Connect with BI tools like Power BI or Tableau for deeper insights.',
    ],
  },
  {
    title: 'Support, Maintenance & Optimization',
    details: [
      'Ongoing Support: Bug fixes, updates, and enhancements.',
      'Performance Optimization: Database tuning, server optimization, and faster workflows.',
      'User Training & Documentation: Ensure teams fully adopt and utilize the CRM.',
      'Security & Compliance: Implement role-based access, encryption, and GDPR/industry compliance.',
    ],
  },
];

export default function CustomCRMDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Custom CRM Development
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We build bespoke CRM solutions tailored to your business needs, including mobile apps, advanced analytics, and workflow automation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {customCRMSections.map((section, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-green-400 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>{section.title}</span>
                </div>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform ${openIndex === index ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {openIndex === index && (
                <ul className="mt-4 space-y-2 pl-6 text-gray-200 text-sm list-disc">
                  {section.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
