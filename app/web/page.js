/* eslint-disable react/jsx-no-undef */
"use client"



// pages/index.js
import Head from 'next/head'
import { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaAppStore, FaBuromobelexperte } from 'react-icons/fa'
import Link from 'next/link'


export default function Home() {


  // State to manage the background color
  const [bgColor, setBgColor] = useState('white');

  // JavaScript function to generate a random color
  const generateRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFFF33'];
    return colors[Math.floor(Math.random() * colors.length)];
  };


  // Function to change background color on button click
  const changeBackgroundColor = () => {
    const randomColor = generateRandomColor();
    setBgColor(randomColor);  // Set the new background color
  };


  const courses = [
    // { id: 1, title: 'Intro Html,Css,JS', description: "Basic about all of these for begginers to prepaire in 10days" },
    { id: 2, title: 'JavaScript for Beginners', description: 'Learn JavaScript from scratch.' },
    { id: 3, title: 'Advanced React', description: 'Master React and build dynamic web apps.' },
    { id: 4, title: 'Introduction to Node.js', description: 'Get started with Node.js and server-side development.' },
  ]
  return (
    <div className="">
      <Head>
        <title>Coding Courses - Learn Programming Online</title>
        <meta name="description" content="Learn programming with interactive online coding courses" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r  text-white py-28">
        <div className="container mx-auto text-center px-6 sm:px-12 md:px-24">
          <h1 className="text-5xl font-bold mb-4">Master Web Development</h1>
          <p className="text-lg ">Learn web development, and more with expert-led courses. <br />
           For making money from <span className='text-green-500'>Freelancing</span> </p>

        </div>
      </section>




      <div className="min-h-screen  flex items-center justify-center">

        <div className="max-w-5xl mx-auto ">
          <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
            Frontend vs Backend in Web Development
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend Card */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                Frontend
              </h2>
              <p className="text-gray-700">
                The <strong>frontend</strong> is the part of a website that users
                see and interact with. It includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-3">
                <li>Design (HTML, CSS, JavaScript)</li>
                <li>Interactive elements (buttons, animations)</li>
                <li>Client-side frameworks (React, Vue)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Think of the frontend as the face of a website, where
                everything you see is styled and functional.
              </p>
            </div>

            {/* Backend Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 ">
              <h2 className="text-2xl font-semibold text-green-500 mb-4">
                <Link href={'/backend'}  > Backend  </Link>
              </h2>
              <p className="text-gray-700">
                The <strong>backend</strong> is the part of a website that runs on
                servers and handles the behind-the-scenes tasks, like:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-3">
                <li>Managing databases</li>
                <li>Processing user requests</li>
                <li>APIs to send data to the frontend</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Think of the backend as the brain of the website, ensuring
                everything works smoothly.
              </p>

            </div>
          </div>
        </div>
      </div>











      <div className="flex justify-center items-center">
        <p className='text-4xl font-bold text-center text-gray-300 mb-8'>Frontend</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

        <div className="max-w-xs mx-auto p-6 mb-5 bg-white border-2 border-gray-300 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-sans">Html,Css,Javascript. </h2>
          <p className="text-gray-600 text-sm mb-6">
            Learn full-stack web development with hands-on projects and real-world examples. From front-end to back-end, we cover everything.
          </p>
          <Link href="/web/newpage">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Free
            </button>
          </Link>
        </div>

        <div className="max-w-xs mx-auto p-6 mb-5  bg-white border-2 border-gray-300 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-sans">React.js</h2>
          <p className="text-gray-600 text-sm mb-6">
            Learn full-stack web development with hands-on projects and real-world examples. From front-end to back-end, we cover everything.
          </p>
          <Link href="/react">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Free
            </button>
          </Link>
        </div>




        <div className="max-w-xs mx-auto p-6 mb-5  bg-white border-2 border-gray-300 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Next.js <span className='font-sans text-green-500'>[Latest Version]</span> </h2>
          <p className="text-gray-600 text-sm mb-6">
            Learn full-stack web development with hands-on projects and real-world examples. From front-end to back-end, we cover everything.
          </p>
          <Link href="/next">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Free
            </button>
          </Link>
        </div>




      </div>




      {/* 
      <div className="max-w-xs mx-auto p-6 bg-white border-2 border-gray-300 shadow-lg rounded-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development Mastery</h2>
        <p className="text-gray-600 text-sm mb-6">
          Learn full-stack web development with hands-on projects and real-world examples. From front-end to back-end, we cover everything.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Grab the Offer
        </button>
      </div>


      <div className="max-w-xs mx-auto p-6 bg-white border-2 border-gray-300 shadow-lg rounded-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development Mastery</h2>
        <p className="text-gray-600 text-sm mb-6">
          Learn full-stack web development with hands-on projects and real-world examples. From front-end to back-end, we cover everything.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Grab the Offer
        </button>
      </div> */}



      <hr className='bg-slate-300 ' />

      <div className="min-h-screen  p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {courses.map((course) => (
            <div key={course.id} className="bg-white text-black shadow-md rounded-xl p-6">
              <h2 className="text-2xl font-semibold">{course.title}</h2>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <Link href={`/about/web`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Click
              </Link>
            </div>
          ))}
        </section>

        <div className="flex justify-center items-center">
      <Link href="/backend"
        className="bg-yellow-500 mt-5 hover:bg-yellow-400 text-gray-800 text-lg px-6 py-3 rounded-full font-semibold transition duration-300">
        Backend
      </Link>
</div>

      </div>





    </div>




  )
}



