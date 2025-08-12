import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer' // Import nodemailer

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  privacy: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
})

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
  port: parseInt(process.env.EMAIL_PORT || '587'), // e.g., 587 or 465
  secure: process.env.EMAIL_SECURE === 'true', // Use 'true' for 465, 'false' for 587
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

export async function POST(request: NextRequest) {
  // Check if required environment variables are set
  const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_USER', 'EMAIL_PASS'];
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missingEnvVars.length > 0) {
    return NextResponse.json(
      { 
        success: false, 
        message: `Server configuration error: Missing environment variables: ${missingEnvVars.join(', ')}. Please contact the site administrator.` 
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.CONTACT_FORM_RECIPIENT_EMAIL || process.env.EMAIL_USER, // Recipient email, ideally a dedicated contact email
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: `
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        <p><strong>Privacy Policy Agreed:</strong> ${validatedData.privacy ? 'Yes' : 'No'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log('Contact form submission and email sent:', validatedData)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error',
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
