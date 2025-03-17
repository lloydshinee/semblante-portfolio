import { ChatProvider } from "@/providers/ChatProvider";
import { AdminChatBox } from "./AdminChatBox";

export default function ChatPage({ params }: { params: { id: string } }) {
  if (!params.id) return;

  return (
    <ChatProvider chatId={params.id}>
      <AdminChatBox />
    </ChatProvider>
  );
}
