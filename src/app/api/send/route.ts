import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { EmailTemplate } from '../../components/email-template';
import { render } from '@react-email/render';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    
    const user = process.env.MAILTRAP_API_USER;
    const pass = process.env.MAILTRAP_API_SECRET;

    if (!user || !pass) {
      return NextResponse.json(
        { error: 'Configuration email manquante' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: { user, pass },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || 'no-reply@example.com',
      to: process.env.MAIL_TO || 'contact@example.com',
      subject: `Nouveau message de ${formData.lastname_name}`,
      html: await render(EmailTemplate({
        lastname_name: formData.lastname_name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.project_type,
        project_description: formData.project_description,
      })),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}