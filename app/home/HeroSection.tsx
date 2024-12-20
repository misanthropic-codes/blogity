import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="relative">
        <section className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                <div className="col-span-7 space-y-8">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
                    Tech News for Busy Peeps
                  </h1>

                  <h2 className="text-lg sm:text-xl text-gray-400">
                    Stay up-to-date with the latest tech news and announcements.
                  </h2>

                  <ul className="space-y-4">
                    {[
                      "Industry News",
                      "Product Launches",
                      "Innovation Spotlights",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="flex items-center justify-center w-8 h-8 mr-4 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                          ✓
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href="/blog/all"
                      className="relative overflow-hidden group inline-block"
                    >
                      <div className="relative px-8 py-4 bg-white/5 rounded-lg border border-white/10 text-gray-300">
                        <div className="flex items-center">
                          <span>Browse Articles</span>
                          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </Link>
                  </div>
                </div>

                <div className="col-span-5 relative">
                  <div className="h-full bg-white/5 rounded-xl p-6 border border-white/10 overflow-hidden">
                    <div className="relative h-full">
                      <div className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-white/5 border border-white/10" />
                      <div className="absolute bottom-20 left-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10" />
                      <div className="absolute bottom-40 right-20 w-20 h-20 rounded-xl bg-white/5 border border-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
