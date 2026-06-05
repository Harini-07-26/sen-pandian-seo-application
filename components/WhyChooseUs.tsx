'use client';

import { motion } from "framer-motion";
import { CheckCircle, Paintbrush, BarChart3, Layers, Headphones } from "lucide-react";

const items = [
  {
    title: "Premium Design",
    description: "Eye‑catching UI that converts visitors into leads with stunning experiences.",
    icon: Paintbrush,
    color: "from-neonCyan to-blue-500",
  },
  {
    title: "Data‑Driven Strategy",
    description: "Analytics & SEO built into every campaign for maximum ROI.",
    icon: BarChart3,
    color: "from-neonPink to-rose-500",
  },
  {
    title: "Scalable Solutions",
    description: "Grow from startup to enterprise effortlessly with our tech stack.",
    icon: Layers,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Dedicated Support",
    description: "24/7 assistance from certified marketing experts worldwide.",
    icon: Headphones,
    color: "from-emerald-400 to-teal-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 bg-background">
      {/* Subtle ambient glow */}
      <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-electricPurple/5 blur-[120px]" />
      <div className="absolute left-0 bottom-10 h-[250px] w-[250px] rounded-full bg-neonCyan/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Why Us
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-electricPurple to-neonPink bg-clip-text text-transparent">
              ExPandify Digital?
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We combine creativity with analytics to deliver results that matter.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex h-full flex-col items-center text-center rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-primary/20"
              >
                {/* Icon with animated glow ring */}
                <div className="relative mb-6">
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                  />
                  <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle check indicator */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary/60">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Included in all plans
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
