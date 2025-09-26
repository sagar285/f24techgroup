// app/blog/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Blog from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Technology Blog - Latest Tech Insights & Tutorials | F24Tech',
  description: 'Stay updated with latest technology trends, development tutorials, CRM insights, and industry best practices from F24Tech experts.',
  keywords: 'technology blog, development tutorials, crm insights, java tutorials, javascript guides, python tips',
};

const BlogPage = () => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tech Insights & Tutorials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights on technology, development frameworks, CRM solutions, and industry best practices
            </p>
          </div>
        </div>
      </section>
      <Blog />
    </div>
  );
};

export default BlogPage;
