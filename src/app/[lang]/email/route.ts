// app/contact/api/send.tsx
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const { firstName, lastName, email, message, phone } = await req.json();

  // Configure your transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Ensure you have these in your .env.local
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  let mailOptions = {
    from: '"Pixel Perfect" <markosimundza@gmail.com>', // sender address
    to: 'markosimundza@gmail.com', // list of receivers
    subject: 'PIXEL PERFECT - new message', // Subject line
    text: `Message from ${firstName} ${lastName}, Email: ${email}, Message: ${message}, Phone: ${phone}`, // plain text body
    html: `<b>Message from ${firstName} ${lastName}, Email: ${email}, Phone: ${phone}</b><p>${message}</p>`, // HTML body
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
