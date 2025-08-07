'use client'
import React, { HTMLAttributes } from "react";
import { motion } from "motion/react";

interface AnimatedSectionProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    | "onDrag"
    | "onDragEnd"
    | "onDragEnter"
    | "onDragExit"
    | "onDragLeave"
    | "onDragOver"
    | "onDragStart"
    | "onDrop"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({
  children,
  className,
  delay,
  ...props
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.6, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
