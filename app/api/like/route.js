import { connectDB } from "@/lib/db";
import BlogModel from "@/lib/models/BlogModels";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { blogId } = await req.json();

    if (!blogId) {
      return NextResponse.json({ success: false, msg: "Blog ID is required" }, { status: 400 });
    }

    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
    }

    blog.likes += 1;
    await blog.save();

    return NextResponse.json({ success: true, likes: blog.likes });
  } catch (error) {
    console.error("LIKE error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}
