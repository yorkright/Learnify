/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head';


export default function Home() {




  const [currentText, setCurrentText] = useState(0);
  const animatedTexts = [
    "Next.js",
    "Mongo-DB",
    "Express.js",
    "React.js",
    "Node.js"
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [animatedTexts.length]);



  return (
    <div className="bg-white text-gray-900"> {/* Set overall background to white and text to dark gray */}

      <Head>
        <title>Full Stack Web Development</title>
        <meta name="description" content="Master Full Stack Web Development with expert-led courses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-28">
        <div className="container mx-auto text-center px-6 sm:px-12 md:px-24">
          <h1 className="text-5xl font-bold mb-4">Master of Full Stack Web Development</h1>
          <p className="text-lg ">Learn web development, and more with expert-led courses. <br />
            For making money from <span className='text-green-300'>Freelancing</span> </p>


          <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl font-semibold text-blue-200 mb-5">{animatedTexts[currentText]}</h2>
            <div className=" mt-5">
              <button className="px-6 py-3 bg-white text-blue-600 text-lg rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Frontend vs Backend */}
      <div className="min-h-screen flex items-center justify-center bg-white py-10"> {/* Set background to white */}

        <div className="max-w-5xl mx-auto ">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8"> {/* Darker text for white background */}
            Frontend vs Backend
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend Card */}
            <div className="border border-gray-200 shadow-lg rounded-xl p-6 bg-white"> {/* Lighter border and white background */}
              <h2 className="text-2xl font-semibold text-blue-600 mb-4"> {/* Maintain blue for frontend */}
                Frontend
              </h2>
              <p className="text-gray-700 font-normal"> {/* Darker text for readability */}
                The <strong>frontend</strong> is the part of a website that users
                see and interact with. It includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 font-normal mt-3"> {/* Darker text for readability */}
                <li>Design (HTML, CSS, JavaScript)</li>
                <li>Interactive elements (buttons, animations)</li>
                <li>Client-side frameworks (React, Vue)</li>
              </ul>
              <p className="text-gray-600 font-normal mt-4"> {/* Darker text for readability */}
                Think of the frontend as the face of a website, where
                everything you see is styled and functional.
              </p>
            </div>

            {/* Backend Card */}
            <div className="border border-gray-200 shadow-lg rounded-xl p-6 bg-white"> {/* Lighter border and white background */}
              <h2 className="text-2xl font-semibold text-green-600 mb-4"> {/* Maintain green for backend */}
                <Link href={'/backend'} > Backend </Link>
              </h2>
              <p className="text-gray-700 font-normal"> {/* Darker text for readability */}
                The <strong>backend</strong> is the part of a website that runs on
                servers and handles the behind-the-scenes tasks, like:
              </p>
              <ul className="list-disc list-inside text-gray-600 font-normal mt-3"> {/* Darker text for readability */}
                <li>Managing databases</li>
                <li>Processing user requests</li>
                <li>APIs to send data to the frontend</li>
              </ul>
              <p className="text-gray-600 font-normal mt-4"> {/* Darker text for readability */}
                Think of the backend as the brain of the website, ensuring
                everything works smoothly.
              </p>

            </div>
          </div>
        </div>
      </div>


      <main className="min-h-screen bg-white py-10 px-6"> {/* Set background to white */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"> {/* Darker text for white background */}
            What is the MERN Stack?
          </h1>

          <section className="grid md:grid-cols-2 gap-10">
            {/* MongoDB */}
            <div className="p-6 border border-gray-200 bg-white rounded-2xl shadow-md hover:shadow-lg transition"> {/* Lighter border and white background */}
              <h2 className="text-2xl font-semibold text-green-700 mb-4">MongoDB</h2> {/* Darker green for contrast */}
              <p className="text-gray-700"> {/* Darker text for readability */}
                MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
                It’s used to handle the database layer in MERN applications.
              </p>
              <a
                href="/Mongodb"
                className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Learn More
              </a>
            </div>

            {/* Express */}
            <div className="p-6 border border-gray-200 bg-white rounded-2xl shadow-md hover:shadow-lg transition"> {/* Lighter border and white background */}
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Express.js</h2> {/* Darker blue for contrast */}
              <p className="text-gray-700"> {/* Darker text for readability */}
                Express is a back-end web application framework for Node.js.
                It handles HTTP requests, APIs, and server-side logic efficiently.
              </p>
              <a
                href="/express"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>

            {/* React */}
            <div className="p-6 border border-gray-200 bg-white rounded-2xl shadow-md hover:shadow-lg transition"> {/* Lighter border and white background */}
              <h2 className="text-2xl font-semibold text-cyan-700 mb-4">React.js</h2> {/* Darker cyan for contrast */}
              <p className="text-gray-700"> {/* Darker text for readability */}
                React is a popular JavaScript library for building dynamic user interfaces on the frontend.
                It helps create interactive single-page applications (SPA).
              </p>
              <a
                href="/react"
                className="inline-block mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
              >
                Learn More
              </a>
            </div>

            {/* Node.js */}
            <div className="p-6 border border-gray-200 bg-white rounded-2xl shadow-md hover:shadow-lg transition"> {/* Lighter border and white background */}
              <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Node.js</h2> {/* Darker yellow for contrast */}
              <p className="text-gray-700"> {/* Darker text for readability */}
                Node.js is a runtime environment that allows JavaScript to run on the server.
                It connects the backend and communicates with databases like MongoDB.
              </p>
              <a
                href="/nodejs"
                className="inline-block mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
              >
                Learn More
              </a>
            </div>
          </section>


          {/* Stack Flow */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How MERN Works Together</h2> {/* Darker text for white background */}
            <p className="text-gray-700 max-w-3xl mx-auto"> {/* Darker text for readability */}
              React handles the frontend, Express and Node manage the backend server and APIs,
              while MongoDB stores the application’s data. Together, they create a full-stack JavaScript solution!
            </p>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <span className="bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-full shadow-md">MongoDB</span> {/* Lighter background for white theme */}
              <span className="text-2xl text-gray-600">➔</span> {/* Darker arrow for visibility */}
              <span className="bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md">Express.js</span> {/* Lighter background for white theme */}
              <span className="text-2xl text-gray-600">➔</span>
              <span className="bg-cyan-100 text-cyan-800 font-semibold py-2 px-4 rounded-full shadow-md">React.js</span> {/* Lighter background for white theme */}
              <span className="text-2xl text-gray-600">➔</span>
              <span className="bg-yellow-100 text-yellow-800 font-semibold py-2 px-4 rounded-full shadow-md">Node.js</span> {/* Lighter background for white theme */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}