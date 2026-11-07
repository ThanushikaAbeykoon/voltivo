import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT ?? "587");
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");
const contactTo = process.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_EMAIL ?? smtpUser ?? "info@voltivotech.com";
const smtpFromName = process.env.SMTP_FROM_NAME ?? "Voltivo Technologies";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("_honey") ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ ok: false, error: "Spam detected" }, { status: 400 });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ ok: false, error: "Please complete all fields." }, { status: 400 });
  }

  if (!smtpUser || !smtpPass) {
    console.error("Missing SMTP credentials in environment variables.");
    return NextResponse.json(
      { ok: false, error: "Email is not configured on this server yet." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${smtpFromName}" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.redirect(new URL("/contact-us?success=true", request.nextUrl.origin));
  } catch (error) {
    console.error("Contact form email send failed:", error);
    return NextResponse.json(
      { ok: false, error: "There was a problem sending your message. Please try again." },
      { status: 500 }
    );
  }
}
