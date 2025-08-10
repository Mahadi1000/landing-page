"use client";
import { motion } from "motion/react";
import React from "react";
import { Button } from "./ui/button";
import { Github, Twitter } from "lucide-react";
import CommunityPostCard from "./community-post-card";
const communityPosts = [
  {
    id: 1,
    user: {
      name: "Alex Thompson",
      username: "@alexdev",
      avatar: "/images/avatars/annette-black.png",
    },
    content:
      "Just shipped a full-stack app in 2 hours using Pointer's AI agents! The parallel coding feature is a game-changer 🚀",
    image: "/placeholder.svg?height=300&width=500",
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: "2h ago",
    tags: ["#PointerAI", "#WebDev", "#AI"],
  },
  {
    id: 2,
    user: {
      name: "Maria Garcia",
      username: "@mariacodes",
      avatar: "/images/avatars/dianne-russell.png",
    },
    content:
      "The real-time collaboration in Pointer is incredible. My team's productivity has increased by 300%! 💪",
    image: "/placeholder.svg?height=300&width=500",
    likes: 189,
    comments: 32,
    shares: 8,
    timestamp: "4h ago",
    tags: ["#TeamWork", "#Productivity", "#PointerAI"],
  },
  {
    id: 3,
    user: {
      name: "David Kim",
      username: "@davidbuilds",
      avatar: "/images/avatars/cameron-williamson.png",
    },
    content:
      "From idea to deployment in minutes. Pointer's Vercel integration is seamless! Check out my latest project:",
    image: "/placeholder.svg?height=300&width=500",
    likes: 156,
    comments: 28,
    shares: 15,
    timestamp: "6h ago",
    tags: ["#Deployment", "#Vercel", "#PointerAI"],
  },
  {
    id: 4,
    user: {
      name: "Sarah Johnson",
      username: "@sarahcodes",
      avatar: "/images/avatars/darlene-robertson.png",
    },
    content:
      "AI code reviews caught 3 critical bugs before deployment. Pointer literally saved my weekend! 🙏",
    likes: 298,
    comments: 67,
    shares: 23,
    timestamp: "8h ago",
    tags: ["#CodeReview", "#BugFree", "#PointerAI"],
  },
];

const CommunityShowcase = () => {
  return (
    <section className="w-full px-5 py-16 md:py-24 relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />

      <div>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="!text-gradient">Community Spotlight</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            See what amazing projects our community is building with Pointer AI.
            Join thousands of developers creating the future.
          </p>
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              className="glass-effect border-glass-border hover:bg-glass bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              Follow on GitHub
            </Button>
            <Button
              variant="outline"
              className="glass-effect border-glass-border hover:bg-glass bg-transparent"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Join Twitter
            </Button>
          </div>
        </motion.div>

        {/* community posts card */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {communityPosts.map((post, index) => (
            <CommunityPostCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover-lift glow-effect">
            Share Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
