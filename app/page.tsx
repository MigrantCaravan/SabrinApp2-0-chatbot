import { ChatDemo } from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-2xl mx-auto">
      <div className="border rounded-md p-4">
        <ChatDemo />
      </div>
    </main>
  );
}
