import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cofecoders.netlify.app/"),
  title: "Cork Female Coders",
  description: "Cork Female Coders Official Website",
  keywords: [
    "Coding",
    "Cork Coders",
    "Female Coders",
    "Female Programmers",
    "Women in Tech",
    "@cofecoders",
  ],
  creator: "Stella Wang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth bg-gradient-to-r from-purple-500 to-blue-600"
    >
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col font-spacemono">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
