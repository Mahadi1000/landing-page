"use client";
import React, { useState } from "react";
import AiCodeReviews from "./bento/ai-code-reviews";
import RealtimeCodingPreviews from "./bento/real-time-previews";
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustrations";
import McpConnectivityIllustration from "./bento/mcp-connectivity-illustration";
import ParallelCodingAgents from "./bento/parallel-agents";
import DeploymentEasy from "./bento/easy-deployment";
import { motion } from "motion/react";

export function InteractiveBentoSection() {
  const cards = [
    {
      title: "AI-powered code reviews",
      description:
        "Get real-time, smart suggestions for cleaner code with advanced AI analysis.",
      Component: AiCodeReviews,
    },
    {
      title: "Real-time coding previews",
      description:
        "Chat, collaborate, and instantly preview changes together in real-time.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "One-click integrations",
      description:
        "Easily connect your workflow with popular dev tools and services.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "Flexible MCP connectivity",
      description:
        "Effortlessly manage and configure MCP server access across your stack.",
      Component: McpConnectivityIllustration,
    },
    {
      title: "Launch parallel coding agents",
      description:
        "Solve complex problems faster with multiple AI agents working simultaneously.",
      Component: ParallelCodingAgents,
    },
    {
      title: "Deployment made easy",
      description:
        "Go from code to live deployment on Vercel instantly with zero configuration.",
      Component: DeploymentEasy,
    },
  ];

  return (
    <section>
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-8">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="w-[400px] h-[600px] absolute top-[200px] right-[100px] origin-top-right rotate-[25deg] bg-accent-purple/5 blur-[100px] z-0" />
      </div>

      {/* header */}
      <motion.div
        className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-4 z-10"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.6, 1] }}
      >
        <div className="flex flex-col justify-start items-center gap-6">
          <h2 className="w-full max-w-[700px] text-center text-foreground text-4xl md:text-6xl font-bold leading-tight md:leading-[66px]">
            <span className="text-gradient">Empower Your Workflow</span>
            <br />
            with AI
          </h2>
          <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            Experience the future of development with AI agents that understand
            your code, collaborate in real-time, and streamline your entire
            workflow.
          </p>
        </div>
      </motion.div>
      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {cards.map((card, index) => (
          <InteractiveBentoCard key={card.title} {...card} index={index} />
        ))}
      </div>
    </section>
  );
}

const InteractiveBentoCard = ({
  title,
  description,
  Component,
  index,
}: {
  title: string;
  description: string;
  Component: React.FC;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-glass-border flex flex-col justify-start items-start cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          background: isHovered
            ? "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent-purple) / 0.1))"
            : "rgba(231, 236, 235, 0.08)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          boxShadow: isHovered
            ? "0 0 40px hsl(var(--primary) / 0.2)"
            : "0 0 0px hsl(var(--primary) / 0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
        <motion.div
          className="self-stretch flex flex-col justify-start items-start gap-1.5"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="self-stretch text-foreground text-xl font-semibold leading-7">
            {title}
          </p>
          <p className="self-stretch text-muted-foreground text-base leading-6">
            {description}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="self-stretch h-72 relative -mt-0.5 z-10"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Component />
      </motion.div>
    </motion.div>
  );
};
