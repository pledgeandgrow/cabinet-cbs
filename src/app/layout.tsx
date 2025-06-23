import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import AccessibilityEnhancements from "@/components/ui/AccessibilityUtils";
import CookieConsent from "@/components/legal/CookieConsent";
import SchemaOrg from "@/components/seo/SchemaOrg";
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
  title: "Cabinet CBS | Conseil Fiscal au Mali",
  description: "Cabinet BOURAIMA SIDIBE, conseil fiscal agréé offrant des prestations en matière fiscale, juridique, sociale et en gestion des ressources humaines au Mali et à l'international.",
  keywords: "conseil fiscal, Mali, juridique, ressources humaines, externalisation, Cabinet CBS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <SchemaOrg />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 transition-colors duration-300`}
        suppressHydrationWarning
      >
        <AccessibilityEnhancements />
        <div className="flex min-h-screen flex-col">
          <SkipToContent />
          <Navbar />
          {/* Spacer to prevent content from overlapping with fixed navbar */}
          <div className="h-24 md:h-28"></div>
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
