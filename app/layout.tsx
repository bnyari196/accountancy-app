import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Banner from './Banner';
import NavBar from './NavBar';
import Footer from './Footer';
import WhatsAppPopup from './components/WhatsAppPopup';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyrone Tax & VAT Specialists | Professional Accounting Services",
  description: "Professional accounting services for individuals and small businesses across Tyrone and surrounding areas. Bookkeeping, VAT, Self-Assessment, and Business Advisory services.",
  keywords: ["accounting", "tax", "VAT", "bookkeeping", "Tyrone", "Omagh", "Northern Ireland"],
  authors: [{ name: "Tyrone Tax & VAT Specialists" }],
  creator: "Tyrone Tax & VAT Specialists",
  publisher: "Tyrone Tax & VAT Specialists",
  metadataBase: new URL('https://tyronetax.co.uk'),
  openGraph: {
    title: "Tyrone Tax & VAT Specialists",
    description: "Professional accounting services for individuals and small businesses across Tyrone and surrounding areas.",
    url: "https://tyronetax.co.uk",
    siteName: "Tyrone Tax & VAT Specialists",
    images: [
      {
        url: "/BrowserLogo.png",
        width: 1200,
        height: 630,
        alt: "Tyrone Tax & VAT Specialists",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyrone Tax & VAT Specialists",
    description: "Professional accounting services for individuals and small businesses across Tyrone and surrounding areas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Add the main favicon
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
        {/* Fixed header */}
        <header className="fixed top-0 left-0 right-0 w-full z-50">
          <Banner />
          <NavBar />
        </header>
        
        {/* Main content */}
        <main className="pt-[120px] md:pt-[100px]">
          {children}
        </main>
        
        <Footer />
        <WhatsAppPopup />
      </body>
    </html>
  );
}
