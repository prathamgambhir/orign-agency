import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "ORIGN | Digital Marketing & Creative Agency",
    template: "%s | ORIGN",
  },
  description:
    "ORIGN is a premium creative agency architecting high-performance websites, professional videography, premium photoshoots, short-form video clipping, podcast production, and content systems for startups and brands.",
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
    "high retention content creation",
  ],
  authors: [{ name: "ORIGN Studio Team", url: "https://orign.co.in" }],
  creator: "ORIGN",
  publisher: "ORIGN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orign.co.in",
    siteName: "Orign",
    title: "ORIGN | Digital Marketing & Creative Agency",
    description:
      "ORIGN builds high-performance websites and premium production systems—web, video, photo, podcast, and short-form edits—for tech startups and growing brands.",
    images: [
      {
        url: "https://orign.co.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "ORIGN Creative Agency Production Frame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORIGN | Digital Marketing & Creative Agency",
    description:
      "Premium websites, professional video production, and high-retention content systems—engineered by ORIGN.",
    images: ["https://orign.co.in/logo.jpeg"],
    creator: "@orign.co.in",
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
      { url: "/logo.jpeg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: [{ url: "/logo.jpeg", sizes: "180x180", type: "image/jpeg" }],
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
    <html
      lang="en"
      className={cn(
        "h-full antialiased scroll-smooth",
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        {/* Explicit alternate favicon declarations to clear stubborn browser tab asset caches */}
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9GECQXK81N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9GECQXK81N');",
          }}
        />

        {/* Rich Semantic Structured Data for Search Engine Verification */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ORIGN",
              officialName: "ORIGN | Digital Marketing & Creative Agency",
              image: "https://orign.co.in/logo.jpeg",
              url: "https://orign.co.in",
              logo: "https://orign.co.in/logo.jpeg",
              description:
              "ORIGN is a premium creative agency architecting high-performance websites, professional videography, premium photoshoots, short-form video clipping, podcast production, and content systems for startups and brands.",
              sameAs: [
                "https://x.com/orign911",
                "https://instagram.com/orign.agency",
                "https://www.linkedin.com/company/orign-agency/",
              ],
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              knowsAbout: [
                "Web Development",

                "Next.js Development",
                "Videography",
                "Commercial Photography",
                "Short Form Video Editing",

                "Podcast Production",
                "Social Media Systems",
                "Brand Scaling Strategy",
                "Video Editing",
                "Video Clipping",
                "Photo Editing",
                "Photography",
                "Video Production",
                "Podcast Studio Setup",
                "Professional Video Editing Retainer",
                "Short Form Video Clipping Automation",
                "Instagram Reels Editing Agency",
                "YouTube Shorts Marketing Strategy",
                "Organic Social Media Management",
              ],
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
