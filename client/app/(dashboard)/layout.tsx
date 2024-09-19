import type {Metadata} from "next";

import localFont from "next/font/local";
import React from "react";

// Load custom fonts
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "dashboard",
  description: "AlgoLab is a project that helps you learn algorithms.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
    >
      {children}
    </div>
  );
}
