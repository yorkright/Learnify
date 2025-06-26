/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {

  const features = [
    {
      title: 'File-Based Routing',
      description:
        'Next.js uses a file-based routing system. Pages are created by adding files to the `pages` directory.',
      icon: '/icons/file-routing.svg', // Replace with actual icon paths
    },
    {
      title: 'API Routes',
      description:
        'You can create backend APIs directly in your application using the `pages/api` directory.',
      icon: '/icons/api-routes.svg',
    },
    {
      title: 'Server-Side Rendering',
      description:
        'Render pages on the server at request time to deliver dynamic content quickly.',
      icon: '/icons/ssr.svg',
    },
    {
      title: 'Static Site Generation',
      description:
        'Pre-render pages at build time to serve static HTML content for better performance.',
      icon: '/icons/ssg.svg',
    },
    {
      title: 'Image Optimization',
      description:
        'Optimize your images automatically with the built-in `next/image` component.',
      icon: '/icons/image-optimization.svg',
    },
  ];


  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = "npx create-next-app@latest "; // Text to be copied
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true); // Show success message
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };


  return (
    <div className="">
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-3 text-gray-900">Next.js</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-justify text-gray-700">
          Next.js is a framework for building websites and web applications using JavaScript and React.
          <span className='text-green-700'>It helps developers create faster, more efficient, and user-friendly websites by adding extra features to what React already provides.
          </span>
        </p>
      </main>

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-200">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-900">Set Up of Next.js App-</span>
                <span className="mt-1 text-gray-700 text-sm">Write in your Bash/Terminal-  <br /> <p className='mt-4'> Copy the Green Text</p> </span>
                <h2 className='mt-4 text-gray-900'>Also Install Node.js </h2>
                <a href='https://nodejs.org/en' target='_blank' className="ml-4 text-indigo-600 inline-flex items-center mt-4"> <span className=' ml-3 text-xl text-green-700'>Node.js</span>
                  <svg className="w-4 h-4 flex justify-center items-center ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="md:flex-grow">

                <div className="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
                  <label htmlFor="npm-install" className="sr-only">Command</label>
                  <input
                    id="npm-install"
                    type="text"
                    value="npx create-next-app@latest"
                    readOnly
                    disabled
                    className="col-span-7 bg-gray-100 border border-gray-300 text-gray-900 text-xl rounded-xl p-2.5 focus:ring-blue-500 focus:border-blue-500 font-bold"
                  />
                  <button
                    onClick={handleCopy}
                    className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center"
                  >
                    {copied ? (
                      <span className="inline-flex items-center">
                        <svg
                          className="w-3 h-3 text-white mr-1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                          aria-hidden="true"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                        Copied!
                      </span>
                    ) : (
                      "Copy"
                    )}
                  </button>
                </div>

                <p className="leading-relaxed text-gray-700 mt-4 ">1. Install Tailwind CSS:  <br />
                  <span className='text-green-700'> npm install -D tailwindcss postcss autoprefixer</span>. <br />
                  <span className='text-green-700'>npx tailwindcss init.</span> <br />
                  2. Configure Tailwind CSS: <br />
                  <span className='text-green-700'>Modify tailwind.config.js for Next.js file paths.</span> <br />
                  <span className='text-green-700'>Add Tailwind directives to globals.css.</span> <br />
                  3. Create Components: <br />
                  Use Tailwind classes for styling your React components in pages/index.js. <br />
                  4. Run the App: <br />
                  <span className='text-green-700'> <span className='text-gray-700'>Use</span> npm run dev <span className='text-gray-700'>to start the Next.js app and view your changes.</span></span>  </p> <br />
                <a className="text-indigo-600 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg> <br />
                </a>
                <a href='https://git-scm.com/downloads' target='_blank' className="ml-4 text-indigo-600 inline-flex items-center mt-4">This command write in <span className=' ml-3 text-xl text-green-700'>Git Bash</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <br />
                <Link href="/next/docs">
                  <button className="text-blue-700 hover:text-white border rounded-xl border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4">
                    Documentation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen py-9 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Features of <span className="text-green-700">Next.js</span> <br />
            And this website tell us only the things that you need-
          </h2>

          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <h3 className="text-xl font-semibold text-center text-green-700">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-extrabold text-center mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
            <div className="flex flex-col">
              <div className="flex justify-end mt-4 p-4">
                <Link href="/next/docs">
                  <button className="text-blue-700 hover:text-white border rounded-xl border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4">
                    Documentation
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page