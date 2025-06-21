import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nom, email et message sont requis' },
        { status: 400 }
      );
    }

    // Create a test account using Ethereal for development
    // In production, you would use your actual SMTP credentials
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || testAccount.user,
        pass: process.env.EMAIL_PASSWORD || testAccount.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Formulaire de contact" <${process.env.EMAIL_FROM || 'contact@cabinet-cbs.com'}>`,
      to: process.env.EMAIL_TO || 'bousid@yahoo.fr',
      replyTo: email,
      subject: `Nouveau message: ${subject || 'Contact depuis le site web'}`,
      text: `
        Nom: ${name}
        Email: ${email}
        ${company ? `Entreprise: ${company}` : ''}
        ${phone ? `Téléphone: ${phone}` : ''}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E3A8A;">Nouveau message depuis le formulaire de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Nom:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Entreprise:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td>
            </tr>
            ` : ''}
            ${phone ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Téléphone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            ` : ''}
            ${subject ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Sujet:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
            ` : ''}
          </table>
          <div style="margin-top: 20px;">
            <h3 style="color: #1E3A8A;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // For development, log the Ethereal URL to view the email
    if (!process.env.EMAIL_HOST) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
