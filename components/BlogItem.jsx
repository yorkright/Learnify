import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaRegComment } from "react-icons/fa";

const BlogCard = ({ id, image, title, description, category ,author,date }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:shadow-xl transition-shadow duration-300 max-w-3xl w-full">
      {/* Blog Image */}
      <Link href={`/Blog/${id}`}>
        <Image
          src={image}
          alt={title}
          width={140}
          height={100}
          className="rounded-xl w-[120px] h-[120px] object-cover sm:w-[160px] sm:h-[120px]"
        />
      </Link>

      {/* Blog Content */}
      <div className="flex flex-col flex-1 gap-2">
        {/* Top Title & Time */}
        <div className="flex justify-between items-start">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 max-w-md leading-snug line-clamp-2">
            {title}
          </h2>
          <span className="text-xs text-gray-400 whitespace-nowrap">{new Date(date).toLocaleDateString()}</span>
        </div>

        {/* Description */}
          <p
          className="text-sm text-gray-900 line-clamp-3 mb-4"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 150),
          }}
        ></p>

        <div className="flex items-center gap-3 flex-wrap text-sm mt-1">
 
          <span className="bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full text-xs">
            {category}
          </span>
          <span className="bg-black text-white font-medium px-2 py-0.5 rounded-full text-xs">
          {author}
          </span>
        </div>

        {/* Like, Comment, Read More */}
        <div className="flex items-center justify-between mt-3 w-full max-w-md">
          <div className="flex gap-4 items-center text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <FaHeart className="text-red-400" /> 32
            </span>
          </div>
          <Link
            href={`/Blog/${id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-4 rounded-full transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;




