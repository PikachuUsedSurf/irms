import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import React from "react";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ReportModal from "./components/modals/ReportModal";

export const metadata = {
  title: "Report Management System",
  description: "created by Aurameow",
};

const font = JetBrains_Mono({ weight: "400", preload: false });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <ReportModal/>
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
