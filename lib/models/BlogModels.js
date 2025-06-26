import mongoose, { Schema } from "mongoose";

// Define the schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  authorImg: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
   likes: {
    type: Number,
    default: 0,
  }
});

// Use mongoose.models to prevent overwrite error on hot reloads
const BlogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default BlogModel;
