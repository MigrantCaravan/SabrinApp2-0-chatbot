import { ChatDemo } from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="w-full max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Mai Chatbot</h1>
          <p className="text-gray-600">El futuro Product Owner de Croper 🌻</p>
        </header>

        <section className="border rounded-lg p-4 md:p-6 shadow-sm bg-white">
          <ChatDemo />
        </section>
      </div>
    </main>
  );
}
