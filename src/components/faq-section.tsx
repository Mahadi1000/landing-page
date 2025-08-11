"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
const faqData = [
  {
    question: "What is Pointer and who is it for?",
    answer:
      "Pointer is an AI-powered development platform designed for developers, teams, and organizations who want toaccelerate their coding workflow. It's perfect for both individual developers looking to enhance their productivity and teams seeking seamless collaboration tools.",
  },
  {
    question: "How does Pointer's AI code review work?",
    answer:
      "Our AI analyzes your code in real-time, providing intelligent suggestions for improvements, catching potential bugs, and ensuring best practices. It learns from your coding patterns and adapts to your team's standards, making code reviews faster and more consistent.",
  },
  {
    question: "Can I integrate Pointer with my existing tools?",
    answer:
      "Yes! Pointer offers one-click integrations with popular development tools including GitHub, GitLab, VS Code, Slack, and many more. Our MCP connectivity allows you to easily manage and configure server access across your entire development stack.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes real-time code suggestions, basic integrations, single MCP server connection, up to 2 AI coding agents, and Vercel deployments with Pointer branding. It's perfect for individual developers getting started.",
  },
  {
    question: "How do parallel coding agents work?",
    answer:
      "Our parallel coding agents can work on different parts of your codebase simultaneously, solving complex problems faster than traditional single-threaded approaches. You can launch multiple agents to handle different tasks like bug fixes, feature development, and code optimization concurrently.",
  },
  {
    question: "Is my code secure with Pointer?",
    answer:
      "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data transmission, and compliance with industry standards. Your code never leaves your secure environment without your explicit permission, and we offer on-premises deployment options for enterprise customers.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    toggleItem(index);
  };
  const toggleItem = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about Pointer and how it can transform
            your development workflow
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
            onClick={(e) => handleClick(e, index)}
          >
            <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
              <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">
                {faq.question}
              </div>
              <div className="flex justify-center items-center">
                <ChevronDown
                  className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${
                    activeIndex === index
                      ? "rotate-180 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                />
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transitionProperty: "max-height, opacity, padding",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div
                className={`px-5 transition-all duration-500 ease-out ${
                  activeIndex === index
                    ? "pb-[18px] pt-2 translate-y-0"
                    : "pb-0 pt-0 -translate-y-2"
                }`}
              >
                <div className="text-foreground/80 text-sm font-normal leading-6 break-words">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
