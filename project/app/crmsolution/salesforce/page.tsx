'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

const salesforceModules = [
  {
    title: 'Salesforce Implementation & Customization',
    details: [
      'Lightning Experience Setup: Configure Salesforce Lightning for your org.',
      'Custom Objects & Fields: Tailor Salesforce to match your business processes.',
      'Profiles, Roles & Permissions: Manage user access and security.',
      'Page Layouts & Record Types: Customize forms and UI for different teams.',
    ],
  },
  {
    title: 'Apex & Visualforce Development',
    details: [
      'Custom Apex Classes & Triggers: Automate complex business logic.',
      'Visualforce Pages: Build custom UI components.',
      'Batch & Scheduled Jobs: Automate recurring processes.',
      'Testing & Deployment: Ensure quality code and smooth deployment.',
    ],
  },
  {
    title: 'Workflow Automation & Process Builder',
    details: [
      'Workflow Rules & Approvals: Automate approvals and notifications.',
      'Process Builder Flows: Create multi-step automated processes.',
      'Email Alerts & Tasks: Automate notifications and follow-ups.',
      'Integration with Third-party Tools: Connect Salesforce with other systems.',
    ],
  },
  {
    title: 'Reports, Dashboards & Analytics',
    details: [
      'Custom Reports: Track sales, service, and operational metrics.',
      'Dashboards & KPIs: Real-time visualization for executives and managers.',
      'Forecasting & Pipeline Analysis: Predict sales performance.',
      'Business Intelligence Integration: Connect with Tableau, Power BI, etc.',
    ],
  },
  {
    title: 'Support, Training & Optimization',
    details: [
      'User Training & Onboarding: Empower teams to use Salesforce effectively.',
      'Ongoing Support: Maintenance, updates, and troubleshooting.',
      'Performance Optimization: Improve speed, efficiency, and usability.',
      'Security & Compliance: Role-based access, data protection, and compliance.',
    ],
  },
];

export default function SalesforceSolutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Salesforce Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            F24Tech provides Salesforce CRM implementation, customization, and optimization services. Expand each section to see detailed features.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {salesforceModules.map((module, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-blue-400 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>{module.title}</span>
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
                  {module.details.map((detail, i) => (
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
