import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Orign | Digital Marketing & Creative Agency",
    template: "%s | Orign | Digital Marketing & Creative Agency",
  },
  description:
    "Orign is an elite creative agency architecting high-performance websites, premium videography, luxury photography, automated social video clipping, showrunning podcasts, and content growth systems for high-momentum brands.",
  keywords: [
    // --- Premium Agency Positioning ---
    "premium creative agency",
    "digital marketing agency India",
    "creative agency for startups",
    "corporate brand design studio",
    "b2b brand scaling engine",
    
    // --- High-End Web Dev Stack ---
    "nextjs web development agency",
    "react developer tailwindcss",
    "premium UI UX design systems",
    "high converting landing pages",
    "custom enterprise web development",
    
    // --- Media & Video Production Ecosystem ---
    "brand videography studio",
    "commercial photography services",
    "multi cam podcast production",
    "podcast studio setup services",
    "professional video editing retainer",
    
    // --- Organic Content Engine ---
    "short form video clipping automation",
    "instagram reels editing agency",
    "youtube shorts marketing strategy",
    "organic social media management",
    "high retention content creation"
  ],
  authors: [{ name: "Orign Studio Team", url: "https://orign.co.in" }],
  creator: "Orign",
  publisher: "Orign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orign.co.in",
    siteName: "Orign Creative",
    title: "Orign | Digital Marketing & Creative Agency",
    description:
      "We build high-performance digital interfaces, premium podcasts, dynamic visual content assets, and structural social media systems that make modern brands impossible to ignore.",
    images: [
      {
        url: "https://orign.co.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Orign Creative Agency Production Frame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orign | Digital Marketing & Creative Agency",
    description:
      "Architecting premium digital assets, high-retention video pipelines, and bespoke web platforms for brands with market momentum.",
    images: ["https://orign.co.in/logo.jpeg"],
    creator: "@orignagency"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/logo.jpeg" },
      { url: "/logo.jpeg", sizes: "32x32", type: "image/jpeg" }
    ],
    apple: [
      { url: "/logo.jpeg", sizes: "180x180", type: "image/jpeg" }
    ],
  },
  alternates: {
    canonical: "https://orign.co.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased scroll-smooth", "font-sans", geist.variable)}>
      <head>
        {/* Explicit alternate favicon declarations to clear stubborn browser tab asset caches */}
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        
        {/* Rich Semantic Structured Data for Search Engine Verification */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Orign",
              "officialName": "Orign Creative Agency",
              "image": "https://orign.co.in/logo.jpeg",
              "url": "https://orign.co.in",
              "logo": "https://orign.co.in/logo.jpeg",
              "description": "An elite creative production agency specializing in bespoke enterprise web development, premium multi-cam videography, commercial photography, strategic social clipping engines, and complete end-to-end podcast production systems.",
              "sameAs": [
                "https://twitter.com/orignagency",
                "https://instagram.com/orignagency",
                "https://linkedin.com/company/orignagency"
              ],
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "knowsAbout": [
                "Web Development",
                "Next.js Development",
                "Videography",
                "Commercial Photography",
                "Short Form Video Infrastructure",
                "Podcast Production Systems",
                "Social Media Architecture",
                "Brand Scaling Strategy"
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fbfaf3] font-sans text-[#07111f] selection:bg-[#b9ff17] selection:text-[#07111f]">
        <SiteNav />
        {/* Main core layout wrapper to pass appropriate semantic index rules to screen crawlers */}
        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}