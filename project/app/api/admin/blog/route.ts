import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const connection = await getConnection();
    const [posts] = await connection.execute(
      'SELECT * FROM blog_posts ORDER BY created_at DESC'
    );

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { 
      title, slug, excerpt, content, image, author, category, tags, 
      featured, meta_title, meta_description, meta_keywords, status 
    } = body;

    const connection = await getConnection();
    const [result] = await connection.execute(
      `INSERT INTO blog_posts 
       (title, slug, excerpt, content, image, author, category, tags, featured, meta_title, meta_description, meta_keywords, status, published_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title, slug, excerpt, content, image, author, category, 
        JSON.stringify(tags), featured, meta_title, meta_description, meta_keywords, status,
        status === 'published' ? new Date() : null
      ]
    );

    return NextResponse.json({ success: true, id: (result as any).insertId });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}