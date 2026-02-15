import type { Express, Request, Response } from "express";
import type { Server } from "http";

const MAIL_API_URL = "https://mail.cradlevoices.com/";
const MAIL_RECIPIENTS = [
  "info@sendire.com",
  "richard@sendire.com",
  "collscodes@gmail.com",
  "richbi2020@gmail.com",
];

function buildContactEmailBody(name: string, email: string, message: string): string {
  const escapedName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const escapedEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const escapedMessage = message
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
  return `Dear Sendire Team,<br><br>A new message has been submitted via the website contact form.<br><br><strong>From:</strong> ${escapedName}<br><strong>Email:</strong> ${escapedEmail}<br><br><strong>Message:</strong><br>${escapedMessage}<br><br>Kind regards,<br><strong>Sendire Landing Page</strong>`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body as {
        name?: string;
        email?: string;
        message?: string;
      };

      if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res.status(400).json({
          message: "Name, email, and message are required.",
        });
      }

      const token = process.env.MAIL_API_TOKEN;
      if (!token) {
        console.error("MAIL_API_TOKEN is not set");
        return res.status(503).json({
          message: "Email service is not configured. Please try again later.",
        });
      }

      const emailBody = buildContactEmailBody(
        name.trim(),
        email.trim(),
        message.trim()
      );

      const mailResponse = await fetch(MAIL_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          recipientEmails: MAIL_RECIPIENTS,
          emailBody,
          subject: `Sendire – New contact from ${name.trim()}`,
          recipientName: "Sendire Team",
          senderName: "Sendire Website",
          senderEmail: "sendire@cradlevoices.com",
        }),
      });

      if (!mailResponse.ok) {
        const errText = await mailResponse.text();
        console.error("Mail API error:", mailResponse.status, errText);
        return res.status(502).json({
          message: "Unable to send your message. Please try again later.",
        });
      }

      return res.status(200).json({ message: "Message sent successfully." });
    } catch (err) {
      console.error("Contact form error:", err);
      return res.status(500).json({
        message: "Something went wrong. Please try again later.",
      });
    }
  });

  return httpServer;
}
