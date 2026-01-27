import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Bungee} from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";  // Assuming you want Inter; if Geologica, import that instead

const interFont = Inter({
  variable: "--font-inter",  // Changed to match Inter font
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const bungeeFont = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
})
// const satoshiFont = Satoshi({
//   variable: "--font-satoshi",
//   src: [
//     {
//       path: '../assets/fonts/Satoshi-Regular.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/Satoshi-Medium.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/Satoshi-Black.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/Satoshi-Light.woff2',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/Satoshi-Bold.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//   ]
// })

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
        className={`${interFont.variable} ${bungeeFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}