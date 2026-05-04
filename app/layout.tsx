import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = "https://yangpentingkode.com";
const description =
  "Digital agency yang membantu founder, startup, dan brand membangun produk digital yang cepat, scalable, dan siap memenangkan pasar — dari konsep sampai launch.";

export const metadata: Metadata = {
  title: {
    default: "Yang Penting Kode — Digital Agency",
    template: "%s | Yang Penting Kode",
  },
  description,
  keywords: [
    "digital agency",
    "web development",
    "mobile app development",
    "Next.js",
    "startup",
    "Indonesia",
    "Yang Penting Kode",
    "YPK",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Yang Penting Kode",
    title: "Yang Penting Kode — Digital Agency",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yang Penting Kode — Digital Agency",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
