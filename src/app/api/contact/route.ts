import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service?: string;
  message?: string;
  preferredDate?: string;
  type?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: data.name.trim().slice(0, 100),
      phone: data.phone.trim().slice(0, 20),
      email: data.email.trim().slice(0, 100),
      service: (data.service || "").trim().slice(0, 50),
      message: (data.message || "").trim().slice(0, 1000),
      preferredDate: (data.preferredDate || "").trim().slice(0, 20),
      type: (data.type || "contact").trim(),
      timestamp: new Date().toISOString(),
    };

    // Log the submission (in production, save to database or send email)
    console.log("📬 Contact form submission:", sanitized);

    // In the future, integrate with:
    // - Email service (Resend, Nodemailer, SendGrid)
    // - Database (Supabase, Neon, etc.)
    // - WhatsApp Business API
    // For now, we acknowledge the submission

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
