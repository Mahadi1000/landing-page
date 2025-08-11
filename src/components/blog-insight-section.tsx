"use client";
import { ArrowRight, Code, TrendingUp, Zap } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import BlogPostCard from "./blog-post-card";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Development: 5 Trends to Watch",
    excerpt:
      "Discover how AI is reshaping the development landscape and what it means for developers in 2024 and beyond.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Trends",
    image: "/images/product-ui.jpeg",
    icon: TrendingUp,
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Applications with Parallel AI Agents",
    excerpt:
      "Learn how to leverage multiple AI agents to solve complex coding challenges and improve development efficiency.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Development",
    image: "/images/product-ui.jpeg",
    icon: Code,
  },
  {
    id: 3,
    title: "Real-time Collaboration: The New Standard for Dev Teams",
    excerpt:
      "Explore how real-time coding previews and collaborative features are transforming team productivity.",
    author: "Emily Watson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Collaboration",
    image: "/images/product-ui.jpeg",
    icon: Zap,
  },
];

const BlogInsightSection = () => {
  return (
    <section className="py-16 md:py-24 px-5 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Insights & Updates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay ahead of the curve with the latest insights on AI development,
            best practices, and industry trends.
          </p>
          <Button
            variant="outline"
            className="glass-effect border-glass-border hover:bg-glass hover-lift bg-transparent"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* blog posts */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogInsightSection;
