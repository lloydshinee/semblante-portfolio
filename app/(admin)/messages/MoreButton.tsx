import { useState } from "react";
import { EllipsisVertical, Trash2 } from "lucide-react";
import { deleteChat } from "@/hooks/useChats";
import { useRouter } from "next/navigation";

export function MoreButton({ chatId }: { chatId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this chat?")) {
      await deleteChat(chatId);
      router.push("/messages");
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-white p-2 rounded-full hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <EllipsisVertical />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-10">
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            onClick={handleDelete}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
