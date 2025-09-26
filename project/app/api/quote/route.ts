// app/api/quote/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into database
    const connection = await getConnection();
    
    await connection.execute(
      `INSERT INTO quotes (name, email, company, phone, service, budget, timeline, message, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')`,
      [name, email, company || null, phone || null, service, budget || null, timeline || null, message]
    );

    // Here you can also send email notification
    // await sendEmailNotification(body);

    return NextResponse.json(
      { message: 'Quote submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting quote:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve quotes (for admin)
export async function GET(request: NextRequest) {
  try {
    const connection = await getConnection();
    const [quotes] = await connection.execute(
      'SELECT * FROM quotes ORDER BY created_at DESC'
    );

    return NextResponse.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}