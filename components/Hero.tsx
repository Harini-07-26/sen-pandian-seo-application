"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const trustedLogos = ["Airbnb", "Amazon", "FedEx", "Google", "Microsoft"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deepBlue via-electricPurple/90 to-neonPink/70 min-h-screen">
      {/* Animated ambient blobs */}
      <motion.div
        className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-neonCyan/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-80px] bottom-[-60px] h-[500px] w-[500px] rounded-full bg-neonPink/25 blur-[140px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-[300px] w-[300px] rounded-full bg-electricPurple/15 blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-neonCyan animate-pulse" />
            🚀 Top SEO &amp; Digital Marketing Agency
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Elevate Your Brand
            <br />
            with Expert{" "}
            <span className="bg-gradient-to-r from-neonCyan to-neonPink bg-clip-text text-transparent">
              SEO &amp; Digital
            </span>
            <br />
            Marketing
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-white/70"
          >
            Grow your online presence with data-driven SEO,
            performance marketing, and conversion-focused strategies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-deepBlue shadow-lg transition-all duration-300 hover:shadow-neonCyan/20"
              >
                Start Ranking Now
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Contact Now
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating metric cards */}
          <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-5 pt-6">
            {[
              { icon: Search, label: "Organic Reach", value: "4.5M+", color: "text-neonCyan" },
              { icon: Megaphone, label: "Growth Rate", value: "320%", color: "text-neonPink" },
              { icon: TrendingUp, label: "ROI Boost", value: "5.2x", color: "text-emerald-400" },
              { icon: Users, label: "Happy Clients", value: "200+", color: "text-amber-400" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300"
              >
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <span className="text-xs text-white/60">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT – Hero illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Glow ring behind image */}
          <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-full bg-gradient-to-tr from-neonCyan/30 via-electricPurple/20 to-neonPink/30 blur-3xl" />

          <div className="relative">
            <Image
              width={400}
              height={400}
              src="/images/hero-marketing.png"
              alt="Digital Marketing Analytics Dashboard"
              className="relative z-10 w-full max-w-lg rounded-3xl object-cover drop-shadow-2xl"
            />

            {/* Floating analytics card – top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-4 top-8 z-20 rounded-2xl border border-white/20 bg-white/15 p-4 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-white/70">Monthly Visitors</p>
              <p className="text-2xl font-bold text-white">12,839</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                <TrendingUp size={12} /> +24%
              </span>
            </motion.div>

            {/* Floating growth card – bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-4 bottom-12 z-20 rounded-2xl border border-white/20 bg-white/15 p-4 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-white/70">Growth Analytics</p>
              <div className="mt-2 flex items-end gap-1">
                {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-4 rounded-t bg-gradient-to-t from-neonCyan to-electricPurple"
                    initial={{ height: 0 }}
                    animate={{ height: h * 0.4 }}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Trusted companies ticker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-12 px-6 py-6">
          <span className="text-xs font-medium uppercase tracking-widest text-white/40">
            Trusted by
          </span>
          {trustedLogos.map((logo) => (
            <motion.span
              key={logo}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              className="cursor-default text-sm font-semibold tracking-wide text-white/30 transition-colors duration-300 hover:text-white"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}