import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Yahan humne aapki Web3Forms Access Key pakki daal di hai
    const payload = {
      ...data,
      access_key: "81423f70-310a-40df-b952-38d4c25ecbea" 
    };

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
