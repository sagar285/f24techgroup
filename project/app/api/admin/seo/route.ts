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
    const [seoSettings] = await connection.execute(
      'SELECT * FROM seo_settings ORDER BY page ASC'
    );

    return NextResponse.json(seoSettings);
  } catch (error) {
    console.error('Error fetching SEO settings:', error);
    return NextResponse.json({ error: 'Failed to fetch SEO settings' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { page, title, description, keywords, og_title, og_description, og_image, schema_markup } = body;

    const connection = await getConnection();
    await connection.execute(
      `INSERT INTO seo_settings (page, title, description, keywords, og_title, og_description, og_image, schema_markup) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?) 
       ON DUPLICATE KEY UPDATE 
       title = VALUES(title), 
       description = VALUES(description), 
       keywords = VALUES(keywords),
       og_title = VALUES(og_title),
       og_description = VALUES(og_description),
       og_image = VALUES(og_image),
       schema_markup = VALUES(schema_markup)`,
      [page, title, description, keywords, og_title, og_description, og_image, JSON.stringify(schema_markup)]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating SEO settings:', error);
    return NextResponse.json({ error: 'Failed to update SEO settings' }, { status: 500 });
  }
}