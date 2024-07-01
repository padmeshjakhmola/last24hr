import type { Metadata } from "next";
import "./globals.css";
import { wixMadeforDisplay } from "./fonts";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "last24hr",
  description:
    "The ultimate destination for staying informed with real-time updates from around the globe. Our platform is designed to keep you in the know with the most recent news, personalized feeds, and breaking news alerts. Whether you're interested in politics, sports, entertainment, technology, or local news, last24hr has it all covered",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={wixMadeforDisplay.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
