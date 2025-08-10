import React from "react";

import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, LucideProps } from "lucide-react";
import Image from "next/image";
interface BlogPostCardProps {
  key: number;
  post: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
    featured?: boolean;
  };
  index: number;
}

const BlogPostCard = ({ key, post, index }: BlogPostCardProps) => {
  const {
    title,
    excerpt,
    author,
    date,
    readTime,
    category,
    image,
    icon: Icon,
    featured,
  } = post;
  return (
    <motion.article
      key={key}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-xl border border-glass-border glass-effect hover-lift hover:border-glass-border cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-64" : "h-48"}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{category}</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3
          className={`font-bold text-foreground group-hover:text-primary transition-colors ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{excerpt}</p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-medium">{author}</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;
