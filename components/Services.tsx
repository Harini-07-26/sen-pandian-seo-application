'use client';

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

const services = [
  {
    title: "SEO Optimization",
    description: "Boost your rankings and organic traffic with data‑driven strategies.",
    icon: "🔍",
  },
  {
    title: "Paid Advertising",
    description: "Targeted campaigns on Google, Facebook, and LinkedIn for instant leads.",
    icon: "💰",
  },
  {
    title: "Content Marketing",
    description: "Engaging blogs, videos, and social posts that convert visitors.",
    icon: "✍️",
  },
  {
    title: "Web Design",
    description: "Premium, conversion‑focused websites built with Next.js & Tailwind.",
    icon: "🎨",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-deepBlue via-electricPurple to-pink-600 opacity-80"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <motion.div key={svc.title} whileHover={{ scale: 1.05 }} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center text-4xl">{svc.icon}</CardHeader>
                <CardTitle className="text-xl text-center mt-2">{svc.title}</CardTitle>
                <CardContent className="flex-1 text-center">
                  <p className="text-sm text-muted-foreground mt-2 mb-4">{svc.description}</p>
                  <Badge variant="secondary" className="cursor-pointer">
                    Learn More <ArrowRight className="inline-block ml-1 h-3 w-3" />
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
