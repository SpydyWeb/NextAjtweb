// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import "../i18n.js";
import { I18nProvider } from "./I18nProvider";
import FooterCard from './../components/layout/footercard';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Next.js App",
  description:
    "A comprehensive Next.js application with proper folder structure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <div className="min-h-screen flex flex-col  pr-[100px] pl-[100px]">
            <Header /> {/* now wrapped correctly */}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
           <FooterCard />
        </I18nProvider>
      </body>
    </html>
  );
}
