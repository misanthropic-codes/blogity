"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/utils/publishPost";
import Link from "next/link";
import Image from "next/image";
import type { Category } from "@prisma/client";
import CategoryDropdown from "@/app/blog/new/CategoryDropdown";
import { Prisma } from "@prisma/client";

import "@uploadthing/react/styles.css";
import { UploadButton } from "@/app/utils/uploadthing";

type Props = {
  blogCategories: Category[];
};

interface SessionUser {
  id: number;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const [postID, setPostID] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!session && status !== "loading")
    return <div className="text-white">You must be signed in to post</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = session?.user as SessionUser;
    const userId = user?.id;

    if (!userId) return;

    try {
      const newPost: Prisma.PostUncheckedCreateInput = {
        title,
        content,
        authorId: userId,
        imgURL: thumbnail,
      };

      if (categoryId) {
        newPost.categories = {
          connect: [{ id: categoryId }],
        };
      }

      const post = await createPost(newPost);
      setPostID(post.id);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (submitted)
    return (
      <div className="py-12 container flex flex-col mt-12">
        <div className="flex flex-col items-center justify-center text-left border p-8 rounded-lg shadow-md bg-white">
          <h1 className="text-3xl font-semibold text-indigo-500">
            Your post has been published!
          </h1>
          <Link
            href={`/blog/${postID}`}
            className="text-indigo-700 text-lg mt-4 hover:underline"
          >
            Click here to view your post
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-130px)] py-12 container flex flex-col mt-0 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <form
        className="relative flex flex-col items-center justify-center text-left w-full max-w-2xl mx-auto bg-white/5 shadow-lg p-8 rounded-xl border border-white/10 backdrop-blur-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold text-white mb-4">
          Create a New Post
        </h2>

        <input
          type="text"
          className="w-full text-2xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white bg-black/40 backdrop-blur-md"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />

        <textarea
          name="content"
          className="w-full text-lg p-4 border border-gray-300 rounded-lg mb-4 h-48 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white bg-black/40 backdrop-blur-md"
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="w-full mb-6">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt="Thumbnail"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full mb-4"
            />
          )}
          <label className="block text-white text-sm mb-2">
            {thumbnail ? "Change Image" : "Add thumbnail image (optional)"}
          </label>
          <UploadButton
            className="items-start"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res) {
                setThumbnail(res[0].url);
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        <CategoryDropdown
          list={props.blogCategories}
          selected={categoryId}
          setSelected={(selected: number) => setCategoryId(selected)}
        />

        <button
          type="submit"
          className="mt-6 w-full py-3 px-6 bg-indigo-600 text-white font-semibold text-xl rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
