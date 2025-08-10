import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react";

interface CommunityPostCardProps {
  key: number;
  post: {
    id: number;
    user: {
      name: string;
      username: string;
      avatar: string;
    };
    content: string;
    timestamp: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    tags: string[];
  };
  index?: number;
}

const CommunityPostCard = ({ key, post, index }: CommunityPostCardProps) => {
  const { id, user, content, timestamp, image, likes, comments, shares, tags } =
    post;
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likes - 1 : likes + 1);
  };
  return (
    <motion.div
      className="glass-effect border border-glass-border rounded-2xl p-6 hover-lift"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: key * 0.1 }}
    >
      {/* User Header */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={post.user.avatar || "/placeholder.svg"}
          alt={post.user.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{post.user.name}</h4>
          <p className="text-sm text-muted-foreground">
            {post.user.username} • {post.timestamp}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
      {/* Content */}
      <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Image */}
      {image && (
        <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt="Community post image"
            fill
            className="object-cover"
          />
        </div>
      )}
      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-glass-border">
        <div className="flex items-center gap-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 transition-colors ${
              isLiked
                ? "text-red-500"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            <span className="text-sm font-medium">{likes}</span>
          </button>

          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>

          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CommunityPostCard;
