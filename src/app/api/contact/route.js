import { NextResponse } from 'next/server';

// This is the Vercel backend store representation
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Here you would typically store the data in Vercel Postgres, MongoDB, or send an email.
    // For now, we simulate a successful backend storage.
    console.log('Received contact submission:', data);
    
    return NextResponse.json(
      { message: 'Submission successful! Dennis will get back to you.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to submit form.' },
      { status: 500 }
    );
  }
}
