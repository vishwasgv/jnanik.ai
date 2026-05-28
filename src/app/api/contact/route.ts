import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Jnanik AI Website" <${process.env.SMTP_USER}>`,
      to: "contact@jnanikai.com",
      replyTo: email,
      subject: `[Website Enquiry] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #FAF8F5; border-radius: 8px;">
          <h2 style="color: #1C1A18; margin-bottom: 20px;">New message from jnanikai.com</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6B6560; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #1C1A18;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6560;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B6560;"><strong>Company</strong></td><td style="padding: 8px 0; color: #1C1A18;">${company || "—"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #FFFFFF; border-radius: 6px; border: 1px solid #E8E2DB;">
            <p style="color: #6B6560; margin: 0 0 8px 0;"><strong>Message</strong></p>
            <p style="color: #1C1A18; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
