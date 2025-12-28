import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { problem } = body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Du är en erfaren bilmekaniker som ger tydliga och realistiska kostnadsuppskattningar.",
      },
      {
        role: "user",
        content: `Beskrivning av problem: ${problem}. Ge en tydlig offert i SEK.`,
      },
    ],
  });

  return NextResponse.json({
    result: completion.choices[0].message.content,
  });
}
