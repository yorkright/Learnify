/* eslint-disable @next/next/no-img-element */
// pages/index.js
import Link from 'next/link';
import React from 'react';

const FrontendCoursePage = () => {
  return (
    <div className=" min-h-screen pt-32 p-6">
      {/* Header Section */}
      <header className="text-center py-6 ">
        <h1 className="text-4xl font-bold text-gray-950">Master Frontend Web Development</h1>
        <p className="text-gray-900 mt-2">Learn the skills to build stunning websites and web applications.</p>
      </header>


      <div className="ml-6  mt-6 flex justify-center items-center ">
      <h1 className="text-4xl font-bold text-gray-950">Diffrence Between Typescript and Javascript</h1>
      </div>

      <section className="text-gray-600 body-font">
  
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap m-4">
      
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-xl border-gray-900 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
         
          </div>
          
          <div className="flex-grow">
            <h2 className=" text-xl text-green-600 title-font font-extrabold mb-3">Typescript</h2>
            <p className="leading-relaxed text-base text-black">TypeScript: A superset of JavaScript developed by Microsoft. It adds static typing and other features to JavaScript, making code more robust and easier to maintain.</p>
            <Link  href='/typescript' >
        <button className="mt-3 text-indigo-500  inline-flex items-center">Learn More
        </button>
        </Link>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-xl border-gray-900 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          
          </div>
          <div className="flex-grow">
            <h2 className=" text-lg text-green-600 title-font font-extrabold mb-3">Javascript</h2>
            <p className="leading-relaxed text-base text-black">JavaScript: A lightweight, interpreted programming language primarily used for adding interactivity to web pages. It’s a client-side scripting language that can also run on the server-side using environments like Node.js</p>
            <Link  href='/typescript' >
        <button className="mt-3 text-indigo-500  inline-flex items-center">Learn More
        </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Courses Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Course Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg"
            alt="JavaScript Essentials"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">JavaScript Essentials</h2>
            <p className="text-gray-600 mt-2">
              Master JavaScript to create dynamic and interactive web experiences.
            </p>
            <Link href={'/king'}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</button>
              </Link>
          </div>
        </div>

        {/* Course Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://qualitythought.in/wp-content/uploads/2024/08/the_future_of_web_development_reactjs.webp"
            alt="React & TailwindCSS"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">React & TailwindCSS</h2>
            <p className="text-gray-600 mt-2">
              Build modern, responsive UIs with React and TailwindCSS.
            </p>
            <Link href={'/react'}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</button>
              </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="/next11.png"
                alt="Course img"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-4 text-black">Next js</h3>
                <p className="text-gray-700 mb-4">Next.js is a React framework that helps developers build web applications:</p>
                <Link href={'/next'}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</button>
              </Link>
              </div>
            </div>

      </section>

      <section id="courses" className="py-20 ">
        <div className="container mx-auto text-center text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/31/05/44/server-5451985_640.jpg"
                alt="Course img"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-black">Typescript</h3>
                <p className="text-gray-700 mb-4">TypeScript: A superset of JavaScript developed by Microsoft.</p>
                <Link href={'/typescript'}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</button>
              </Link>
              
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default FrontendCoursePage;
