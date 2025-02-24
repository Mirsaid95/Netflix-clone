import "./globals.css";

import { Provider } from "@/provider";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import GlobalContext from "@/context";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netflix clone",
  description: "Netflix clone by create next app",
};

export default function RootLayout({
  children,
}:{
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalContext>
            {children}
          </GlobalContext>
        </Provider>
      </body>
    </html>
  );
}
