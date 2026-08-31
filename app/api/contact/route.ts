import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("[v0] RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Email service is not configured (missing API key)" },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)

    // Domain jhcconsulting.net is verified in Resend.
    // Send from a verified domain email address.
    const senderEmail = "noreply@jhcconsulting.net"
    const recipient = process.env.RESEND_TO_EMAIL || "support@jhcconsulting.net"

    console.log("[v0] Contact form submission received")
    console.log("[v0] Sender:", senderEmail)
    console.log("[v0] Recipient:", recipient)

    const inquiry = await resend.emails.send({
      from: `JHC Consulting <${senderEmail}>`,
      to: recipient,
      replyTo: email,
      subject: `New inquiry from ${name}: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    console.log("[v0] Resend response:", JSON.stringify(inquiry))

    if (inquiry.error) {
      console.error("[v0] Resend error code:", inquiry.error.code)
      console.error("[v0] Resend error message:", inquiry.error.message)
      const msg = inquiry.error.message || "Unknown email provider error"
      return NextResponse.json({ error: `Email provider error: ${msg}` }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, id: inquiry.data?.id, message: "Email sent successfully" },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form exception:", error)
    return NextResponse.json(
      {
        error:
          "Failed to send email: " + (error instanceof Error ? error.message : String(error)),
      },
      { status: 500 },
    )
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
