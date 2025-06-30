export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image || typeof image === "string") {
      return NextResponse.json({ success: false, msg: "Valid image is required" }, { status: 400 });
    }

    const imageArrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(imageArrayBuffer);

    // ✅ Ensure directory exists
    const uploadDir = "./public/uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `${timestamp}_${image.name}`;
    const filePath = `${uploadDir}/${fileName}`;
    const imageUrl = `/uploads/${fileName}`; // public access

    // ✅ Write image
    await writeFile(filePath, buffer);

    // ✅ Prepare blog data
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      authorImg: formData.get("authorImg"),
      image: imageUrl,
    };

    // ✅ Validate input
    if (!blogData.title || !blogData.description) {
      return NextResponse.json({ success: false, msg: "Title and description are required" }, { status: 400 });
    }

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added Successfully" });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}
