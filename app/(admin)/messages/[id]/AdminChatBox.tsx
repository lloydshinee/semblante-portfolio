"use client";

import { useChat } from "@/providers/ChatProvider";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { ChatInput } from "@/app/chat/ChatInput";

export function AdminChatBox() {
  const { messages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen flex flex-col w-full relative">
      <div className="absolute top-0 w-full p-6 drop-shadow-md z-50 bg-white/60 backdrop-blur-lg flex items-center gap-2">
        <MessageCircle />
        <h2 className="text-lg font-semibold text-zinc-600">
          Live Chat with Anonymous
        </h2>
      </div>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-6 p-12 py-[7rem]">
        {messages.map((message) => (
          <section
            key={message.id}
            className={`w-full flex gap-4 items-center ${
              !message.isAdmin ? "justify-start" : "flex-row-reverse"
            }`}
          >
            {/* Profile Image */}
            <div className="h-10 w-10 overflow-hidden rounded-full relative">
              <Image
                src={message.isAdmin ? "/me3.jpg" : "/anon.jpg"}
                fill
                alt="User Avatar"
                className="object-cover object-center" // Ensures the image covers the container and is centered
              />
            </div>

            {/* Message Bubble */}
            <div
              className={`p-3 rounded-xl ${
                !message.isAdmin ? "bg-slate-300" : "bg-blue-600 text-white"
              }`}
            >
              <p className="max-w-32 md:max-w-60 break-words whitespace-pre-wrap">
                {message.body}
              </p>
            </div>
          </section>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
        <ChatInput isAdmin={true} />
      </div>
    </div>
  );
}
