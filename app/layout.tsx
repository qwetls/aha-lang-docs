import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import {
  WebsiteStructuredData,
  OrganizationStructuredData,
  SoftwareApplicationStructuredData,
} from "@/components/seo/structured-data";
import "fumadocs-ui/style.css";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Override with NEXT_PUBLIC_SITE_URL when using a custom domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aha-lang.vercel.app/";

export const metadata: Metadata = {
  title: {
    default: "AHA! Lang - Easy to read. Powerful to wield.",
    template: "%s | AHA! Lang",
  },
  description:
    "AHA! Lang is a modern programming language with an LLVM backend. A full compiler pipeline in Rust — lexer, Pratt parser, type system, LLVM IR codegen, and JIT execution — built on inkwell with LLVM 14.",
  keywords: [
    "AHA! Lang",
    "programming language",
    "compiler",
    "LLVM",
    "Rust",
    "inkwell",
    "JIT",
    "open source",
    "AHA language",
    "compiler design",
    "expression-oriented",
    "static typing",
  ],
  authors: [
    {
      name: "qwetls",
      url: "https://github.com/qwetls",
    },
  ],
  creator: "qwetls",
  publisher: "AHA! Lang",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "AHA! Lang - Easy to read. Powerful to wield.",
    description:
      "A modern programming language with an LLVM backend. A full compiler pipeline in Rust — lexer, Pratt parser, type system, LLVM IR codegen, and JIT execution.",
    siteName: "AHA! Lang",
    images: [
      {
        url: `${siteUrl}og.png`,
        width: 1200,
        height: 630,
        alt: "AHA! Lang - Easy to read. Powerful to wield.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AHA! Lang - Easy to read. Powerful to wield.",
    description:
      "A modern programming language with an LLVM backend. Lexer, Pratt parser, type system, LLVM IR codegen, and JIT execution — compiled in Rust.",
    images: [`${siteUrl}og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <WebsiteStructuredData />
        <OrganizationStructuredData />
        <SoftwareApplicationStructuredData />
      </head>
      <body className={`${bricolage.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="theme"
          enableSystem={false}
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}