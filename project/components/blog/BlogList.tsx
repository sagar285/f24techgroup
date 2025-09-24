'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  published_at: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in technology, development frameworks, CRM solutions, 
            and industry insights from our team of expert developers.
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-blue-600 rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 text-white">
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                      Featured Article
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {posts[0].title}
                    </h2>
                    <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center mb-6">
                      <User className="w-5 h-5 mr-2" />
                      <span className="mr-6">{posts[0].author}</span>
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{new Date(posts[0].published_at).toLocaleDateString()}</span>
                    </div>
                    <Link 
                      href={`/blog/${posts[0].slug}`}
                      className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="relative min-h-[300px] lg:min-h-[500px]">
                    <img
                      src={posts[0].image || 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400'}
                      alt={posts[0].title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400'}
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
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                      >
                        Read More
                        <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts yet</h3>
            <p className="text-gray-600">Check back soon for the latest technology insights and tutorials.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;