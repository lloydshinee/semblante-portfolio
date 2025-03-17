"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnonChatBox } from "./AnonChatBox";
import { ChatProvider } from "@/providers/ChatProvider";

export default function ChatPage() {
  const [chatId, setChatId] = useState<string>("");

  useEffect(() => {
    let storedChatId = localStorage.getItem("chatId");
    if (!storedChatId) {
      const newChatId = crypto.randomUUID(); // Generates a unique ID
      localStorage.setItem("chatId", newChatId);
      storedChatId = newChatId;
    }

    setChatId(storedChatId);
  }, []);

  return (
    <main className="h-screen max-h-screen flex">
      <section className="w-[30rem] bg-zinc-900 md:flex flex-col items-center justify-center gap-4 hidden">
        <div className="w-32 h-32 relative rounded-full overflow-hidden">
          <Image
            src="/me3.jpg"
            fill
            alt="Hello"
            className="object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white">Lloyd Semblante</h2>
      </section>
      <section className="flex-1 flex">
        <ChatProvider chatId={chatId}>
          <AnonChatBox />
        </ChatProvider>
      </section>
    </main>
  );
}
