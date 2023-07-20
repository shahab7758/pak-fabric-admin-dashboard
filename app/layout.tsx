import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import { ToasterProvider } from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";

export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
