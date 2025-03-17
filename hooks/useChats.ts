import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export interface Message {
  id: string;
  body: string;
  timestamp: Timestamp;
  isAdmin: boolean;
}

export interface Chat {
  id: string;
  createdAt?: Timestamp;
  lastMessage?: Message | null;
}

export function useChats() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    console.log("Setting up Firestore chat listener...");

    const chatsRef = collection(firestore, "chats");

    // Listen for real-time changes in the chats collection
    const unsubscribeChats = onSnapshot(
      chatsRef,
      (chatSnapshot) => {
        console.log("Chats Snapshot Received:", chatSnapshot.docs.length);

        if (chatSnapshot.empty) {
          console.warn("⚠️ No chats found in Firestore!");
          setChats([]);
          return;
        }

        const chatList = chatSnapshot.docs.map((chatDoc) => ({
          id: chatDoc.id,
          createdAt: chatDoc.data().createdAt,
          lastMessage: chatDoc.data().lastMessage || null,
        }));

        // Sort chats based on lastMessage timestamp
        chatList.sort((a, b) => {
          const aTimestamp = a.lastMessage?.timestamp?.seconds || 0;
          const bTimestamp = b.lastMessage?.timestamp?.seconds || 0;
          return bTimestamp - aTimestamp; // Sort in descending order (latest first)
        });

        setChats(chatList);
      },
      (error) => console.error("🔥 Firestore error:", error)
    );

    return () => unsubscribeChats();
  }, []);

  return chats;
}

export const deleteChat = async (chatId: string) => {
  if (!chatId) return;

  try {
    console.log(`Deleting chat with ID: ${chatId}`);

    // Reference to the chat document
    const chatRef = doc(firestore, "chats", chatId);

    // Reference to the messages subcollection
    const messagesRef = collection(chatRef, "messages");
    const messagesSnapshot = await getDocs(messagesRef);

    // Delete all messages in the chat
    const deleteMessagePromises = messagesSnapshot.docs.map((msgDoc) =>
      deleteDoc(msgDoc.ref)
    );
    await Promise.all(deleteMessagePromises);

    // Delete the chat document
    await deleteDoc(chatRef);

    console.log(`✅ Chat ${chatId} and its messages deleted successfully.`);
  } catch (error) {
    console.error("🔥 Error deleting chat:", error);
  }
};
