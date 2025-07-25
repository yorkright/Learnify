import { connectDB } from "@/lib/db";
import BlogModel from "@/lib/models/BlogModels";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import fs from "fs";
import cloudinary from "@/lib/cloudinary";

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
        return NextResponse.json(
          { success: false, msg: "Blog not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(blog);
    }

    if (isCountOnly === "true") {
      const total = await BlogModel.countDocuments();
      return NextResponse.json({ success: true, total });
    }

    const blogs = await BlogModel.find({});
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { success: false, msg: "Server error" },
      { status: 500 }
    );
  }
}

// ✅ POST: Create a new blog
export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image || typeof image === "string") {
      return NextResponse.json(
        { success: false, msg: "Valid image is required" },
        { status: 400 }
      );
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "blog-images",
            resource_type: "image",
            public_id: `${Date.now()}_${image.name}`,
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        )
        .end(buffer);
    });

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: uploadResult.secure_url, // ✅ Cloudinary image URL
      authorImg: formData.get("authorImg"),
    };

    if (!blogData.title || !blogData.description) {
      return NextResponse.json(
        { success: false, msg: "Title and description are required" },
        { status: 400 }
      );
    }

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added Successfully" });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { success: false, msg: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// ✅ DELETE: Delete a blog by ID
export async function DELETE(request) {
  try {
    await connectDB();

    // await cloudinary.uploader.destroy(blog.cloudinary_id);  working on it 

    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, msg: "Blog ID is required" },
        { status: 400 }
      );
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json(
        { success: false, msg: "Blog not found" },
        { status: 404 }
      );
    }

    const imagePath = `./public${blog.image}`;
    fs.unlink(imagePath, (err) => {
      if (err) console.error("Image delete error:", err);
    });

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      msg: "Blog Deleted Successfully",
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { success: false, msg: "Server Error" },
      { status: 500 }
    );
  }
}

// Work on progress: update blog
export async function UPDADTE(request) {}
