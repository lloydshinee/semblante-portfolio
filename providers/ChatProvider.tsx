"use client";

import { Message } from "@/lib/types";
import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Loader2Icon } from "lucide-react";

interface ChatContextType {
  messages: Message[];
  sendMessage: (body: string, isAdmin: boolean) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({
  children,
  chatId,
}: {
  children: ReactElement;
  chatId: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!chatId) return;

    const chatDocRef = doc(firestore, "chats", chatId);

    const initializeChat = async () => {
      if (!chatId) return;

      try {
        const chatDocRef = doc(firestore, "chats", chatId);
        const chatDocSnap = await getDoc(chatDocRef);

        if (!chatDocSnap.exists()) {
          const welcomeMessage = {
            body: "Hi, How can I help you?",
            isAdmin: true,
            timestamp: serverTimestamp(),
          };

          // Create the chat document with lastMessage field
          await setDoc(chatDocRef, {
            id: chatId,
            createdAt: serverTimestamp(),
            lastMessage: welcomeMessage, // Store lastMessage in the chat doc
          });

          // Add welcome message to the "messages" subcollection
          const messagesRef = collection(chatDocRef, "messages");
          await addDoc(messagesRef, welcomeMessage);

          // Update the lastMessage with the actual Firestore timestamp
          await updateDoc(chatDocRef, {
            "lastMessage.timestamp": serverTimestamp(),
          });
        }
      } catch (error) {
        console.error("🔥 Error initializing chat:", error);
      }
    };

    initializeChat();

    const messagesRef = collection(chatDocRef, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedMessages: Message[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];

        setMessages(fetchedMessages);
        setLoading(false); // ✅ Set loading to false after fetching messages
      },
      (error) => {
        console.error("Error fetching messages:", error);
        setLoading(false); // Ensure loading stops even if there's an error
      }
    );

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async (body: string, isAdmin: boolean) => {
    if (!chatId) return;

    try {
      const newMessage = {
        body,
        isAdmin,
        timestamp: serverTimestamp(),
      };

      const chatRef = doc(firestore, "chats", chatId);
      const messagesRef = collection(chatRef, "messages");

      // Add message to messages subcollection
      const messageDoc = await addDoc(messagesRef, newMessage);

      // Update lastMessage in chat document
      await updateDoc(chatRef, {
        lastMessage: { id: messageDoc.id, ...newMessage },
      });

      console.log("✅ Message sent successfully!");
    } catch (error) {
      console.error("❌ Error sending message:", error);
    }
  };

  const value = { messages, sendMessage };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <Loader2Icon className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
