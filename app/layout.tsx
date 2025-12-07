import type { Metadata } from "next";
import { Manrope, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  variable: "--font-goudy",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dobeon Digital - App Development & Digital Solutions",
  description: "Custom web applications, mobile apps, enterprise systems, and AI-powered solutions for businesses across all industries.",
  keywords: ["app development", "web development", "mobile apps", "enterprise systems", "AI solutions", "software house", "digital solutions"],
  authors: [{ name: "Dobeon Digital" }],
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.jpeg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Dobeon Digital - App Development & Digital Solutions",
    description: "Custom web applications, mobile apps, enterprise systems, and AI-powered solutions for businesses across all industries.",
    type: "website",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sortsMillGoudy.variable} antialiased font-sans`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
