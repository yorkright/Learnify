// app/api/blog/route.js

import { connectDB } from "@/lib/db";
import BlogModel from "@/lib/models/BlogModels";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// ✅ GET: Get single blog, all blogs, or count
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("id");
    const isCountOnly = searchParams.get("count");

    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: blog }, { status: 200 });
    }

    if (isCountOnly === "true") {
      const total = await BlogModel.countDocuments();
      return NextResponse.json({ success: true, total }, { status: 200 });
    }

    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });

  } catch (error) {
    console.error("❌ GET error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}

// ✅ POST: Add a new blog post
export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();

    const image = formData.get("image");
    if (!image || typeof image === "string") {
      return NextResponse.json({ success: false, msg: "Valid image is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await image.arrayBuffer());
    const timestamp = Date.now();
    const fileName = `${timestamp}_${image.name}`;
    const filePath = path.join(process.cwd(), "public", fileName);
    const imageUrl = `/${fileName}`;

    await writeFile(filePath, buffer);

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      authorImg: formData.get("authorImg"),
      image: imageUrl,
    };

    // ✅ Basic validation
    if (!blogData.title || !blogData.description) {
      return NextResponse.json({ success: false, msg: "Title and description are required" }, { status: 400 });
    }

    const created = await BlogModel.create(blogData);

    return NextResponse.json({ success: true, msg: "Blog created", data: created }, { status: 201 });

  } catch (error) {
    console.error("❌ POST error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}

// ✅ DELETE: Remove blog by ID and its image
export async function DELETE(request) {
  try {
    await connectDB();

    const blogId = request.nextUrl.searchParams.get("id");
    if (!blogId) {
      return NextResponse.json({ success: false, msg: "Blog ID is required" }, { status: 400 });
    }

    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
    }

    // Delete image
    const imagePath = path.join(process.cwd(), "public", blog.image?.replace("/", ""));
    fs.unlink(imagePath, (err) => {
      if (err) console.warn("⚠️ Image delete failed (might not exist):", imagePath);
    });

    await BlogModel.findByIdAndDelete(blogId);

    return NextResponse.json({ success: true, msg: "Blog deleted" }, { status: 200 });

  } catch (error) {
    console.error("❌ DELETE error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}
