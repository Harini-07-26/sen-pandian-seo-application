import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency",
  description: "Premium agency platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
