"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";

const Page = ({ params: paramsPromise }) => {
  const params = React.use(paramsPromise);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogData = useCallback(async () => {
    try {
      const response = await axios.get("/api/blog", {
        params: { id: params.id },
      });
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 text-black sm:text-white sm:bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 max-w-4xl mx-auto leading-tight mb-6">
          {data.title}
        </h1>

        {/* Author Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-gray-600">By</p>
          <h2 className="text-lg font-semibold text-black">{data.author}</h2>
          <div className="flex items-center space-x-4 mt-2">
            <Link href="#" className="text-blue-500 hover:underline text-sm">
              ------
                       </Link>
            <Link href="#" className="text-blue-700 hover:underline text-sm">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Published Date */}
        <p className="text-center mt-6 text-sm text-gray-500">
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

        {/* Social Share & Like Button at the Top */}
        <div className="max-w-4xl mx-auto mt-10 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-6 border-t border-b border-gray-300">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {assets.facebook_icon && (
                <button
                  aria-label="Share on Facebook"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-300 shadow"
                >
                  <Image
                    src={assets.facebook_icon}
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                </button>
              )}
              {assets.twitter_icon && (
                <button
                  aria-label="Share on Twitter"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-300 shadow"
                >
                  <Image
                    src={assets.twitter_icon}
                    alt="Twitter"
                    width={28}
                    height={28}
                  />
                </button>
              )}
              {assets.googleplus_icon && (
                <button
                  aria-label="Share on Google Plus"
                  className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-300 shadow"
                >
                  <Image
                    src={assets.googleplus_icon}
                    alt="Google Plus"
                    width={28}
                    height={28}
                  />
                </button>
              )}
            </div>

            {/* Like Button */}
            <LikeSection blogId={data._id} initialLikes={data.likes || 0} />
          </div>
        </div>

        {/* Blog Image */}
        <div className="relative mt-10 border-t border-gray-900 w-full max-w-4xl mx-auto">
          <br />
          <Image
            className="border-4 border-black relative z-10 object-cover rounded-md"
            src={data.image}
            priority
            width={1200}
            height={500}
            alt="Blog Image"
            quality={95}
            placeholder="blur"
            blurDataURL={data.image}
          />
          <p className="text-sm text-center text-gray-500 mt-2 italic">
            {data.caption || "Image Caption"}
          </p>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto mb-8 mt-10 text-gray-800 leading-relaxed blog-content">
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
    </div>
  );
};

export default Page;

// 👇 Add this LikeSection component inside the same file
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
      className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 ${
        liked
          ? "bg-green-500 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } text-white`}
    >
      👍 {liked ? "Liked" : "Like"} ({likes})
    </button>
  );
};
