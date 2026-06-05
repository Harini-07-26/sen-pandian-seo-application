"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Megaphone,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-red-300">
      {/* Decorative circles */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            🚀 Top SEO & Digital Marketing Agency
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-black lg:text-7xl">
            Elevate Your Brand
            <br />
            with Expert SEO &
            <br />
            Digital Marketing
          </h1>

          <p className="max-w-xl text-lg text-gray-600">
            Grow your online presence with data-driven SEO,
            performance marketing, and conversion-focused strategies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-white transition hover:scale-105">
                Start Ranking Now
                <ArrowUpRight size={18} />
              </button>
            </Link>

            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-full border border-primary px-7 py-4 text-primary hover:bg-primary/5">
                Contact Now
                <ArrowUpRight size={18} />
              </button>
            </Link>
          </div>

          {/* Floating metrics */}
          <div className="flex gap-6 pt-8">
            <div className="rounded-xl bg-white p-5 shadow-lg">
              <Search className="text-purple-600" />
              <p className="mt-2 text-2xl font-bold">4.5M+</p>
              <span className="text-sm text-gray-500">
                Organic Reach
              </span>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-lg">
              <Megaphone className="text-indigo-600" />
              <p className="mt-2 text-2xl font-bold">320%</p>
              <span className="text-sm text-gray-500">
                Growth Rate
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative">

            {/* Hero image */}
            <img
              src="/hero-person.png"
              alt="Digital Marketing"
              className="relative z-10 w-full max-w-xl rounded-3xl object-cover"
            />

            {/* Floating card */}
            <div className="absolute right-0 top-10 z-20 rounded-xl bg-white p-4 shadow-xl">
              <p className="text-sm font-semibold">Sudan</p>
              <p className="text-xl font-bold text-purple-600">
                12,8392
              </p>
            </div>

            {/* Analytics card */}
            <div className="absolute bottom-10 left-0 z-20 rounded-xl bg-white p-4 shadow-xl">
              <p className="text-sm text-gray-500">
                Growth Analytics
              </p>
              <div className="mt-2 h-16 w-44 rounded bg-purple-100" />
            </div>

          </div>
        </motion.div>

      </div>

      {/* Trusted */}
      <div className="mx-auto flex max-w-5xl justify-center gap-10 border-t py-8 text-gray-500">
        <span>airbnb</span>
        <span>amazon</span>
        <span>FedEx</span>
        <span>Google</span>
        <span>Microsoft</span>
      </div>
    </section>
  );
}