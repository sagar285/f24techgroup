'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Github,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                F24Tech
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              F24Tech is a leading technology solutions provider specializing in Java, JavaScript, Python, PHP development, and comprehensive CRM solutions including Zoho, NetSuite, and custom development.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/java" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Java Development
                </Link>
              </li>
              <li>
                <Link href="/javaScript" className="text-gray-300 hover:text-blue-400 transition-colors">
                  JavaScript Solutions
                </Link>
              </li>
              <li>
                <Link href="python" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Python Development
                </Link>
              </li>
              <li>
                <Link href="/php" className="text-gray-300 hover:text-blue-400 transition-colors">
                  PHP Development
                </Link>
              </li>
              <li>
                <Link href="mobile" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/cloud" className="text-gray-300 hover:text-blue-400 transition-colors">
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
                  <p className="text-gray-300">+91 (XXX) XXX-XXXX</p>
                  <p className="text-gray-300">+1 (XXX) XXX-XXXX</p>
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
                  <p className="text-gray-300">India</p>
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
            
            <div className="flex flex-wrap justify-start md:justify-end gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* SEO Keywords */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs">
              <strong>Keywords:</strong> F24Tech, F24Tech Softwares, F24Tech India, F24Tech Group, Java Spring Boot, 
              React Angular Vue, Python Django Flask, PHP Laravel, Zoho CRM, NetSuite, Salesforce, Custom CRM, 
              Mobile App Development, Cloud Solutions, Enterprise Software Development, API Development, 
              Database Design, Full Stack Development, CRM Implementation, Business Process Automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;