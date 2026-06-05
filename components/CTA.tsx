'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-deepBlue via-electricPurple/80 to-neonPink/60">
      {/* Animated ambient glow */}
      <motion.div
        className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-neonCyan/15 blur-[140px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-neonPink/15 blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-neonCyan" />
            Limited Time Offer
          </motion.div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-neonCyan to-neonPink bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Brand?
          </h2>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/60">
            Let our team craft a data‑driven marketing strategy that converts
            visitors into loyal customers. Start seeing results in 30 days.
          </p>

          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,255,255,0.25)" }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="group rounded-full bg-white px-10 py-6 text-base font-semibold text-deepBlue shadow-xl transition-all duration-300 hover:bg-white/90"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-transparent px-10 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                >
                  View Our Work
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-6 text-sm text-white/40"
          >
            ⭐ Rated 4.9/5 from 200+ clients • No contracts required
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
