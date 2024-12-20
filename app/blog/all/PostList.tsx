import React from "react";
import { Prisma } from "@prisma/client";
import Link from "next/link";

type Post = Prisma.PostGetPayload<{
  include: { categories: true };
}>;

export type PostListProps = {
  posts: Post[];
};

export const PostsList = (props: PostListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {props.posts.map((post) => (
        <div
          key={post.id}
          className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <Link href={`/blog/${post.id}`} className="block">
            <article>
              <figure className="w-full h-60 rounded-t-lg overflow-hidden">
                <img
                  src={post.imgURL || "/article-placeholder.png"}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white truncate mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                  {post.content}
                </p>
                <p className="text-indigo-400 font-medium">Read More</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
};
