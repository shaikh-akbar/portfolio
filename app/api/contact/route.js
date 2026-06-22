import nodemailer from "nodemailer";

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO_EMAIL"];

function getEnv(key) {
  const value = process.env[key];
  return typeof value === "string" ? value.trim() : "";
}

function missingEnvVars() {
  return requiredEnvVars.filter((key) => !getEnv(key));
}

export async function POST(request) {
  const missing = missingEnvVars();

  if (missing.length > 0) {
    return Response.json(
      {
        error: `Email is not configured yet. Missing environment variables: ${missing.join(", ")}`,
      },
      { status: 500 }
    );
  }

  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const smtpHost = getEnv("SMTP_HOST");
  const smtpPort = Number(getEnv("SMTP_PORT"));
  const smtpUser = getEnv("SMTP_USER");
  const smtpPass = getEnv("SMTP_PASS");
  const contactToEmail = getEnv("CONTACT_TO_EMAIL");

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
    from: smtpUser,
    to: contactToEmail,
    replyTo: email,
    subject: `Portfolio Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2>New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  return Response.json({ ok: true });
}
