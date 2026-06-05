'use client';

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    company: "TechNova",
    role: "CEO & Founder",
    rating: 5,
    comment: "Their SEO strategy tripled our organic traffic in 3 months — nothing else compares. Absolutely game-changing.",
    avatar: "AR",
  },
  {
    name: "Maya Patel",
    company: "CreativePulse",
    role: "Marketing Director",
    rating: 5,
    comment: "Stunning design and great support. Our leads increased by 40% after the redesign. Highly recommend!",
    avatar: "MP",
  },
  {
    name: "Liam O'Connor",
    company: "FinEdge",
    role: "VP of Growth",
    rating: 5,
    comment: "Data‑driven campaigns delivered ROI beyond expectations. A team that truly understands performance marketing.",
    avatar: "LO",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 bg-muted/50">
      {/* Ambient glow */}
      <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-electricPurple/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-electricPurple to-neonPink bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Don&apos;t just take our word for it — hear from our partners.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-primary/20"
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20 transition-colors duration-300 group-hover:text-primary/40" />
                </div>

                {/* Comment */}
                <p className="flex-grow text-foreground/80 leading-relaxed mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electricPurple to-neonPink text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
