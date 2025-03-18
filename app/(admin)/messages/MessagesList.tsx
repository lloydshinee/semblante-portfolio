"use client";

import { useChats } from "@/hooks/useChats";
import { GripVertical, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { formatTimestamp } from "@/lib/utils";
import { MoreButton } from "./MoreButton";
import Link from "next/link";

export function MessagesList() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const chats = useChats();

  return (
    <>
      <div
        className={`absolute z-[51] md:hidden top-0 left-0 h-screen w-full bg-black/50 transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggle}
      ></div>
      <div
        className={`w-[80%] md:w-[30rem] h-screen max-h-screen overflow-y-auto overflow-x-clip bg-zinc-900 transition-all duration-500 
        absolute md:static top-0 z-[100] 
        ${open ? "left-0" : "-translate-x-[calc(100%-1rem)] md:translate-x-0"}`}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-4 text-white sticky top-0 bg-zinc-900/20 backdrop-blur-lg z-50">
            <MessageCircle />
            <h1 className="text-2xl font-bold text-white">Messages</h1>
          </div>
          <div className="flex flex-col">
            {chats.length > 0 ? (
              chats.map((chat) => (
                <Link
                  href={`/messages/${chat.id}`}
                  key={chat.id}
                  className="w-full p-4 flex cursor-pointer gap-3 items-center justify-between hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex gap-3 items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full relative">
                      <Image src={"/anon.jpg"} fill alt="User Avatar" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg">Anonymous</h4>
                      <div>
                        <p
                          className={`max-w-[200px] truncate overflow-hidden whitespace-nowrap ${
                            chat.lastMessage?.isAdmin
                              ? "text-zinc-600"
                              : "text-white font-bold"
                          }`}
                        >
                          {chat.lastMessage?.isAdmin
                            ? `You: ${chat.lastMessage.body}`
                            : chat.lastMessage?.body}
                        </p>

                        <p className="text-xs text-gray-500">
                          {chat.lastMessage?.timestamp
                            ? formatTimestamp(chat.lastMessage.timestamp)
                            : "No timestamp"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <MoreButton chatId={chat.id} />
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500">No messages yet.</p>
            )}
          </div>
        </div>
        <div
          className="bg-black rounded-full text-white w-fit absolute z-50 top-1/2 
                -translate-y-1/2 right-[-10px] cursor-pointer md:hidden"
          onClick={toggle}
        >
          <GripVertical size={28} />
        </div>
      </div>
    </>
  );
}
