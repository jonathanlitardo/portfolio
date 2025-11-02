import type React from "react"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Litardo | Cybersecurity Engineer Portfolio",
  description:
    "Professional cybersecurity engineer specializing in AI Security, Red Team operations, and Cloud Defense. Explore my projects, skills, and experience in penetration testing and threat detection.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords:
    "cybersecurity, AI security, red team, penetration testing, cloud security, threat detection, security engineer",
  authors: [{ name: "Jonathan Litardo" }],
  openGraph: {
    title: "Jonathan Litardo | Cybersecurity Engineer",
    description:
      "Professional cybersecurity engineer specializing in AI Security, Red Team operations, and Cloud Defense.",
    type: "website",
  },
  generator: "v0.app",
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
        {children}
      </body>
    </html>
  );
}
