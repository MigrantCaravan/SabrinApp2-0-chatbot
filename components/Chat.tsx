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
          "Dame la respuesta sobre la Parte 1: Priorización del Backlog",
          "Dame una respuesta sobre la Parte 2: Historia de Usuario y Criterios de Aceptación",
          "Dame una respuesta sobre la Parte 3: Resolución de un Problema del Producto",
          "Dame una respuesta sobre la Parte 4: Métricas Clave",
        ]}
      />
    </div>
  );
}
