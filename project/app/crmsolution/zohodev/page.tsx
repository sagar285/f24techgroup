'use client';

import { useState } from 'react';

const zohoModules = [
  {
    title: 'Zoho CRM Setup & Configuration',
    details: [
      'Account & Module Setup: Configure modules like Leads, Contacts, Accounts, Deals, and custom modules.',
      'Custom Fields & Layouts: Create fields, sections, and page layouts tailored to your business processes.',
      'Role & Permission Management: Set up profiles, roles, and data sharing rules.',
      'Pipeline & Stage Configuration: Customize sales pipelines, stages, and probability mappings.',
      'Localization & Compliance: Tax settings, currencies, and regional compliance.',
    ],
  },
  {
    title: 'Automation & Workflows',
    details: [
      'Custom Workflows: Automate lead assignments, follow-ups, approvals, and notifications.',
      'Blueprints & Process Automation: Design multi-step processes with conditional actions.',
      'Macros & Tasks Automation: Reduce manual repetitive tasks for sales and support teams.',
      'Email Templates & Automation: Predefined templates with automated sending rules.',
    ],
  },
  {
    title: 'Integration & Third-party Connectivity',
    details: [
      'Third-party App Integrations: Connect with tools like Google Workspace, Office 365, Slack, Shopify, QuickBooks, and payment gateways.',
      'API & Custom Integrations: Build custom connections using Zoho APIs.',
      'Marketing & Communication Tools: Integrate with Zoho MarketingHub, Campaigns, Social, or external email tools.',
      'ERP & Accounting Integration: Sync with Zoho Books, Zoho Inventory, or other ERP systems.',
    ],
  },
  {
    title: 'Data Management & Migration',
    details: [
      'Data Import & Cleanup: Migrate contacts, leads, deals, and accounts from other CRMs.',
      'De-duplication & Validation: Remove duplicate records and maintain data quality.',
      'Custom Reports & Dashboards: Real-time dashboards, KPIs, and role-specific reporting.',
    ],
  },
  {
    title: 'Training, Support & Optimization',
    details: [
      'User Training & Onboarding: Personalized training for admins, sales, marketing, and support teams.',
      'Ongoing Support & Troubleshooting: Assistance for updates, issues, or workflow adjustments.',
      'Process Optimization: Review and refine CRM workflows for efficiency and scalability.',
      'Performance Analytics: Track adoption, engagement, and CRM effectiveness.',
    ],
  },
];

export default function ZohoDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Zoho{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CRM Development
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            F24Tech provides end-to-end Zoho CRM implementation, customization,
            and integration services. Expand each module to see detailed features.
          </p>
        </div>

        {/* Zoho Modules */}
        <div className="space-y-6">
          {zohoModules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              >
                {module.title}
                <svg
                  className={`w-5 h-5 ml-2 text-gray-500 transition-transform ${openIndex === index ? 'rotate-90 text-blue-600' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {openIndex === index && (
                <ul className="mt-4 space-y-2 pl-4 text-gray-600 text-sm list-disc">
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
