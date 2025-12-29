import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { problem } = await req.json();

    if (!problem) {
      return NextResponse.json({ result: "Inget problem angivet." });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Du är en erfaren svensk bilmekaniker som ger preliminära kostnadsuppskattningar.",
        },
        {
          role: "user",
          content: problem,
        },
      ],
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("OFFERT API ERROR:", error);
    return NextResponse.json(
      { result: "Tekniskt fel vid offertberäkning." },
      { status: 500 }
    );
  }
}
