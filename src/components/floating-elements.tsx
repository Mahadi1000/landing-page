"use client";
import React from "react";
import { motion } from "motion/react";
import { Code, Cpu, GitBranch, Rocket, Sparkles, Zap } from "lucide-react";
const floatingIcons = [
  { Icon: Code, delay: 0, x: "10%", y: "20%" },
  { Icon: Zap, delay: 0.5, x: "80%", y: "15%" },
  { Icon: Sparkles, delay: 1, x: "15%", y: "70%" },
  { Icon: Cpu, delay: 1.5, x: "85%", y: "75%" },
  { Icon: GitBranch, delay: 2, x: "50%", y: "10%" },
  { Icon: Rocket, delay: 2.5, x: "70%", y: "60%" },
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingIcons.map(({ Icon, delay, x, y }) => (
        <motion.div
          key={Icon.displayName}
          className="absolute opacity-10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 1.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
