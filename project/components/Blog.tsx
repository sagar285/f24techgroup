'use client';

import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Best Java Frameworks for Enterprise Development in 2024',
    excerpt: 'Explore the top Java frameworks including Spring Boot, Hibernate, and JSF for building robust enterprise applications.',
    author: 'F24Tech Team',
    date: '2024-01-15',
    category: 'Java Development',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    slug: 'best-java-frameworks-enterprise-development-2024'
  },
  {
    id: 2,
    title: 'Zoho CRM vs NetSuite: Which CRM is Right for Your Business?',
    excerpt: 'Comprehensive comparison of Zoho CRM and NetSuite to help you choose the best CRM solution for your business needs.',
    author: 'CRM Specialist',
    date: '2024-01-12',
    category: 'CRM Solutions',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    slug: 'zoho-crm-vs-netsuite-comparison-2024'
  },
  {
    id: 3,
    title: 'Python Django vs Flask: Choosing the Right Framework',
    excerpt: 'Deep dive into Python web frameworks - Django and Flask. Learn which framework suits your project requirements best.',
    author: 'Python Developer',
    date: '2024-01-10',
    category: 'Python Development',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    slug: 'python-django-vs-flask-framework-comparison'
  },
  {
    id: 4,
    title: 'React vs Angular vs Vue: JavaScript Framework Comparison 2024',
    excerpt: 'Complete guide to choosing between React, Angular, and Vue.js for your next front-end development project.',
    author: 'Frontend Team',
    date: '2024-01-08',
    category: 'JavaScript',
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    slug: 'react-angular-vue-javascript-framework-comparison-2024'
  },
  {
    id: 5,
    title: 'Custom CRM Development: When to Build vs Buy',
    excerpt: 'Guide to deciding between building a custom CRM solution or implementing an existing platform like Salesforce or HubSpot.',
    author: 'Business Analyst',
    date: '2024-01-05',
    category: 'CRM Solutions',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    slug: 'custom-crm-development-build-vs-buy-guide'
  },
  {
    id: 6,
    title: 'PHP Laravel Best Practices for Scalable Applications',
    excerpt: 'Essential Laravel development practices to build scalable, maintainable, and secure PHP applications.',
    author: 'PHP Developer',
    date: '2024-01-03',
    category: 'PHP Development',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    slug: 'php-laravel-best-practices-scalable-applications'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tech <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in technology, development frameworks, CRM solutions, and industry insights 
            from our team of expert developers at F24Tech.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 text-white">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured Article
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center mb-6">
                  <User className="w-5 h-5 mr-2" />
                  <span className="mr-6">{blogPosts[0].author}</span>
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                </div>
                <a 
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative min-h-[300px] lg:min-h-[500px]">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(1, 5).map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <a href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-purple-600 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(4).map((post, index) => (
              <div key={post.id} className="flex items-start space-x-4 group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                  <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <a href={`/blog/${post.slug}`}>
                      {post.title}
                    </a>
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;