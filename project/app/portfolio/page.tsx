// app/portfolio/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Code2, Smartphone, Database } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Portfolio - Successful Projects & Case Studies | F24Tech',
  description: 'Explore our portfolio of successful software development projects, CRM implementations, and custom solutions delivered by F24Tech.',
  keywords: 'portfolio, case studies, projects, software development portfolio, crm implementations',
};

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution built with React.js and Node.js, handling 10K+ daily transactions.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Code2 className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Healthcare CRM System',
    category: 'CRM Solutions',
    description: 'Custom CRM solution for healthcare provider managing 50K+ patient records with HIPAA compliance.',
    technologies: ['Python Django', 'PostgreSQL', 'React', 'AWS'],
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Database className="w-8 h-8" />,
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure mobile banking application with biometric authentication for iOS and Android.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Zoho CRM Implementation',
    category: 'CRM Implementation',
    description: 'Complete Zoho CRM setup and customization for manufacturing company with 200+ users.',
    technologies: ['Zoho CRM', 'API Integration', 'Custom Functions', 'Automation'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Database className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Supply Chain Management',
    category: 'Enterprise Solution',
    description: 'NetSuite-based supply chain management system for global logistics company.',
    technologies: ['NetSuite', 'SuiteScript', 'Integration', 'Reporting'],
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Code2 className="w-8 h-8" />,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Real Estate Portal',
    category: 'Web Development',
    description: 'Property listing platform with advanced search, virtual tours, and payment integration.',
    technologies: ['PHP Laravel', 'Vue.js', 'MySQL', 'Stripe'],
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Code2 className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500'
  }
];

const PortfolioPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our successful projects and innovative solutions delivered to clients worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${project.color} p-3 rounded-full`}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to See Your Project Here?</h2>
          <p className="text-xl mb-8">Let's build something amazing together</p>
          <Link 
            href="/get-quote" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Start Your Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;