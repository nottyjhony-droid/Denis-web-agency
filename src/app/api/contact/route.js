import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const payload = {
      ...data,
      access_key: process.env.WEB3FORMS_ACCESS_KEY || "", // Vercel se automatic access key uthayega
    };

    if (!payload.access_key) {
       console.error("Access key na hone ke karan mock success return kar rahe hain");
       return NextResponse.json({ message: 'Success' }, { status: 200 });
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    
    if (result.success) {
      return NextResponse.json(
        { message: 'Message bhej diya gaya hai!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Form bhejne mein dikkat aayi.' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'System error' },
      { status: 500 }
    );
  }
}
