// app/services/mobile/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobile App Development - React Native, Flutter, iOS, Android | F24Tech',
  description: 'Cross-platform and native mobile app development using React Native, Flutter, iOS, and Android by F24Tech India.',
  keywords: 'mobile app development, react native, flutter, ios development, android development, cross platform apps',
};

const MobilePage = () => {
  const technologies = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Firebase', 'Expo', 'Redux'];
  const services = [
    'Cross-Platform App Development',
    'Native iOS Development',
    'Native Android Development',
    'React Native Apps',
    'Flutter Applications',
    'Mobile UI/UX Design',
    'App Store Deployment',
    'Mobile App Maintenance'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Native and cross-platform mobile applications for iOS and Android
            </p>
            <Link href="/get-quote" className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile Technologies</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-green-50 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mobile Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobilePage;
