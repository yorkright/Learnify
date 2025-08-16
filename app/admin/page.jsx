"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Settings,
  Edit3,
  BarChart2,
  LogOut,
  PlusCircle,
  List,
} from "lucide-react";

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
    { title: "Total Blogs", value: totalBlogs, color: "from-indigo-400 to-blue-500" },
    { title: "Active Users", value: 56, color: "from-emerald-400 to-green-500" },
    { title: "Total Views", value: 0, color: "from-rose-400 to-pink-500" },
  ];

  const managementSections = [
    { title: "Users", desc: "Manage user accounts & permissions", icon: <Users size={28} /> },
    { title: "Content", desc: "Manage website content & posts", icon: <FileText size={28} /> },
    { title: "Settings", desc: "Configure system settings", icon: <Settings size={28} /> },
    { title: "Blogs", desc: "Manage blog posts & categories", icon: <Edit3 size={28} /> },
    { title: "Analytics", desc: "View blog performance & engagement", icon: <BarChart2 size={28} /> },
    {
      title: "Logout",
      desc: "Sign out from your account",
      icon: <LogOut size={28} />,
      action: () => {
        fetch("/api/logout", { method: "POST" }).then(() => {
          window.location.href = "/login";
        });
      },
    },
  ];

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gradient-to-br from-slate-50 via-indigo-100 to-purple-200 text-gray-900">
      <div className="max-w-7xl mx-auto pt-20 sm:pt-28">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
        >
          Admin Dashboard
        </motion.h1>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="/admin/Addproduct"
            className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3"
          >
            <PlusCircle size={22} /> Add Blog
          </a>
          <a
            href="/admin/blogList"
            className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3"
          >
            <List size={22} /> Blog List
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {statCards.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-xl hover:scale-[1.03] transition-all duration-500`}
            >
              <h2 className="text-lg font-semibold mb-2">{stat.title}</h2>
              <p className="text-4xl font-extrabold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementSections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.9 }}
              className="bg-white/80 backdrop-blur-lg border border-gray-200 hover:border-indigo-400 p-6 rounded-xl flex items-center gap-4 hover:bg-white transition-all duration-500 cursor-pointer group shadow-md hover:shadow-lg"
              onClick={item.action || undefined}
            >
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full text-indigo-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-600">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
