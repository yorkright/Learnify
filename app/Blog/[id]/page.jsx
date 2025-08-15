"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";

// Like button component
const LikeSection = ({ blogId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const handleLike = async () => {
    if (liked) return;
    try {
      const res = await axios.post("/api/like", { blogId });
      setLikes(res.data.likes);
      setLiked(true);
    } catch (error) {
      console.error("Like failed:", error);
    }
  };
  return (
    <button
      onClick={handleLike}
      disabled={liked}
      aria-label={liked ? "Liked" : "Like"}
      className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow transition duration-300
        ${liked ? "bg-green-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
        text-white`}
    >
      👍 {liked ? "Liked" : "Like"} ({likes})
    </button>
  );
};

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogData = useCallback(async () => {
    try {
      const response = await axios.get("/api/blog", { params: { id: params.id } });
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch blog data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl bg-white">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 pt-20 md:pt-24 text-black dark:text-white transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8 mb-6 max-w-4xl mx-auto leading-tight">
          {data.title}
        </h1>

        {/* Author Section */}
        <div className="flex flex-col items-center justify-center text-center mb-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">By</p>
          <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white">{data.author}</h2>
          <div className="flex items-center space-x-4 mt-2">
            <Link href="#" className="text-blue-500 hover:underline text-xs sm:text-sm">
              ------
            </Link>
            <Link href="#" className="text-blue-700 hover:underline text-xs sm:text-sm">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Published Date */}
        <p className="text-center mb-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Published:{" "}
          {new Date(data.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

        {/* Social Share & Like Button */}
        <div className="max-w-4xl mx-auto mt-6 mb-4 px-2 sm:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 py-4 border-t border-b border-gray-200 dark:border-gray-600">
            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {assets.facebook_icon && (
                <button
                  aria-label="Share on Facebook"
                  className="p-1 sm:p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-300 shadow"
                >
                  <Image src={assets.facebook_icon} alt="Facebook" width={28} height={28} />
                </button>
              )}
              {assets.twitter_icon && (
                <button
                  aria-label="Share on Twitter"
                  className="p-1 sm:p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-300 shadow"
                >
                  <Image src={assets.twitter_icon} alt="Twitter" width={28} height={28} />
                </button>
              )}
              {assets.googleplus_icon && (
                <button
                  aria-label="Share on Google Plus"
                  className="p-1 sm:p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-300 shadow"
                >
                  <Image src={assets.googleplus_icon} alt="Google Plus" width={28} height={28} />
                </button>
              )}
            </div>
            <LikeSection blogId={data._id} initialLikes={data.likes || 0} />
          </div>
        </div>

        {/* Blog Image */}
        <div className="relative mt-8 mb-4 border-t border-gray-300 dark:border-gray-700 w-full max-w-4xl mx-auto">
          <Image
            className="border-4 border-black dark:border-gray-300 object-cover rounded-md w-full h-auto"
            src={data.image}
            priority
            width={1200}
            height={500}
            alt="Blog Image"
            quality={95}
            placeholder="blur"
            blurDataURL={data.image}
          />
          <p className="text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400 mt-2 italic">
            {data.caption || "Image Caption"}
          </p>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto mb-10 mt-8 text-gray-800 dark:text-gray-100 leading-relaxed blog-content px-2 sm:px-4">
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
    </div>
  );
};

export default Page;
