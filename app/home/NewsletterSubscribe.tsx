"use client";
import React, { useState } from "react";

type Props = {};

const NewsletterSubscribe = (props: Props) => {
  const [subscribed, setSubscribed] = useState<boolean>(false);

  async function create(formData: FormData) {
    const email = formData.get("email");
    await fetch("/api/beehiiv", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setSubscribed(true);
        }
      })
      .catch((err) => console.log(err));
  }

  if (subscribed)
    return (
      <div className="flex flex-col mt-4 text-white">
        <h2 className="text-2xl font-bold">Thank you for subscribing!</h2>
        <p className="text-gray-400">
          You&apos;ll receive the latest tech news and announcements in your
          inbox.
        </p>
      </div>
    );

  return (
    <form action={create} className="mt-6 flex flex-col items-center">
      <div className="flex items-center w-full max-w-md bg-white/5 rounded-full border border-white/10 overflow-hidden">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="flex-1 py-3 px-4 text-gray-200 bg-transparent placeholder-gray-400 focus:outline-none"
        />
        <button
          className="py-3 px-6 font-semibold text-gray-100 bg-purple-900 hover:bg-purple-800 transition-all duration-300 uppercase"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsletterSubscribe;
