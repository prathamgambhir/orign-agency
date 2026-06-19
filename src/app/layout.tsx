import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Orign",
    template: "%s | Orign"
  },
  description:
    "Orign is an elite creative agency architecting high-performance websites, premium videography, luxury photography, automated social video clipping, showrunning podcasts, and content growth systems for high-momentum brands.",
  keywords: [
    "premium creative agency",
    "nextjs web development",
    "brand videography studio",
    "commercial photography",
    "short form video clipping",
    "podcast production services",
    "organic social media management",
    "b2b brand scaling engine",
    "luxury digital design system",
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
    title: "Orign Creative Agency | Premium Web Dev, Video & Podcast Production",
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
    title: "Orign Creative Agency | Premium Content Systems",
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
    <html lang="en" className="h-full antialiased scroll-smooth">
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
        </main>
        
        {/* Overhauled Semantic, Accessible and SEO-Optimized Neo-Brutalist Footer Element */}
        <footer className="bg-[#07111f] text-white py-16 md:py-20 border-t border-[#07111f] relative z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="sr-only">Footer Navigation</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
              
              {/* Branding Block */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.jpeg"
                    alt="Orign Agency Corporate Emblem"
                    width={44}
                    height={44}
                    className="rounded-full border border-white/10 shadow-md"
                    priority
                  />
                  <span className="text-xl font-black uppercase tracking-tighter">Orign</span>
                </div>
                <p className="text-sm text-gray-400 max-w-xs leading-relaxed font-medium">
                  Architecting high-retention content engines and bulletproof digital products for market-disrupting brands.
                </p>
              </div>

              {/* Services Navigation Link Block */}
              <nav aria-label="Services Navigation Link Loop">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-500">// Core Services</h3>
                <ul className="space-y-3 text-sm font-bold text-gray-400">
                  <li><Link href="/webdev" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Web Development</Link></li>
                  <li><Link href="/videography" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Videography</Link></li>
                  <li><Link href="/photography" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Photography</Link></li>
                  <li><Link href="/clipping" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Video Clipping</Link></li>
                </ul>
              </nav>

              {/* Studio Systems Link Block */}
              <nav aria-label="Studio Channels Layout Link Loop">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-500">// Studio Systems</h3>
                <ul className="space-y-3 text-sm font-bold text-gray-400">
                  <li><Link href="/podcasts" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Podcast Production</Link></li>
                  <li><Link href="/social-media" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Social Management</Link></li>
                  <li><Link href="/contact" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Secure a Quote</Link></li>
                  <li><Link href="/#reviews" className="hover:text-[#b9ff17] transition-colors duration-200 block py-0.5">Partner Reviews</Link></li>
                </ul>
              </nav>

              {/* Social Distribution Link Block */}
              <nav aria-label="Social Interaction Link Loop">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-500">// Connect</h3>
                <ul className="space-y-3 text-sm font-bold text-gray-400">
                  <li><a href="https://twitter.com/orignagency" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-0.5">Twitter / X</a></li>
                  <li><a href="https://instagram.com/orignagency" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-0.5">Instagram</a></li>
                  <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-0.5">LinkedIn Hub</a></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors block py-0.5">Direct Desk Email</Link></li>
                </ul>
              </nav>

            </div>

            {/* Copyright & Engine Versioning Matrix */}
            <div className="border-t border-white/10 pt-8 text-xs font-bold text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>&copy; 2026 Orign Creative Agency. All rights corporate reserved.</p>
              <div className="flex items-center gap-4 tracking-widest uppercase text-[10px] text-white/30">
                <span>Ecosystem // v2.0.4</span>
                <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}