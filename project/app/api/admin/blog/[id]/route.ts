// app/api/admin/blog/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getConnection } from '@/lib/db';

// GET single blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const connection = await getConnection();
    const [posts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [params.id]
    );

    const post = (posts as any[])[0];
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

// PUT (update) blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    
    // Check if slug already exists for another post
    const [existing] = await connection.execute(
      'SELECT id FROM blog_posts WHERE slug = ? AND id != ?',
      [slug, params.id]
    );

    if ((existing as any[]).length > 0) {
      return NextResponse.json(
        { error: 'Slug already exists' },
        { status: 400 }
      );
    }

    // Update post
    await connection.execute(
      `UPDATE blog_posts SET 
        title = ?, slug = ?, excerpt = ?, content = ?, image = ?, author = ?, 
        category = ?, tags = ?, featured = ?, meta_title = ?, meta_description = ?, 
        meta_keywords = ?, status = ?, published_at = ?,
        updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [
        title, slug, excerpt, content, image, author, category, 
        JSON.stringify(tags), featured, meta_title, meta_description, 
        meta_keywords, status,
        status === 'published' ? new Date() : null,
        params.id
      ]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

// DELETE blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const connection = await getConnection();
    await connection.execute(
      'DELETE FROM blog_posts WHERE id = ?',
      [params.id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}