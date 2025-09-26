// app/terms-of-service/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { FileText, AlertCircle, Shield, Scale } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | F24Tech - Service Agreement',
  description: 'F24Tech terms of service and conditions for using our software development and technology services.',
  keywords: 'terms of service, terms and conditions, service agreement, f24tech',
};

const TermsOfServicePage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FileText className="w-16 h-16 mb-6 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Terms of Service</h1>
          <p className="text-xl text-gray-300 text-center">
            Last Updated: January 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using F24Tech's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-start mb-4">
              <Scale className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">F24Tech provides the following services:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Custom software development using Java, JavaScript, Python, and PHP</li>
              <li>CRM implementation and customization (Zoho, NetSuite, Salesforce)</li>
              <li>Mobile application development</li>
              <li>Cloud services and deployment</li>
              <li>Technology consulting and support</li>
            </ul>
            <p className="text-gray-700">
              Service specifications, timelines, and deliverables will be defined in individual project agreements or statements of work.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              Unless otherwise specified in a project agreement:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All custom software and deliverables created specifically for you will be transferred to you upon full payment</li>
              <li>F24Tech retains ownership of pre-existing materials, frameworks, and tools</li>
              <li>You grant us permission to showcase your project in our portfolio (unless confidentiality is required)</li>
              <li>Website content, logos, and branding remain the property of F24Tech</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Initial deposit required before project commencement</li>
              <li>Milestone-based payments for larger projects</li>
              <li>Final payment due upon project completion</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are in USD unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="flex items-start mb-4">
              <AlertCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, F24Tech shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages arising from third-party services or content</li>
              <li>Service interruptions or technical issues beyond our control</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-start mb-4">
              <Shield className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              We provide our services "as is" without warranties of any kind. We warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Services will be performed with reasonable skill and care</li>
              <li>Deliverables will substantially conform to agreed specifications</li>
              <li>We have the right to provide the contracted services</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not warrant that services will be uninterrupted, error-free, or meet all your requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. Confidential information includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Business strategies and plans</li>
              <li>Technical specifications and source code</li>
              <li>Client data and user information</li>
              <li>Financial information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate services under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Breach of terms by the other party</li>
              <li>Mutual written agreement</li>
              <li>As specified in the project agreement</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Upon termination, you will pay for all services rendered up to the termination date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these terms will be resolved through:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation, if negotiation fails</li>
              <li>Binding arbitration or legal proceedings as a last resort</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-800"><strong>F24Tech</strong></p>
              <p className="text-gray-700">Email: legal@f24tech.com</p>
              <p className="text-gray-700">Website: <Link href="/contact" className="text-purple-600 hover:underline">Contact Form</Link></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;