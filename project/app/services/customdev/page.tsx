import { Metadata } from 'next';
import { Code2, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Software Development - Java & JavaScript Frameworks | F24Tech',
  description:
    'Expert custom software development using Java frameworks like Spring Boot, Hibernate, JSF, and modern JavaScript frameworks including React, Angular, Vue.js, and Node.js. Build scalable, enterprise-grade applications with F24Tech India.',
  keywords:
    'custom software development, java spring boot, hibernate, jsf, react js, angular, vue js, node js, enterprise software, full stack development',
};

const CustomDevelopmentPage = () => {
  const technologies = [
    'Java Spring Boot',
    'Hibernate',
    'JSF',
    'React.js',
    'Angular',
    'Vue.js',
    'Node.js',
    'Express.js',
  ];

  const services = [
    'Enterprise Application Development',
    'Custom Web Applications',
    'Backend APIs with Java & Node.js',
    'Scalable Microservices with Spring Boot',
    'Frontend Solutions with React, Angular & Vue.js',
    'Database Integration & ORM (Hibernate)',
    'Full-Stack Software Development',
    'Software Modernization & Optimization',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Code2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Software Development
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Expert development using Java (Spring Boot, Hibernate, JSF) and
              modern JavaScript frameworks (React, Angular, Vue.js, Node.js).
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-blue-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Custom Development Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <CheckCircle className="w-6 h-6 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDevelopmentPage;
