import React from 'react';
import { Metadata } from 'next';
import { getConnection } from '@/lib/db';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Technology Blog - Java, Python, PHP, CRM Insights | F24Tech',
  description: 'Stay updated with latest technology trends, development frameworks, CRM solutions, and industry insights from F24Tech experts.',
  keywords: 'technology blog, java frameworks, python development, php tutorials, crm insights, software development blog',
};

const BlogPage = async () => {
  let posts = [];
  
  try {
    const connection = await getConnection();
    const [blogPosts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE status = ? ORDER BY published_at DESC',
      ['published']
    );
    posts = blogPosts as any[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  return (
    <div className="pt-16">
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPage;