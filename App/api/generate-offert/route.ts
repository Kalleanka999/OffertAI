import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { bil, ar, arbete } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Du är en professionell svensk bilverkstad.",
      },
      {
        role: "user",
        content: `Skapa en professionell offert för ${bil} (${ar}). Arbete: ${arbete}. Dela upp i arbete, reservdelar, moms och total.`,
      },
    ],
  });

  return Response.json({
    text: completion.choices[0].message.content,
  });
}
