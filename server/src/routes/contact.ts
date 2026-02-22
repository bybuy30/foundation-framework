import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
import "dotenv/config";

const router = Router();

// Configure nodemailer transporter with Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address (e.g., bilalman399@gmail.com)
    pass: process.env.EMAIL_PASS, // Gmail App Password (NOT regular password)
  },
});

// Verify transporter connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("Email Transporter Error:", error);
  } else {
    console.log("Email service is ready to send messages");
  }
});

/**
 * POST /api/contact
 * - Receives contact form submissions from the frontend
 * - Sends email to the admin (bilalman399@gmail.com)
 * - Body: { email: string, name: string, subject: string, message: string }
 * - Returns: { success: boolean, message: string }
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const { email, name, subject, message } = req.body;

    // Validate required fields
    if (!email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "Email and message are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid email format" });
    }

    // Setup email content to send to admin
    const mailOptions = {
      from: process.env.EMAIL_USER, // Must be the authenticated Gmail account
      to: process.env.MY_EMAIL || "bilalman399@gmail.com", // Admin email (your email)
      replyTo: email, // Allows you to reply directly to the user
      subject: subject
        ? `New Contact Form: ${subject}`
        : `New Contact Form from ${name || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #4A613D 0%, #6b7f4f 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          
          <div style="padding: 20px; background: white;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px; font-weight: bold; color: #4A613D; width: 120px;">Name:</td>
                <td style="padding: 12px;">${name || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px; font-weight: bold; color: #4A613D;">Email:</td>
                <td style="padding: 12px;"><a href="mailto:${email}" style="color: #4A613D; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px; font-weight: bold; color: #4A613D;">Subject:</td>
                <td style="padding: 12px;">${subject || "No subject provided"}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #4A613D; margin-bottom: 10px;">Message:</p>
              <div style="background: #f0f0f0; padding: 15px; border-left: 4px solid #4A613D; border-radius: 4px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          
          <div style="background: #f0f0f0; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0;">This email was sent from the Hydronest Contact Form</p>
            <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to the user</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Also optionally send a confirmation email to the user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message - Hydronest",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #4A613D 0%, #6b7f4f 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h2 style="margin: 0;">Thank you for contacting Hydronest!</h2>
          </div>
          <p>Hi ${name || "there"},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p style="background: #f0f0f0; padding: 15px; border-left: 4px solid #4A613D; border-radius: 4px;">
            <strong>Your message:</strong><br>
            ${message.replace(/\n/g, "<br>")}
          </p>
          <p>Best regards,<br>The Hydronest Team</p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return res
      .status(200)
      .json({
        success: true,
        message: "Email sent successfully! We will respond shortly.",
      });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return res.status(500).json({
      success: false,
      error:
        "Failed to send email. Please ensure EMAIL_USER and EMAIL_PASS are configured in .env",
    });
  }
});

export default router;
