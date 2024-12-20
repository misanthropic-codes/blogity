import React from "react";
import NewsletterSubscribe from "./NewsletterSubscribe";

const CalloutSection = () => {
  return (
    <div className="relative min-h-[60vh] bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-32 right-10 w-72 h-72 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Text Content */}
            <div className="col-span-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Stay in the Know
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Stay up-to-date with the latest tech news and announcements by
                reading our curated articles, ranging from bite-sized pieces to
                in-depth features. Perfect for busy users who want to stay
                informed on the go and for those who prefer to dive deep into a
                topic.
              </p>
              <NewsletterSubscribe />
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            {/* Decorative Elements */}
            <div className="w-12 h-12 bg-purple-900/20 rounded-lg border border-white/10"></div>
            <div className="w-16 h-16 bg-blue-900/20 rounded-lg border border-white/10"></div>
            <div className="w-20 h-20 bg-indigo-900/20 rounded-lg border border-white/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutSection;
