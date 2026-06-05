"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border px-4 py-2 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500">
        NovaMark
      </Link>
      <ul className="flex space-x-4 hidden md:flex">
        {navigation.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        {/* Mobile menu trigger could be added later */}
      </div>
    </nav>
  );
}
