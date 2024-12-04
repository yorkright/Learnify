/* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import { global } from 'styled-jsx/css';

// const about = () => {
//   // components/Courses.js
// const courses = [
//     { title: 'Web Development', description: 'Learn how to build websites and web applications.' },
//     { title: 'Data Science', description: 'Master data analysis and machine learning.' },
//     { title: 'Graphic Design', description: 'Learn the principles of design and creativity.' },
//     { title: 'Digital Marketing', description: 'Understand the strategies of online marketing.' },
//     { title: 'Mobile App Development', description: 'Create apps for iOS and Android platforms.' },
// ];
// return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Courses</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
//               <p className="text-gray-600 mb-4">{course.description}</p>
//               {/* Conditionally render the button text based on course title */}
//               <a
//                 href=""
//                 className={`px-4 py-2 rounded ${
//                   course.title === 'Web Development' ? 'bg-green-600 hover:bg-blue-700' : 'bg-red-500 hover:bg-blue-700'
//                 } text-white`}
//               >
//                 {course.title === 'Web Development' ? 'Free' : 'Paid'}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     );
// };


// export default about























"use client"
// pages/index.js
import {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

const courses = [
  // {
  //   title: 'Web Development ',
  //   description: 'Learn HTML, CSS, JavaScript, Node.js, and React in this immersive bootcamp.',
  //   price: 'Free',
  //   image: 'https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
  {
    title: 'Data Science Masterclass',
    description: 'Master Python, SQL, Machine Learning, and Data Analysis to kickstart your career in data science.',
    price: '/4999',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww',
  },
  {
    title: 'Mobile App Development',
    description: 'Learn to build native iOS and Android apps using Flutter and Firebase.',
    price: '/5000',
   image: 'https://plus.unsplash.com/premium_photo-1719839720683-72c8eb65b10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwfGVufDB8fDB8fHww', },
  {
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, SEM, Content Marketing, and more to become a digital marketing expert.',
    price: '/1500',
    image: 'https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]



export default function Home() {

  useEffect(() => {
    // Show an alert when the app is opened
    alert('Login For Better Expreance  ');
  }, []);

  return (
    <div className=" min-h-screen">
      <Head>
        <title>Coding Courses - Learn Programming Online</title>
        <meta name="description" content="Learn programming with interactive online coding courses" />
      </Head>

      {/* Header Section */}
      <header className=" text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Master Coding with Our Online Courses</h1>
          <p className="mt-4 text-xl">Learn web development, data science, mobile app development, and more <br /> For making money from <span className='text-green-500'>Freelancing</span> </p>
          <div className="mt-8">
            <button 
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
              Explore More-
            </button>
          </div>
        </div>
      </header>

      {/* Courses List */}
      <main className="py-16 px-6 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-200">Our Top Courses</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-bold text-blue-700">{course.price}</span>
                  {course.price === 'Free' ? (
                    <Link 
                    href={`/web?title=${encodeURIComponent(course.title)}&description=${encodeURIComponent(course.description)}`}
                     className="px-4 py-2 font-bold rounded bg-green-600 text-white hover:bg-green-700">
                        Free
                    </Link>
                  ) : (
                    <button className="px-4 py-2 font-bold rounded bg-red-600 text-white hover:bg-red-700">
                      Paid
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Testimonials Section */}
      <section className=" py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-200">What Our Students Say</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="w-80  p-6 rounded-lg shadow-lg">
              <p className="text-gray-100">This course was a game-changer for my career! I learned so much and landed my dream job.</p>
              <h4 className="mt-4 text-lg font-semibold text-gray-300">code with harry </h4>
              <span className="text-sm text-gray-200">Web Developer</span>
            </div>
            <div className="w-80  p-6 rounded-lg shadow-lg">
              <p className="text-gray-100">The best online course I ve ever taken. Highly recommend to anyone looking to break into tech.</p>
              <h4 className="mt-4 text-lg font-semibold text-gray-200">-----</h4>
              <span className="text-sm text-gray-200">App Devlopment </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}









// import React from 'react'
// import Head from 'next/head'

// const courses = [
//   {
//     title: 'Web Development Bootcamp',
//     description: 'Learn HTML, CSS, JavaScript, Node.js, and React in this immersive bootcamp.',
//     price: 'Free',
//     image: 'https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     title: 'Data Science Masterclass',
//     description: 'Master Python, SQL, Machine Learning, and Data Analysis to kickstart your career in data science.',
//     price: '$149',
//     image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww',
//   },
//   {
//     title: 'Mobile App Development',
//     description: 'Learn to build native iOS and Android apps using Flutter and Firebase.',
//     price: '$129',
//     image: 'https://plus.unsplash.com/premium_photo-1719839720683-72c8eb65b10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwfGVufDB8fDB8fHww',
//   },
//   {
//     title: 'Digital Marketing Mastery',
//     description: 'Learn SEO, SEM, Content Marketing, and more to become a digital marketing expert.',
//     price: '$79',
//     image: 'https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ]

// export default function Home() {
//   return (
//     <div className="min-h-screen ">
//       <Head>
//         <title>Coding Courses</title>
//         <meta name="description" content="Learn coding with our interactive courses." />
//       </Head>

//       {/* Header */}
//       <header className=" text-white py-8 px-6 text-center">
//         <h1 className="text-4xl font-extrabold">Learn Coding Online</h1>
//         <p className="mt-2 text-lg">Start your journey with our top-rated coding courses.</p>
//       </header>

//       {/* Course List */}
//       <main className="py-12 px-6 sm:px-8 lg:px-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
//                 <p className="text-gray-600 mt-2">{course.description}</p>
//                 <div className="flex justify-between items-center mt-6">
//                   <span className="text-2xl font-bold text-blue-700">{course.price}</span>
//                   <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
//                     Paid
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>


//     </div>
//   )
// }
