import Link from "next/link";
import React from "react";

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

  return (
    <>
<main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-3">React.js</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-justify text-gray-200">
        React.js, or React, is a free, open-source JavaScript library for building user interfaces (UIs). It&lsquo;s used to create websites and web applications.        </p>

      </main>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-100">
                  Set Up of React App-
                </span>
                <span className="mt-1 text-gray-100 text-sm">23/11/2024</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-300 title-font mb-2">
                  npx create-next-app@latest my-next-app.
                </h2>
                <p className="leading-relaxed text-gray-400">
                  1. Install Tailwind CSS: <br />
                  Run npm install -D tailwindcss postcss autoprefixer. <br />
                  Initialize Tailwind CSS with npx tailwindcss init. <br />
                  2. Configure Tailwind CSS: <br />
                  Modify tailwind.config.js for Next.js file paths. <br />
                  Add Tailwind directives to globals.css. <br />
                  3. Create Components: <br />
                  Use Tailwind classes for styling your React components in
                  pages/index.js. <br />
                  4. Run the App: <br />
                  Use npm run dev to start the Next.js app and view your
                  changes.
                </p>
                <br />
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <br />
                </a>
                <a
                  href="https://git-scm.com/downloads"
                  target="_blank"
                  className="ml-4 text-indigo-500 inline-flex items-center mt-4"
                >
                  This command write in{" "}
                  <span className=" ml-3 text-xl text-green-500"> Bash</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <Link href="/react/docs">
                  <button className="text-slate-700  ml-5 font-extrabold hover:text-white border rounded-xl border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-100 mt-4 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-100 dark:focus:ring-blue-800">
                    Documentation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <div className="min-h-screen  py-9">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
          <h2 className="text-4xl font-bold text-center text-gray-500 mb-12">
                 Real time examples with <span className="text-green-600">React.js</span> <br />
          </h2>

          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center mt-4">
                  {feature.description}
                </p>
             
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
