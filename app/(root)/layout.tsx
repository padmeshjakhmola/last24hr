import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}
