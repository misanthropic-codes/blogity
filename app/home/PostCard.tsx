import React from "react";
import type { Post } from "@prisma/client";
import Link from "next/link";

type Props = {
  post: Post;
  className?: string;
};

const PostCard = ({ post, className }: Props) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`
        ${className}
        block h-full w-full 
        rounded-xl
        bg-white/5
        border border-white/10
        transition-all duration-500
        hover:border-white/20
        group relative overflow-hidden
      `}
    >
      <div className="p-6 relative z-10">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
          {post.title}
        </h3>
        <p className="line-clamp-6 text-gray-400">{post.content}</p>
      </div>

      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  );
};

export default PostCard;
