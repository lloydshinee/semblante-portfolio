"use client";

import { useChat } from "@/providers/ChatProvider";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export function ChatInput({ isAdmin }: { isAdmin: boolean }) {
  const [input, setInput] = useState("");
  const { sendMessage } = useChat();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMessage(input, isAdmin);
    setInput("");
  };

  return (
    <form className="relative mx-10 my-5" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Message"
        className="w-full p-3 pr-12 rounded-full border-[1px] drop-shadow-md border-zinc-500"
      />
      <button
        type="submit"
        className="hover:text-blue-500 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600"
      >
        <SendHorizontal />
      </button>
    </form>
  );
}
