import { connectDB } from "@/lib/db";
import BlogModel from "@/lib/models/BlogModels";
// // import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
// import fs from "fs";
import cloudinary from "@/lib/cloudinary";

// import { connectDB } from "@/lib/db";
// import BlogModel from "@/lib/models/BlogModels";
// import { NextResponse } from "next/server";
// import cloudinary from "@/lib/cloudinary";



export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

// Helper: Delete Cloudinary image
async function deleteCloudinaryImage(publicId) {
  if (publicId) {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (err) {
      // Only log error server-side
      console.error("Failed to delete Cloudinary image:", err);
    }
  }
}

// GET: Fetch blogs
export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = request.nextUrl;
    const blogId = searchParams.get("id");
    const isCountOnly = searchParams.get("count");

    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
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
    return NextResponse.json({ success: false, msg: "Server error" }, { status: 500 });
  }
}

// POST: Create blog
export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const title = formData.get("title")?.trim() ?? '';
    const description = formData.get("description")?.trim() ?? '';
    const category = formData.get("category")?.trim() ?? '';
    const author = formData.get("author")?.trim() ?? '';
    const authorImg = formData.get("authorImg")?.trim() ?? '';
    const image = formData.get("image");

    if (!image || typeof image === "string") {
      return NextResponse.json({ success: false, msg: "Valid image is required" }, { status: 400 });
    }
    if (image.size > 2 * 1024 * 1024) {
      return NextResponse.json({ success: false, msg: "Image size must be less than 2MB" }, { status: 400 });
    }
    if (!title || title.length < 5 || title.length > 100) {
      return NextResponse.json({ success: false, msg: "Title must be between 5 and 100 characters" }, { status: 400 });
    }
    if (!description || description.length < 20 || description.length > 2000) {
      return NextResponse.json({ success: false, msg: "Description must be between 20 and 2000 characters" }, { status: 400 });
    }

    // Upload image to Cloudinary
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "blog-images",
          resource_type: "image",
          public_id: `${Date.now()}_${image.name}`,
        },
        (error, result) => {
          if (error) return reject(new Error(`Cloudinary Error: ${error.message}`));
          resolve(result);
        }
      );
      stream.end(buffer);
    });

    await BlogModel.create({
      title,
      description,
      category,
      author,
      image: uploadResult.secure_url,
      cloudinary_id: uploadResult.public_id, // Save for later deletion
      authorImg,
    });

    return NextResponse.json({ success: true, msg: "Blog Added Successfully" });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { success: false, msg: "Server error" }, // Don't leak error details!
      { status: 500 }
    );
  }
}

// DELETE: Delete blog
export async function DELETE(request) {
  try {
    await connectDB();
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, msg: "Blog ID is required" }, { status: 400 });
    }
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
    }

    // Delete Cloudinary image if it exists
    if (blog.cloudinary_id) {
      await deleteCloudinaryImage(blog.cloudinary_id);
    }

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Blog Deleted Successfully" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}
