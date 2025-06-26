'use client';

import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state for mobile

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar toggle button (visible on small screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-32 left-72 z-50 bg-black text-white px-3 py-2 rounded shadow-md"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed sm:static top-0 left-0 h-full border-r border-white transition-transform z-40 duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 w-64`}
      >
      

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 py-10">
          <br /><br /><br />
            <SidebarLink
            href="/admin"
            icon={assets.arrow}
            label="Admin-"
          />
          <SidebarLink
            href="/admin/Addproduct"
            icon={assets.add_icon}
            label="Add Blogs"
          />
          <SidebarLink
            href="/admin/blogList"
            icon={assets.blog_icon}
            label="Blog Lists"
          />
          
        </div>
      </aside>

    </div>
  );
};

// Reusable Sidebar Link Component
const SidebarLink = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center gap-3 px-4 py-3 rounded-md border border-black bg-white shadow-md hover:bg-green-600 transition-all"
  >
    <Image src={icon} alt={label} width={24} height={24} />
    <span className="font-medium text-gray-700">{label}</span>
  </Link>
);

export default Sidebar;
