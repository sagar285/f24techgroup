// app/privacy-policy/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | F24Tech - Data Protection & Privacy',
  description: 'F24Tech privacy policy. Learn how we collect, use, and protect your personal information and data.',
  keywords: 'privacy policy, data protection, gdpr, privacy, f24tech',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Shield className="w-16 h-16 mb-6 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="text-xl text-gray-300 text-center">
            Last Updated: January 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 mb-4">
              At F24Tech ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-start mb-4">
              <Database className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and job title</li>
              <li>Project requirements and specifications</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Information</h3>
            <p className="text-gray-700 mb-4">We automatically collect certain information when you visit our website:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="flex items-start mb-4">
              <Eye className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your requests and quotes</li>
              <li>To communicate with you about projects and services</li>
              <li>To improve our website and user experience</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To detect and prevent fraud or security issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="flex items-start mb-4">
              <Lock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
              <li><strong>Business Partners:</strong> When necessary for project collaboration</li>
              <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Object:</strong> Object to processing of your data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies Policy</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may limit some website functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-start mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-800"><strong>F24Tech</strong></p>
              <p className="text-gray-700">Email: privacy@f24tech.com</p>
              <p className="text-gray-700">Website: <Link href="/contact" className="text-blue-600 hover:underline">Contact Form</Link></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;