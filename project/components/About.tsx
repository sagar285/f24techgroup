'use client';

import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">F24Tech</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-xl">
                <strong>F24Tech</strong> is a leading technology solutions provider based in India, specializing in 
                custom software development, CRM implementations, and comprehensive digital transformation services.
              </p>
              
              <p>
                Founded with the vision to bridge the gap between cutting-edge technology and business success, 
                <strong> F24Tech Softwares</strong> has evolved into a trusted partner for businesses worldwide. 
                Our expertise spans across multiple programming languages, frameworks, and platforms.
              </p>
              
              <p>
                As <strong>F24Tech India</strong>, we pride ourselves on delivering world-class solutions while 
                maintaining cost-effectiveness. Our team of expert developers specializes in Java frameworks, 
                JavaScript technologies, Python development, PHP solutions, and comprehensive CRM implementations 
                including Zoho, NetSuite, and custom CRM development.
              </p>

              <p>
                <strong>F24Tech Group</strong> serves clients across various industries, from startups to enterprise-level 
                organizations, helping them leverage technology to achieve their business objectives and stay 
                competitive in the digital landscape.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="w-8 h-8 mr-4 mt-1 text-blue-200" />
                  <div>
                    <h4 className="font-semibold mb-2">Excellence</h4>
                    <p className="text-blue-100">We strive for excellence in every project, ensuring high-quality deliverables that exceed expectations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-8 h-8 mr-4 mt-1 text-blue-200" />
                  <div>
                    <h4 className="font-semibold mb-2">Collaboration</h4>
                    <p className="text-blue-100">We work closely with our clients as partners, understanding their needs and providing tailored solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="w-8 h-8 mr-4 mt-1 text-blue-200" />
                  <div>
                    <h4 className="font-semibold mb-2">Global Reach</h4>
                    <p className="text-blue-100">Serving clients worldwide with our comprehensive technology solutions and round-the-clock support.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <TrendingUp className="w-8 h-8 mr-4 mt-1 text-blue-200" />
                  <div>
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p className="text-blue-100">Constantly evolving with latest technologies to provide cutting-edge solutions for modern challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and success. 
              We are committed to delivering exceptional software development services, CRM implementations, and 
              digital transformation solutions that help our clients stay ahead in the competitive market.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To be the most trusted technology partner for businesses worldwide, known for our expertise in 
              Java, JavaScript, Python, PHP development, and comprehensive CRM solutions. We envision a future 
              where technology seamlessly integrates with business processes to create unprecedented value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;