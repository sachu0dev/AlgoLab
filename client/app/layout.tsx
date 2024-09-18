import type {Metadata} from "next";

import React from "react";
import localFont from "next/font/local";
import "./globals.css";

import StoreProvider from "@/lib/StoreProvider";
import {ThemeProvider} from "@/components/themeProvider";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AlgoLab",
  description: "AlgoLab is a project that helps you learn algorithms.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            attribute="class"
            defaultTheme="system"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
