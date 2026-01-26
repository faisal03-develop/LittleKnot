import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";  // Assuming you want Inter; if Geologica, import that instead

const interFont = Inter({
  variable: "--font-inter",  // Changed to match Inter font
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Little Knot",
  description: "Handmade Hair Accessories, Sweetly Yours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}