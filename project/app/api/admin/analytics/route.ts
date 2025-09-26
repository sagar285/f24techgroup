// app/api/admin/analytics/route.ts
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

    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') || '7days';

    const connection = await getConnection();

    // Calculate date range
    const now = new Date();
    let startDate = new Date();
    switch (range) {
      case '24hours':
        startDate.setHours(startDate.getHours() - 24);
        break;
      case '7days':
        startDate.setDate(startDate.getDate() - 7);
        break;
      case '30days':
        startDate.setDate(startDate.getDate() - 30);
        break;
      case '90days':
        startDate.setDate(startDate.getDate() - 90);
        break;
    }

    // Get total contacts and change
    const [currentContacts] = await connection.execute(
      'SELECT COUNT(*) as count FROM contacts WHERE created_at >= ?',
      [startDate]
    ) as any;

    const [previousContacts] = await connection.execute(
      'SELECT COUNT(*) as count FROM contacts WHERE created_at >= ? AND created_at < ?',
      [new Date(startDate.getTime() - (now.getTime() - startDate.getTime())), startDate]
    ) as any;

    const contactsChange = previousContacts[0].count > 0
      ? Math.round(((currentContacts[0].count - previousContacts[0].count) / previousContacts[0].count) * 100)
      : 0;

    // Get total posts and change
    const [currentPosts] = await connection.execute(
      'SELECT COUNT(*) as count FROM blog_posts WHERE status = ? AND published_at >= ?',
      ['published', startDate]
    ) as any;

    const [previousPosts] = await connection.execute(
      'SELECT COUNT(*) as count FROM blog_posts WHERE status = ? AND published_at >= ? AND published_at < ?',
      ['published', new Date(startDate.getTime() - (now.getTime() - startDate.getTime())), startDate]
    ) as any;

    const postsChange = previousPosts[0].count > 0
      ? Math.round(((currentPosts[0].count - previousPosts[0].count) / previousPosts[0].count) * 100)
      : 0;

    // Get all posts for total count
    const [allPosts] = await connection.execute(
      'SELECT COUNT(*) as count FROM blog_posts WHERE status = ?',
      ['published']
    ) as any;

    // Get all contacts for total count
    const [allContacts] = await connection.execute(
      'SELECT COUNT(*) as count FROM contacts'
    ) as any;

    // Get contact sources
    const [contactSources] = await connection.execute(
      `SELECT service as source, COUNT(*) as count 
       FROM contacts 
       WHERE created_at >= ? 
       GROUP BY service 
       ORDER BY count DESC 
       LIMIT 5`,
      [startDate]
    ) as any;

    // Get post performance
    const [postPerformance] = await connection.execute(
      `SELECT id, title, published_at as publishedAt, 
       FLOOR(RAND() * 1000) as views,
       CONCAT(FLOOR(RAND() * 5 + 1), 'm ', FLOOR(RAND() * 60), 's') as avgTime
       FROM blog_posts 
       WHERE status = ? AND published_at >= ?
       ORDER BY published_at DESC 
       LIMIT 10`,
      ['published', startDate]
    ) as any;

    // Generate recent activity (mock data for now)
    const [recentContacts] = await connection.execute(
      'SELECT name, email, created_at FROM contacts ORDER BY created_at DESC LIMIT 5'
    ) as any;

    const [recentPosts] = await connection.execute(
      'SELECT title, published_at FROM blog_posts WHERE status = ? ORDER BY published_at DESC LIMIT 5',
      ['published']
    ) as any;

    const recentActivity = [
      ...recentContacts.map((c: any) => ({
        type: 'contact',
        title: 'New Contact',
        description: `${c.name} (${c.email})`,
        timestamp: new Date(c.created_at).toLocaleString(),
      })),
      ...recentPosts.map((p: any) => ({
        type: 'post',
        title: 'Post Published',
        description: p.title,
        timestamp: new Date(p.published_at).toLocaleString(),
      })),
    ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10);

    const analytics = {
      overview: {
        totalViews: Math.floor(Math.random() * 10000) + 5000, // Mock data
        totalContacts: allContacts[0].count,
        totalPosts: allPosts[0].count,
        activeUsers: Math.floor(Math.random() * 100) + 20, // Mock data
        viewsChange: Math.floor(Math.random() * 30) - 10, // Mock data
        contactsChange,
        postsChange,
        usersChange: Math.floor(Math.random() * 30) - 10, // Mock data
      },
      topPages: [
        { path: '/', views: Math.floor(Math.random() * 1000) + 500 },
        { path: '/services', views: Math.floor(Math.random() * 800) + 300 },
        { path: '/blog', views: Math.floor(Math.random() * 600) + 200 },
        { path: '/contact', views: Math.floor(Math.random() * 400) + 100 },
        { path: '/about', views: Math.floor(Math.random() * 300) + 50 },
      ],
      recentActivity,
      contactSources: contactSources.map((s: any) => ({
        source: s.source || 'Direct',
        count: s.count,
      })),
      postPerformance,
    };

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}