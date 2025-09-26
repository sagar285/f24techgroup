'use client';

import { useState } from 'react';
import { BarChart3 } from 'lucide-react';

const netsuiteModules = [
  {
    title: 'Implementation & Setup',
    details: [
      'Account & Environment Setup: Configure NetSuite instance for your business structure.',
      'Data Migration: Import existing ERP, CRM, financial, and operational data.',
      'Role & Permission Management: Define users, roles, and access controls.',
      'Multi-Subsidiary Setup: For companies operating across multiple locations or legal entities.',
      'Localization & Compliance: Tax codes, local accounting standards, and regulatory compliance.',
      'Chart of Accounts & Financial Setup: Configure general ledger, accounting periods, and reporting structures.',
    ],
  },
  {
    title: 'Customization & Development',
    details: [
      'Custom Scripts & SuiteScript Development: Automate workflows, validations, and custom logic.',
      'SuiteFlow Automation: Create workflows for approvals, task routing, and process automation.',
      'SuiteBuilder Customization: Customize forms, fields, records, and dashboards.',
      'Saved Searches & Reports: Build complex searches for operational insights.',
      'Custom Dashboards & KPIs: Role-specific analytics for executives, managers, and teams.',
      'Integration with Other Systems: Connect with Salesforce, Shopify, payment gateways, and third-party tools via RESTlets, SOAP, or middleware.',
    ],
  },
  {
    title: 'Business Process Optimization',
    details: [
      'ERP Process Analysis: Identify inefficiencies in finance, inventory, procurement, and HR.',
      'Best Practice Implementation: Align NetSuite workflows with industry standards.',
      'Automated Approvals & Alerts: Reduce manual intervention and errors.',
      'Inventory & Supply Chain Optimization: Streamline procurement, fulfillment, and stock management.',
      'Financial Planning & Budgeting: Automated forecasting, expense tracking, and revenue recognition.',
      'Project & Resource Management: Optimize task allocation, project tracking, and time management.',
    ],
  },
  {
    title: 'Analytics & Reporting',
    details: [
      'Custom Reports: Financial, operational, and executive-level reporting.',
      'Dashboard Configuration: Real-time visibility into KPIs and metrics.',
      'Revenue & Cost Analysis: Track profitability, margins, and business performance.',
      'Forecasting & Trend Analysis: Predict business outcomes and operational bottlenecks.',
      'Audit & Compliance Reports: Support internal and external audits.',
    ],
  },
];

export default function NetSuiteConsulting() {
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
            NetSuite <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Consulting</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            F24Tech provides expert NetSuite ERP consulting, implementation, and customization services. Expand each module to see detailed features.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {netsuiteModules.map((module, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-blue-400 hover:text-white transition-colors"
              >
                {module.title}
                <BarChart3
                  className={`w-5 h-5 ml-2 transition-transform ${openIndex === index ? 'rotate-90' : ''}`}
                />
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
