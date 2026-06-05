import { NextResponse } from "next/server";
import { z } from "zod";

// Reuse the same schema as the front‑end form
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

type ContactPayload = z.infer<typeof contactSchema>;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const data = contactSchema.parse(body);
    // For now we simply log – you can replace with email service or DB write.
    console.log("📧 New contact submission:", data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }
}
