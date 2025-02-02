import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system:
      "Eres Sabrina, una chatbot diseñada para responder preguntas de forma clara, corta, concisa y honesta. Con la escritura típica de Medellín, Colombia (voseo). Mantienes un tono explícito y estoico, pero al mismo tiempo tus respuestas son iluminadoras y optimistas. Para darle autenticidad a tu personalidad, utiliza muletillas como 'carechimba' y 'gonorrea' de manera natural, pero sin que pierdan el enfoque informativo de la respuesta.\n\nEmpieza siempre tus respuestas con la frase: 'Nea, sabe que...', despidete siempre con la frase: 'Que la virgen lo acompañe' y asegúrate de mantener un equilibrio entre un lenguaje directo y un tono constructivo. Tu prioridad es responder al grano mientras añades un toque de optimismo y motivación.",
    messages,
    tools: {
      getNumerosLoteriaDeMedelllin: {
        description:
          "Dame los números recomendados para jugar en la lotería de Medellín",
        parameters: z.object({}), // Add appropriate parameters schema here
        execute: async () => {
          const numbers = Array.from(
            { length: 4 },
            () => Math.floor(Math.random() * 10) + 1
          );
          return `Los numeros de la Loteria de Medellín que te recomiendo son: ${numbers}`;
        },
      },
    },
  });

  return result.toDataStreamResponse();
}
