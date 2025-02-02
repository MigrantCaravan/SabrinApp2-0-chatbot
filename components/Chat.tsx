"use client";

import { useChat, type UseChatOptions } from "ai/react";

import { Chat } from "@/components/ui/chat";

type ChatDemoProps = {
  initialMessages?: UseChatOptions["initialMessages"];
};

export function ChatDemo(props: ChatDemoProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
  } = useChat(props);

  return (
    <div className="flex h-[500px] w-full">
      <Chat
        className="grow"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        suggestions={[
          "Dame la receta de unas salchipapas de la 80",
          "Genera 3 consejos para Pablo que quiere ser mejor papá",
          "¿Quién quedó Campeón de la Copa Libertadores en el año 1989?",
        ]}
      />
    </div>
  );
}
