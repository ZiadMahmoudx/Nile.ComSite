import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Use environment variables for sensitive data
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.warn("RESEND_API_KEY is not set. Emails will not be sent. Please configure it in your environment variables.");
}
const resend = new Resend(resendApiKey || "re_dummy_key")

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    const phone = formData.get('phone') as string || 'Not provided'
    const company = formData.get('company') as string || 'Not provided'

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Nilecom Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'ziadmahmoudx98@gmail.com'],
      replyTo: email,
      subject: `[Nilecom Contact] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
              .header { background-color: #f8f9fa; padding: 15px; border-radius: 8px 8px 0 0; border-bottom: 2px solid #e9ecef; }
              .content { padding: 20px 0; }
              .field { margin-bottom: 10px; }
              .label { font-weight: bold; color: #555; }
              .message { background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff; }
              .footer { font-size: 12px; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin:0; color:#007bff;">New Contact Inquiry</h2>
              </div>
              <div class="content">
                <div class="field"><span class="label">Name:</span> ${name}</div>
                <div class="field"><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></div>
                <div class="field"><span class="label">Phone:</span> ${phone}</div>
                <div class="field"><span class="label">Company:</span> ${company}</div>
                <div class="field"><span class="label">Subject:</span> ${subject}</div>
                <br>
                <div class="label">Message:</div>
                <div class="message">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div class="footer">
                This email was sent from the Nilecom website contact form.
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email: ' + error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + (error.message || 'Unknown error') },
      { status: 500 }
    )
  }
}