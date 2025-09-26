'use client';

import { useState } from 'react';
import { Shield } from 'lucide-react';

const dynamicsModules = [
  {
    title: 'Microsoft Dynamics 365 Setup & Configuration',
    details: [
      'Account & Environment Setup: Configure Dynamics 365 for your business structure.',
      'Custom Entities & Fields: Tailor Dynamics to your business data and processes.',
      'Role & Permission Management: Define users, roles, and access levels.',
      'Localization & Compliance: Tax codes, currencies, and regional compliance.',
      'Pipeline & Workflow Configuration: Customize sales, service, and operations processes.',
    ],
  },
  {
    title: 'Automation & Workflows',
    details: [
      'Power Automate Workflows: Automate repetitive tasks and approvals.',
      'Custom Business Rules: Validation, notifications, and automated processes.',
      'Process Optimization: Streamline operations and reduce manual intervention.',
      'AI & Insights: Leverage AI-driven recommendations and analytics.',
    ],
  },
  {
    title: 'Integration & Third-party Connectivity',
    details: [
      'ERP & Accounting Integration: Sync with finance and accounting systems.',
      'Third-party App Integrations: Connect with Office 365, SharePoint, Power BI, and other SaaS apps.',
      'API & Custom Integrations: Build custom connectors and integrations.',
      'Marketing & Communication Tools: Integrate with email, social, and marketing platforms.',
    ],
  },
  {
    title: 'Analytics & Reporting',
    details: [
      'Custom Dashboards: Visualize KPIs and operational metrics.',
      'Advanced Reports: Generate finance, sales, and service insights.',
      'Predictive Analytics: Forecast trends and customer behavior.',
      'Business Intelligence Integration: Connect with Power BI or Tableau for deeper insights.',
    ],
  },
  {
    title: 'Support, Maintenance & Optimization',
    details: [
      'Ongoing Support: Bug fixes, updates, and system enhancements.',
      'Performance Optimization: Database tuning and workflow improvements.',
      'User Training & Documentation: Ensure full adoption by teams.',
      'Security & Compliance: Role-based access, encryption, and GDPR/industry compliance.',
    ],
  },
];

export default function DynamicsIntegration() {
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Microsoft Dynamics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            F24Tech provides Microsoft Dynamics 365 implementation, customization, and integration services. Expand each module to see detailed features.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {dynamicsModules.map((module, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-blue-400 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
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
