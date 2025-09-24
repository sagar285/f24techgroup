'use client';

import React from 'react';
import Image from 'next/image';

const technologies = {
  'Java Frameworks': [
    { name: 'Spring Boot', level: 95, color: 'bg-green-500' },
    { name: 'Hibernate', level: 90, color: 'bg-orange-500' },
    { name: 'Spring MVC', level: 92, color: 'bg-green-600' },
    { name: 'JSF', level: 85, color: 'bg-blue-500' },
    { name: 'Struts', level: 80, color: 'bg-red-500' },
  ],
  'JavaScript & Frontend': [
    { name: 'React.js', level: 95, color: 'bg-blue-400' },
    { name: 'Angular', level: 90, color: 'bg-red-600' },
    { name: 'Vue.js', level: 88, color: 'bg-green-500' },
    { name: 'Next.js', level: 92, color: 'bg-black' },
    { name: 'TypeScript', level: 93, color: 'bg-blue-700' },
  ],
  'Python': [
    { name: 'Django', level: 95, color: 'bg-green-700' },
    { name: 'Flask', level: 90, color: 'bg-gray-700' },
    { name: 'FastAPI', level: 88, color: 'bg-teal-600' },
    { name: 'Pandas', level: 85, color: 'bg-purple-600' },
    { name: 'TensorFlow', level: 80, color: 'bg-orange-600' },
  ],
  'PHP': [
    { name: 'Laravel', level: 95, color: 'bg-red-500' },
    { name: 'Symfony', level: 88, color: 'bg-black' },
    { name: 'CodeIgniter', level: 85, color: 'bg-orange-500' },
    { name: 'Zend', level: 82, color: 'bg-green-600' },
    { name: 'CakePHP', level: 80, color: 'bg-red-400' },
  ],
  'Mobile & Other': [
    { name: 'React Native', level: 92, color: 'bg-blue-500' },
    { name: 'Flutter', level: 88, color: 'bg-blue-400' },
    { name: 'Node.js', level: 95, color: 'bg-green-600' },
    { name: 'Express.js', level: 93, color: 'bg-gray-700' },
    { name: 'MongoDB', level: 90, color: 'bg-green-500' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', level: 90, color: 'bg-yellow-500' },
    { name: 'Azure', level: 85, color: 'bg-blue-600' },
    { name: 'Google Cloud', level: 82, color: 'bg-blue-500' },
    { name: 'Docker', level: 88, color: 'bg-blue-400' },
    { name: 'Kubernetes', level: 85, color: 'bg-blue-700' },
  ]
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, and efficient solutions. 
            Our expertise spans across all major programming languages and platforms.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {techs.map((tech, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </h4>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Expertise</span>
                          <span className="text-sm font-semibold text-gray-900">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Technologies Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our Technology Stack?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our comprehensive technology expertise ensures we can handle any project requirement with the most suitable tools and frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">10+</span>
              </div>
              <h4 className="font-semibold mb-2">Years Experience</h4>
              <p className="text-blue-100 text-sm">Deep expertise in enterprise technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <h4 className="font-semibold mb-2">Technologies</h4>
              <p className="text-blue-100 text-sm">Comprehensive technology coverage</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">200+</span>
              </div>
              <h4 className="font-semibold mb-2">Projects Delivered</h4>
              <p className="text-blue-100 text-sm">Proven track record of success</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-blue-100 text-sm">Round-the-clock technical support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;