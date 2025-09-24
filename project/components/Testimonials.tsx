'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Solutions',
    role: 'CEO',
    content: 'F24Tech delivered an exceptional Java Spring Boot application for our business. Their expertise in Java frameworks and attention to detail exceeded our expectations.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
  },
  {
    name: 'Michael Chen',
    company: 'DataFlow Inc',
    role: 'CTO',
    content: 'The Zoho CRM implementation by F24Tech transformed our sales process. Their team understood our requirements perfectly and delivered a solution that boosted our productivity by 40%.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
  },
  {
    name: 'Emily Rodriguez',
    company: 'GrowthMart',
    role: 'Operations Manager',
    content: 'F24Tech developed a custom Python Django application that streamlined our inventory management. The solution is robust, scalable, and exactly what we needed.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
  },
  {
    name: 'David Kumar',
    company: 'InnovateHub',
    role: 'Founder',
    content: 'The React.js and Node.js application built by F24Tech is outstanding. Their knowledge of modern JavaScript frameworks and development practices is impressive.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
  },
  {
    name: 'Lisa Thompson',
    company: 'RetailPro Systems',
    role: 'IT Director',
    content: 'F24Tech India provided excellent NetSuite customization services. Their team is knowledgeable, responsive, and delivered everything on time and within budget.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
  },
  {
    name: 'James Wilson',
    company: 'CloudTech Enterprises',
    role: 'VP of Technology',
    content: 'The PHP Laravel application developed by F24Tech exceeded our expectations. Their expertise in backend development and database optimization is remarkable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about F24Tech's technology solutions 
            and development services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-600 opacity-20 absolute -top-2 -left-2" />
                <p className="text-gray-600 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Trusted by Businesses Worldwide</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              F24Tech has successfully delivered technology solutions to clients across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="/get-quote"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Success Story
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;