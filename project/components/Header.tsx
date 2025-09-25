'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              F24Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link href="/java" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Java Development
                  </Link>
                  <Link href="/javaScript" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    JavaScript Solutions
                  </Link>
                  <Link href="/python" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Python Development
                  </Link>
                  <Link href="/php" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    PHP Development
                  </Link>
                  <Link href="/mobile" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Mobile Apps
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/crm-solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
              CRM Solutions
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/get-quote" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700">Home</Link>
            <Link href="/services" className="block py-2 text-gray-700">Services</Link>
            <Link href="/crm-solutions" className="block py-2 text-gray-700">CRM Solutions</Link>
            <Link href="/about" className="block py-2 text-gray-700">About</Link>
            <Link href="/blog" className="block py-2 text-gray-700">Blog</Link>
            <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
