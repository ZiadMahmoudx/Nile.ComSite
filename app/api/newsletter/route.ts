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
        const { email } = await request.json()

        // Validation
        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Send email notification about the new subscriber
        const { data, error } = await resend.emails.send({
            from: 'Nilecom Website <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL || 'ziadmahmoudx98@gmail.com'],
            subject: `[Nilecom Newsletter] New Subscriber: ${email}`,
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
              .footer { font-size: 12px; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin:0; color:#28a745;">New Newsletter Subscriber</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Email Address:</span> <a href="mailto:${email}">${email}</a>
                </div>
                <p>Please add this email to your newsletter list.</p>
              </div>
              <div class="footer">
                This notification was sent from the Nilecom website footer form.
              </div>
            </div>
          </body>
        </html>
      `,
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json(
                { error: 'Failed to subscribe: ' + error.message },
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
