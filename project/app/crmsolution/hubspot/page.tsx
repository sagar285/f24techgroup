'use client';

import { useState } from 'react';
import { Users } from 'lucide-react';

const hubspotModules = [
  {
    title: 'HubSpot CRM Setup & Configuration',
    details: [
      'Account & Module Setup: Configure Leads, Contacts, Companies, Deals, and custom modules.',
      'Custom Fields & Layouts: Tailor properties and page layouts to business needs.',
      'Role & Permission Management: Set up teams, profiles, and access levels.',
      'Pipeline & Stage Configuration: Customize sales pipelines and deal stages.',
      'Localization & Compliance: Tax settings, currencies, and regional compliance.',
    ],
  },
  {
    title: 'Automation & Workflows',
    details: [
      'Custom Workflows: Automate lead assignments, follow-ups, approvals, and notifications.',
      'Blueprints & Process Automation: Multi-step processes with conditional actions.',
      'Macros & Tasks Automation: Reduce manual repetitive tasks.',
      'Email Templates & Automation: Predefined templates with automated sending rules.',
    ],
  },
  {
    title: 'Integration & Third-party Connectivity',
    details: [
      'Third-party App Integrations: Connect with Google Workspace, Office 365, Slack, Shopify, QuickBooks, and payment gateways.',
      'API & Custom Integrations: Build custom connections using HubSpot APIs.',
      'Marketing & Communication Tools: Integrate with HubSpot Marketing Hub, Campaigns, or external email tools.',
      'ERP & Accounting Integration: Sync with other business systems.',
    ],
  },
  {
    title: 'Data Management & Migration',
    details: [
      'Data Import & Cleanup: Migrate contacts, deals, and accounts from other CRMs.',
      'De-duplication & Validation: Maintain clean, accurate data.',
      'Custom Reports & Dashboards: Real-time dashboards, KPIs, and reporting.',
    ],
  },
  {
    title: 'Training, Support & Optimization',
    details: [
      'User Training & Onboarding: Personalized training for teams.',
      'Ongoing Support & Troubleshooting: Assistance for updates and workflow adjustments.',
      'Process Optimization: Review and refine CRM workflows for efficiency.',
      'Performance Analytics: Track adoption, engagement, and CRM effectiveness.',
    ],
  },
];

export default function HubSpotIntegration() {
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
              HubSpot Integration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            F24Tech provides HubSpot CRM implementation, customization, and integration services. Expand each section to see detailed features.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {hubspotModules.map((module, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-blue-400 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
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
