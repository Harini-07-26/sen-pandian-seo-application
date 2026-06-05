'use client';

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    company: "TechNova",
    rating: 5,
    comment: "Their SEO strategy tripled our organic traffic in 3 months—nothing else compares.",
  },
  {
    name: "Maya Patel",
    company: "CreativePulse",
    rating: 4,
    comment: "Stunning design and great support. Our leads increased by 40% after the redesign.",
  },
  {
    name: "Liam O'Connor",
    company: "FinEdge",
    rating: 5,
    comment: "Data‑driven campaigns delivered ROI beyond expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md flex flex-col h-full"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Quote className="h-6 w-6 text-primary mb-4" />
              <p className="text-gray-700 dark:text-gray-300 flex-grow mb-4">{t.comment}</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
