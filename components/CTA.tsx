'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative text-white py-20 text-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-deepBlue via-electricPurple to-pink-600 opacity-80"></div>
      <div className="relative max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Brand?</h2>
        <p className="text-lg mb-8">Let our team craft a data‑driven marketing strategy that converts visitors into loyal customers.</p>
        <Link href="/contact">
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <Button size="lg" className="bg-primary-900 hover:bg-primary-800 text-primary-100">
              Get In Touch
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
