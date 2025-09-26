// app/sitemap-page/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Map, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | F24Tech - Website Navigation',
  description: 'Complete sitemap of F24Tech website. Find all our pages, services, and resources.',
  keywords: 'sitemap, website map, navigation, f24tech pages',
};

const SitemapPage = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Get Quote', href: '/get-quote' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', href: '/services' },
        { name: 'Java Development', href: '/services/java' },
        { name: 'JavaScript Development', href: '/services/javascript' },
        { name: 'Python Development', href: '/services/python' },
        { name: 'PHP Development', href: '/services/php' },
        { name: 'Mobile Development', href: '/services/mobile' },
        { name: 'Cloud Services', href: '/services/cloud' },
      ]
    },
    {
      title: 'CRM Solutions',
      links: [
        { name: 'CRM Solutions Overview', href: '/crm-solutions' },
        { name: 'Zoho CRM', href: '/crm/zoho' },
        { name: 'NetSuite', href: '/crm/netsuite' },
        { name: 'Salesforce', href: '/crm/salesforce' },
        { name: 'HubSpot', href: '/crm/hubspot' },
        { name: 'Custom CRM', href: '/crm/custom' },
        { name: 'Microsoft Dynamics', href: '/crm/dynamics' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Sitemap', href: '/sitemap-page' },
      ]
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Map className="w-16 h-16 mb-6 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sitemap</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Navigate through all pages and resources available on F24Tech
          </p>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 inline-block">
            <p className="text-gray-700 mb-4">
              Looking for the XML sitemap for search engines?
            </p>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View XML Sitemap
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;