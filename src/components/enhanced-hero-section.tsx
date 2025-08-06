"use client";
import { motion } from "motion/react";
import React from "react";
import Header from "./header";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
const EnhancedHeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4 w-full h-[400px] md:w-[1220px] md:h-[600px] lg:h-[810px] md:px-0">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, oklch(0.7 0.15 180 / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, oklch(0.7 0.25 300 / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, oklch(0.8 0.25 180 / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, oklch(0.7 0.25 320 / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      {/* Hero Content */}
      <motion.div
        className="relative z-10 space-y-6 md:space-y-8 lg:space-y-10 mb-8 md:mb-10 lg:mb-12 max-w-md md:max-w-[600px] lg:max-w-[700px] mt-16 md:mt-[120px] lg:mt-[160px] px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-medium text-foreground">
            Trusted by 10,000+ developers
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-foreground text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-gradient">Unleash the Power</span>
          <br />
          of AI Agents
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Accelerate your development workflow with intelligent AI agents that
          write, review, and optimize your code in real-time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="" target="_blank" rel="noopener noreferrer">
            <Button
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover-lift glow-effect"
              size="lg"
            >
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Button
            variant="outline"
            className="group glass-effect border-glass-border hover:bg-glass px-8 py-4 rounded-full font-semibold text-lg hover-lift bg-transparent"
            size="lg"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { label: "Lines of Code Generated", value: "10M+" },
            { label: "Active Developers", value: "50K+" },
            { label: "Projects Deployed", value: "100K+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
