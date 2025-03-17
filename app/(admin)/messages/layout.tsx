import { MessagesList } from "./MessagesList";

export default function MessagesLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <main className="flex">
      <MessagesList />
      <section className="flex-1">{children}</section>
    </main>
  );
}
