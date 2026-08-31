import type React from "react"
import type { Metadata } from "next"
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GsapProvider } from "@/components/gsap-provider"
import { TransitionProvider } from "@/components/transition-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
})
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Westhafen Consulting",
  description: "Westhafen Consulting is a small private advisory practice. Counsel in writing, signed by its author, for chairs, chief executives, and board committees. Offices in Berlin and New York.",
  keywords: ["executive advisory", "board advisory", "strategic counsel", "governance consulting", "written analysis", "independent advisory"],
  metadataBase: new URL("https://westhafenconsulting.net"),
  alternates: {
    canonical: "https://westhafenconsulting.net",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://westhafenconsulting.net",
    siteName: "Westhafen Consulting",
    title: "Westhafen Consulting",
    description: "A small private advisory practice. Counsel in writing, signed by its author, for chairs, chief executives, and board committees.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Westhafen Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Westhafen Consulting",
    description: "A small private advisory practice. Counsel in writing, signed by its author, for chairs, chief executives, and board committees.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Westhafen Consulting",
  "url": "https://westhafenconsulting.net",
  "publisher": {
    "@type": "Organization",
    "name": "Westhafen Consulting",
    "logo": {
      "@type": "ImageObject",
      "url": "https://westhafenconsulting.net/images/westhafen-logo.png"
    }
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Westhafen Consulting",
  "description": "A small private advisory practice. Counsel in writing, signed by its author, for chairs, chief executives, and board committees.",
  "url": "https://westhafenconsulting.net",
  "logo": "https://westhafenconsulting.net/images/westhafen-logo.png",
  "email": "support@westhafenconsulting.net",
  "telephone": ["+49 176 160 21344", "+1 626 713 1308"],
  "foundingDate": "2024",
  "priceRange": "$$$$",
  "areaServed": ["Europe", "North America"],
  "serviceType": ["Management Consulting", "Strategic Advisory", "Board Advisory", "Executive Counsel", "Governance Consulting"],
  "knowsLanguage": ["English", "German"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@westhafenconsulting.net",
    "telephone": ["+49 176 160 21344", "+1 626 713 1308"]
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Kurfürstendamm 195",
      "addressLocality": "Berlin",
      "postalCode": "10707",
      "addressCountry": "DE"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "347 Fifth Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10016",
      "addressCountry": "US"
    }
  ],
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Advisory Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Written Advisory Memorandum",
          "description": "Comprehensive written analysis on defined strategic or organizational questions, authored under a single signature and kept on file."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Decision Review",
          "description": "Independent scrutiny of decisions close to signature: transactions, capital programmes, operating structure changes, or strategic shifts."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Governance Advisory",
          "description": "Guidance on board structure, succession planning, and governance transitions for closely held and family-controlled organizations."
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <GsapProvider>
          <TransitionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </TransitionProvider>
        </GsapProvider>
      </body>
    </html>
  )
}
