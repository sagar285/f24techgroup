// components/Footer.tsx - Updated with legal links section
'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Github, Mail, Phone, MapPin, ExternalLink, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">F24Tech</h3>
            <p className="text-gray-300 mb-6">
              Leading provider of technology solutions specializing in Java, JavaScript, Python, PHP development, 
              and comprehensive CRM implementations including Zoho and NetSuite.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/94810089/admin/dashboard/" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/f24techindia" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/people/f24techindia/" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/f24techindia/" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/java" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Java Development
                </Link>
              </li>
              <li>
                <Link href="/services/javascript" className="text-gray-300 hover:text-blue-400 transition-colors">
                  JavaScript Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/python" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Python Development
                </Link>
              </li>
              <li>
                <Link href="/services/php" className="text-gray-300 hover:text-blue-400 transition-colors">
                  PHP Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* CRM Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-6">CRM Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/crm/zoho" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Zoho CRM Implementation
                </Link>
              </li>
              <li>
                <Link href="/crm/netsuite" className="text-gray-300 hover:text-blue-400 transition-colors">
                  NetSuite Consulting
                </Link>
              </li>
              <li>
                <Link href="/crm/salesforce" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Salesforce Development
                </Link>
              </li>
              <li>
                <Link href="/crm/hubspot" className="text-gray-300 hover:text-blue-400 transition-colors">
                  HubSpot Integration
                </Link>
              </li>
              <li>
                <Link href="/crm/custom" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Custom CRM Development
                </Link>
              </li>
              <li>
                <Link href="/crm/dynamics" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Microsoft Dynamics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">+91 (895) 077-3419</p>
                  <p className="text-gray-300">+84 (398) 618-489</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">info@f24tech.com</p>
                  <p className="text-gray-300">sales@f24tech.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Indore, India</p>
                  <p className="text-gray-300">Serving Worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link 
                href="/get-quote"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
              >
                Get Free Quote
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-400 text-sm">
                © {currentYear} F24Tech. All rights reserved. F24Tech Softwares, F24Tech India, F24Tech Group.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Specializing in Java frameworks, JavaScript, Python, PHP, CRM solutions, Zoho, NetSuite, custom software development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link href="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Blog
              </Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap-page" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;