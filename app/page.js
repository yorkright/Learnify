"use client"
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

export default function Home() {

  return (
    <>
      <section className=" text-white text-center py-20 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn From the Best Educators</h1>
        <p className="text-lg mb-8">Join our platform and take your learning to the next level with top courses in various fields.</p>
        <a
          href=""
          className="bg-yellow-100 text-gray-800 py-3 px-6 rounded-full text-xl hover:bg-yellow-100 transition duration-300"
        >
          Explore More-
        </a>
      </section>

      {/* Course Categories Section */}
      <section id="courses" className="py-20 ">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Course Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFdlYiUyMGRldmxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
                alt="Course img"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-black">Web Development</h3>
                <p className="text-gray-700 mb-4">Learn the fundamentals of web development with hands-on projects.</p>
                <a
                  href="./web"
                  className="text-green-600 hover:underline font-semibold"
                >
                  Free
                </a>
              </div>
            </div>

            {/* Repeat for other courses */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww"
                alt="Course img"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-black">Data Science</h3>
                <p className="text-gray-700 mb-4">Master data analysis, machine learning, and deep learning techniques.</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Explore Course
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Course img"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-black">Digital Marketing</h3>
                <p className="text-gray-700 mb-4">Learn how to build and execute successful digital marketing campaigns.</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Explore Course
                </a>
              </div>
            </div>
           
          
           

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className=" py-20">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
          <div className="flex justify-center gap-12">
            <div className="max-w-xs">
              <p className="text-lg italic mb-4">The courses on this platform are amazing! I learned so much in just a few weeks.</p>
              <p className="font-semibold">Code with Harry</p>
              <p className="text-gray-600">Web Developer</p>
            </div>
            <div className="max-w-xs">
              <p className="text-lg italic mb-4">A great learning experience with expert instructors and practical Knowladge with best Teachers </p>
              <p className="font-semibold"></p>
              <p className="text-gray-600">-----</p>
            </div>
          </div>
        </div>
      </section>

     


    </>
  );
}
