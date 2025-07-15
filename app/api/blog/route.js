// app/api/blog/route.js
import { connectDB } from "@/lib/db";
import BlogModel from "@/lib/models/BlogModels";
import { writeFile, unlink } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

function sanitizeFilename(name) {
  return name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.]/g, "");
}

// ✅ GET: Fetch single or all blogs
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
      return NextResponse.json({ success: true, data: blog });
    }

    if (isCountOnly === "true") {
      const total = await BlogModel.countDocuments();
      return NextResponse.json({ success: true, total });
    }

    const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs });

  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ success: false, msg: "Server error" }, { status: 500 });
  }
}

// ✅ POST: Create a new blog
export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image || typeof image === "string") {
      return NextResponse.json({ success: false, msg: "Valid image is required" }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(image.type)) {
      return NextResponse.json({ success: false, msg: "Only JPG, PNG, WEBP allowed" }, { status: 400 });
    }

    const cleanName = sanitizeFilename(image.name);
    const fileName = `${timestamp}_${cleanName}`;
    const filePath = path.join(process.cwd(), "public", fileName);
    const imageUrl = `/${fileName}`;

    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(filePath, buffer);

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category") || "",
      author: formData.get("author") || "",
      image: imageUrl,
      authorImg: formData.get("authorImg") || "",
    };

    if (!blogData.title || !blogData.description) {
      return NextResponse.json({ success: false, msg: "Title and description required" }, { status: 400 });
    }

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added Successfully" });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}

// ✅ DELETE: Delete a blog by ID
export async function DELETE(request) {
  try {
    await connectDB();

    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, msg: "Blog ID required" }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
    }

    const imagePath = path.join(process.cwd(), "public", blog.image.replace("/", ""));
    try {
      await unlink(imagePath);
    } catch (err) {
      console.warn("Failed to delete image:", err.message);
    }

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Blog Deleted Successfully" });

  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}
