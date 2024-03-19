import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MenuContainer from "@/components/MenuContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahad Mahmud | Full-stack Web Developer",
  description:
    "I am a full-stack web developer, i use Next.js, React.js, TypeScript and many other tools to create robust web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuContainer />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
