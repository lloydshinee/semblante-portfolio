import { Navbar } from "../components/Navbar";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      {children}
    </main>
  );
}
