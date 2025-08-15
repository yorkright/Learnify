import { connectDB } from "@/lib/db";
import BlogModel from "@/lib/models/BlogModels";
// import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import fs from "fs";
import cloudinary from "@/lib/cloudinary";


export const config = {
  api: {
    bodyParser: false, // Required for formData uploads
    responseLimit: false, // Prevent payload limit issues
  },
};



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
    // ====== STEP 1: Connect to DB ======
    await connectDB();

    // ====== STEP 2: Parse form data ======
    const formData = await request.formData();
    const title = formData.get("title")?.trim();
    const description = formData.get("description")?.trim();
    const category = formData.get("category")?.trim();
    const author = formData.get("author")?.trim();
    const authorImg = formData.get("authorImg")?.trim();
    const image = formData.get("image");

    // ====== STEP 3: Validation ======
    if (!image || typeof image === "string") {
      return NextResponse.json({ success: false, msg: "Valid image is required" }, { status: 400 });
    }
    if (image.size > 2 * 1024 * 1024) { // 2MB size limit
      return NextResponse.json({ success: false, msg: "Image size must be less than 2MB" }, { status: 400 });
    }
    if (!title || title.length < 5 || title.length > 100) {
      return NextResponse.json({ success: false, msg: "Title must be between 5 and 100 characters" }, { status: 400 });
    }
    if (!description || description.length < 20 || description.length > 2000) {
      return NextResponse.json({ success: false, msg: "Description must be between 20 and 2000 characters" }, { status: 400 });
    }

    // ====== STEP 4: Convert file to buffer ======
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // ====== STEP 5: Upload to Cloudinary (20s timeout) ======
    const uploadResult = await Promise.race([
      new Promise((resolve, reject) => {
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
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Cloudinary upload timed out after 20s")), 20000)
      )
    ]);

    // ====== STEP 6: Save blog to DB ======
    await BlogModel.create({
      title,
      description,
      category,
      author,
      image: uploadResult.secure_url,
      authorImg,
    });

    return NextResponse.json({ success: true, msg: "Blog Added Successfully" });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { success: false, msg: error.message || "Server Error" },
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

export async function UPDADTE(request) { }
