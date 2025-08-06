"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      // console.log(event)
    };
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    const interactiveElements = document.querySelectorAll(
      "button, a, [data-interactive]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

   return (
     <>
       <motion.div
         className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
         animate={{
           x: mousePosition.x - 8,
           y: mousePosition.y - 8,
           scale: isHovering ? 1.5 : 1,
         }}
         transition={{
           type: "spring",
           stiffness: 500,
           damping: 28,
         }}
       />
       <motion.div
         className="fixed top-0 left-0 w-8 h-8 border-2 border-primary/30 rounded-full pointer-events-none z-50"
         animate={{
           x: mousePosition.x - 16,
           y: mousePosition.y - 16,
           scale: isHovering ? 2 : 1,
         }}
         transition={{
           type: "spring",
           stiffness: 150,
           damping: 15,
         }}
       />
     </>
   );
}
