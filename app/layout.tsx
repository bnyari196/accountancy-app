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
  display: 'swap', 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Tyrone Tax & VAT Specialists | Professional Accounting Services",
  description: "Professional accounting services for individuals and small businesses across Tyrone and surrounding areas. Bookkeeping, VAT, Self-Assessment, and Business Advisory services.",
  keywords: ["accounting", "tax", "VAT", "bookkeeping", "Tyrone", "Omagh", "Northern Ireland", "self-assessment", "business advisory", "HMRC", "payroll", "company formation"],
  authors: [{ name: "Tyrone Tax & VAT Specialists" }],
  creator: "Tyrone Tax & VAT Specialists",
  publisher: "Tyrone Tax & VAT Specialists",
  metadataBase: new URL('https://tyronetax.co.uk'),
  alternates: {
    canonical: 'https://tyronetax.co.uk',
  },
  openGraph: {
    title: "Tyrone Tax & VAT Specialists | Professional Accounting Services",
    description: "Professional accounting services for individuals and small businesses across Tyrone and surrounding areas. Expert bookkeeping, VAT, Self-Assessment, and Business Advisory services.",
    url: "https://tyronetax.co.uk",
    siteName: "Tyrone Tax & VAT Specialists",
    images: [
      {
        url: "/BrowserLogo.png",
        width: 1200,
        height: 630,
        alt: "Tyrone Tax & VAT Specialists - Professional Accounting Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyrone Tax & VAT Specialists | Professional Accounting Services",
    description: "Professional accounting services for individuals and small businesses across Tyrone and surrounding areas.",
    images: ["/BrowserLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add Google Search Console verification
    // bing: 'your-bing-verification-code', // Add Bing verification if needed
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Tyrone Tax & VAT Specialists",
    "description": "Professional accounting services for individuals and small businesses across Tyrone and surrounding areas.",
    "url": "https://tyronetax.co.uk",
    "telephone": "+44-7485-731689",
    "email": "tyronetax@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Omagh",
      "addressRegion": "County Tyrone",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.5973",
      "longitude": "-7.3086"
    },
    "openingHours": "Mo-Su 08:30-17:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "54.5973",
        "longitude": "-7.3086"
      },
      "geoRadius": "50000"
    },
    "priceRange": "££", // Add price range
    "areaServed": [
      {
        "@type": "City",
        "name": "Omagh"
      },
      {
        "@type": "City",
        "name": "Cookstown"
      },
      {
        "@type": "City",
        "name": "Dungannon"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VAT Registration & Returns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Self-Assessment Tax Returns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bookkeeping Services"
          }
        }
      ]
    }
  }

  return (
    <html lang="en-GB"> 
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
