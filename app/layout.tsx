import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevOps Mastery 🚀 | Automatise, Déploie, Réussis",
  description: "Le blog ultime pour apprendre DevOps, CI/CD, Docker, Kubernetes et automatiser vos projets. Tutoriels, outils, roadmap carrière, et bien plus ! 🛠️",
  openGraph: {
    title: "DevOps Mastery",
    //images: "/images/og-devops.png",
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
