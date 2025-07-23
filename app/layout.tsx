import type { Metadata } from "next";
import {ClerkProvider} from '@clerk/nextjs'
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlannedIt",
  description: "Next-Gen Booking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
        <ClerkProvider>
          <Header/>
          <SyncUserWithConvex/>
          {children}
          <Toaster/>
        </ClerkProvider>
        </ConvexClientProvider>
        
      </body>
    </html>
  );
}
