'use client';

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const items = [
    { title: "Premium Design", description: "Eye‑catching UI that converts visitors into leads." },
    { title: "Data‑Driven Strategy", description: "Analytics & SEO built into every campaign." },
    { title: "Scalable Solutions", description: "Grow from startup to enterprise effortlessly." },
    { title: "Dedicated Support", description: "24/7 assistance from marketing experts." },
  ];

  return (
    <section className="relative py-16" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-deepBlue via-electricPurple to-pink-600 opacity-80"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
