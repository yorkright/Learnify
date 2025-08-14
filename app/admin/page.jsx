"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    const fetchTotalBlogs = async () => {
      try {
        const res = await fetch("/api/blog?count=true");
        const data = await res.json();
        if (data.success) {
          setTotalBlogs(data.total);
        }
      } catch (error) {
        console.error("Failed to fetch blog count:", error);
      }
    };
    fetchTotalBlogs();
  }, []);

  const statCards = [
    { title: "Total Blogs", value: totalBlogs, color: "from-blue-500 to-purple-500" },
    { title: "Active Users", value: 56, color: "from-green-400 to-teal-500" },
    { title: "Total Views", value: 0, color: "from-pink-500 to-orange-500" },
  ];

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto pt-24 sm:pt-32">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Admin Dashboard
        </motion.h1>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="/admin/Addproduct"
            className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3"
          >
            ➕ Add Blog
          </a>
          <a
            href="/admin/blogList"
            className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3"
          >
            📄 Blog List
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {statCards.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.4, duration: 1.2, ease: "easeOut" }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-xl`}
            >
              <h2 className="text-lg font-semibold mb-2">{stat.title}</h2>
              <p className="text-4xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Management Sections */}
        <div className="grid gap-6">
          {[
            { title: "Users", desc: "Manage user accounts and permissions", icon: "👥" },
            { title: "Content", desc: "Manage website content and posts", icon: "📝" },
            { title: "Settings", desc: "Configure system settings", icon: "⚙️" },
            { title: "Blogs", desc: "Manage blog posts, categories, and comments", icon: "✏️" },
            { title: "Analytics", desc: "View blog performance and engagement", icon: "📊" },
            {
              title: "Logout",
              desc: "Sign out from your account",
              icon: "🚪",
              action: () => {
                fetch("/api/logout", { method: "POST" }).then(() => {
                  window.location.href = "/login";
                });
              },
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.3, duration: 1.2, ease: "easeOut" }}
              className="bg-gray-800/50 border border-gray-700 p-5 rounded-xl flex items-center gap-4 hover:bg-gray-800 hover:border-blue-500 transition-all duration-500 cursor-pointer"
              onClick={item.action || undefined}
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
