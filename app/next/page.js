/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import {useState} from 'react'
import Link from 'next/link'
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
    const textToCopy = "npm install flowbite"; // Text to be copied
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true); // Show success message
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };


  return (
    <div className="">

      <div className="min-h-screen  py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
          <h2 className="text-4xl font-bold text-center text-gray-500 mb-12">
            Features of <span className="text-green-600">Next.js</span>
          </h2>

          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-4">
                  {/* <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  /> */}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center mt-4">
                  {feature.description}
                </p>

        <Link href="/next/docs">
                  <button className="text-blue-700 hover:text-white border rounded-xl border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 mt-4 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                    Documentation
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>






      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-100">Set Up of Next.js App-</span>
                <span className="mt-1 text-gray-100 text-sm">Wirte in your Bash/Terminal-  <br /> <p className='mt-4'> Copy the Green Text</p> </span>
                <h2 className='mt-4'>Also Install Node.js </h2>
              <a href='https://nodejs.org/en' target='_blank' className="ml-4   text-indigo-500 inline-flex items-center mt-4"> <span className=' ml-3 text-xl text-green-500'>Node.js</span>
                  <svg className="w-4 h-4  felx justify-center items-center ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        className="col-span-7 bg-gray-700 border border-gray-300 text-green-600 text-xl rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 font-bold"
      />
      <button
        onClick={handleCopy}
        className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                
                 <p className="leading-relaxed text-gray-400 mt-4 ">1. Install Tailwind CSS:  <br /> 
                  <span className='text-green-500'>Run npm install -D tailwindcss postcss autoprefixer</span>. <br />
                  <span className='text-green-500'>Initialize Tailwind CSS with npx tailwindcss init.</span> <br />
                  2. Configure Tailwind CSS: <br />
                   <span className='text-green-500'>Modify tailwind.config.js for Next.js file paths.</span> <br />
                   <span className='text-green-500'>Add Tailwind directives to globals.css.</span> <br />
                  3. Create Components: <br />
                  Use Tailwind classes for styling your React components in pages/index.js. <br />
                  4. Run the App: <br />
                  <span className='text-green-500'> <span  className='text-gray-400'>Use</span> npm run dev <span className='text-gray-400'>to start the Next.js app and view your changes.</span></span>  </p> <br />
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg> <br />
                </a>
                <a href='https://git-scm.com/downloads' target='_blank' className="ml-4 text-indigo-500 inline-flex items-center mt-4">This command write in <span className=' ml-3 text-xl text-green-500'>Git Bash</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page