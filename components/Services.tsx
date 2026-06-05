'use client';

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

const services = [
  {
    title: "SEO Optimization",
    description: "Boost your rankings and organic traffic with data‑driven strategies that deliver measurable results.",
    icon: "🔍",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    title: "Paid Advertising",
    description: "Targeted campaigns on Google, Facebook, and LinkedIn for instant qualified leads.",
    icon: "💰",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    title: "Content Marketing",
    description: "Engaging blogs, videos, and social posts that convert visitors into loyal customers.",
    icon: "✍️",
    gradient: "from-pink-400 to-rose-600",
  },
  {
    title: "Web Design",
    description: "Premium, conversion‑focused websites built with cutting-edge technology.",
    icon: "🎨",
    gradient: "from-emerald-400 to-teal-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-deepBlue via-deepBlue/95 to-electricPurple/30">
      {/* Ambient glow */}
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-electricPurple/10 blur-[150px]" />
      <div className="absolute right-1/4 bottom-0 h-[350px] w-[350px] rounded-full bg-neonCyan/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neonCyan backdrop-blur-sm mb-4">
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-neonCyan to-neonPink bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/50 text-lg">
            Comprehensive digital marketing solutions tailored to skyrocket your brand.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((svc) => (
            <motion.div key={svc.title} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group h-full"
              >
                <Card className="relative h-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_60px_rgba(0,255,255,0.08)]">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]`} />

                  <CardHeader className="relative z-10 flex flex-col items-center pt-8">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl mb-2"
                    >
                      {svc.icon}
                    </motion.div>
                  </CardHeader>

                  <CardTitle className="relative z-10 text-xl text-center text-white px-4">
                    {svc.title}
                  </CardTitle>

                  <CardContent className="relative z-10 flex-1 text-center px-6 pb-8">
                    <p className="text-sm text-white/50 mt-3 mb-5 leading-relaxed">
                      {svc.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-1.5 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
