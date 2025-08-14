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
  title: 'Passakorn Limseng - Full Stack Developer',
  description: 'Computer Engineering student specializing in interactive web applications',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript', 'web development'],
  authors: [{ name: 'Passakorn Limseng' }],
  openGraph: {
    title: 'Passakorn Limseng - Portfolio',
    description: 'Interactive portfolio showcasing modern web development skills',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passakorn Limseng - Portfolio',
    description: 'Interactive portfolio showcasing modern web development skills',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
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
