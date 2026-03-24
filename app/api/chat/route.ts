import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";


export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const client = new OpenAI({ apiKey });
    const body = await req.json();
    const message = body?.message?.trim();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      temperature: 0.6,
      max_output_tokens: 300,
      input: [
        {
          role: "system",
          content: `
You are Saif Mangan's portfolio assistant.

Your job:
- Answer only questions about Saif, his services, projects, background, tech stack, and how to contact him.
- Keep answers concise, sharp, and business-focused.
- Position Saif as someone who builds AI chatbots, analytics dashboards, internal tools, workflow automation, and business-facing AI/data solutions.
- If asked something unrelated, politely steer back to Saif's portfolio and services.

Facts about Saif:
- 4.5+ years of ERP and CRM consulting experience
- MSc Data Science & AI
- Focused on AI systems, analytics, enterprise workflows, and product thinking
- Tech stack includes Next.js, Tailwind CSS, TypeScript, Python, SQL, GitHub, Vercel, and enterprise platforms like Dynamics 365
- Contact email: saif.mangan@outlook.com
- GitHub: https://github.com/saifmangan
- LinkedIn: https://www.linkedin.com/in/saif-ali-khan-mangan/
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply = response.output_text || "Sorry — I couldn't generate a reply.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenAI chat error:", error);
    return NextResponse.json(
      { error: "Something went wrong while generating a reply." },
      { status: 500 }
    );
  }
}