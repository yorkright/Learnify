/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

export default function Home() {
  
  const sections = [
    { id: "section1", title: "API Routes", content: <SectionContent /> },
    { id: "section2", title: "File Based Routing", content: <SectionContent2 /> },
    { id: "section3", title: "Authentication", content: <SectionContent3 /> },
    { id: "section4", title: "Server-Side Rendering", content: <SectionContent4 /> },
    { id: "section5", title: "Dynamic Routing", content: <SectionContent5 /> },
    { id: "section6", title: "Static Site Generation", content: <SectionContent6 /> },
    { id: "section7", title: " Concept: Partial Prerendering (PPR)", content: <AboutUs /> },
    { id: "section8", title: "Our Services", content: <OurServices /> },
    { id: "section9", title: "Contact Us", content: <ContactUs /> },
    { id: "section10", title: "Contact Us (Alt)", content: <ContactUs2 /> },
  ];

  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen pt-32 overflow-hidden">

      {/* Sidebar */}
      <aside
        className={`w-full md:w-64 bg-gray-900 text-white p-6 space-y-4 overflow-y-auto fixed inset-y-0 z-50 md:relative transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <h2 className="text-2xl font-extrabold mb-6 text-center">Contents</h2>
        <nav className="flex flex-col gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden absolute top-28 left-5 z-50 text-white bg-indigo-600 p-3 rounded-full shadow-lg"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 pt-28 p-6 overflow-y-auto">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-14 p-6 rounded-2xl shadow-md hover:shadow-lg transition "
          >
            {section.content}
          </section>
        ))}
      </main>
    </div>
  );
}


function SectionContent() {
  return (
    <>
      <div className='cont max-w-4xl mx-auto gap-6 shadow-md rounded-lg p-6 border-gray-200 border-[2px] flex justify-center items-center flex-col bg-white'>
        <h1 className='text-2xl text-indigo-700 font-bold mb-2'>1. API routes</h1>
        <p className='text-gray-700'>
          API routes in Next.js are server-side bundles
          that allow you to create a public API without writing custom server code.
          <span className='text-green-600 font-semibold'> How it works....</span> <br />
          API routes are special files in the pages/api folder that are mapped to /api/*. The directory structure automatically maps to URL endpoints, which simplifies organization.
        </p>
        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
          <span className="font-semibold text-indigo-600">What they can do:</span>
          <li>Handle HTTP requests</li>
          <li>Make HTTPS requests</li>
          <li>Communicate with a database</li>
          <li>Be deployed as Serverless Functions (also known as Lambdas)</li>
        </ul>
        <h3 className='text-xl text-indigo-700 font-bold mt-4'>How to create them.</h3>
        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
          <li>Create a folder named <span className="font-mono text-blue-700">api</span> in your <span className="font-mono text-blue-700">pages</span> or <span className="font-mono text-blue-700">app</span> folder</li>
          <li>Create a JavaScript file in the <span className="font-mono text-blue-700">pages/api</span> folder</li>
          <li>Write a function with the following format:</li>
        </ul>
        <pre className="bg-gray-100 text-gray-800 p-4 overflow-auto max-w-full rounded-xl border border-gray-200">
          <code>{`
import { NextResponse } from "next/server";

export async function POST(request) {
  let data = await request.json()
  console.log(data)
  return NextResponse.json({success:true, data: "yes"})
}
`} </code>
        </pre>
        <div className='bg-indigo-50 text-indigo-900 max-w-4xl mx-auto gap-6 shadow rounded-xl p-6 mt-4 border border-indigo-100'>
          <p>
            Next.js is backend or frontend? When you are using API routes or implementing server-side rendering, Next.js is backend as well.
          </p>
        </div>
      </div>
    </>
  );
}

function SectionContent2() {
  return (
    <>
      <div className='cont max-w-4xl mx-auto gap-6 shadow-md rounded-lg p-6 border-gray-200 border-[2px] flex justify-center items-center flex-col bg-white'>
        <h1 className='text-2xl text-indigo-700 font-bold mb-2'>
          2. File Based <span className='text-3xl font-serif text-green-600'>Routing</span>
        </h1>
        <p className='text-gray-700'>
          Next.js uses a file-system based router where: Folders are used to define routes.
          A route is a single path of nested folders, following the file-system
          hierarchy from the root folder down to a final leaf folder that includes a page.js file.
        </p>
        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
          <li>pages/index.js → <span className="text-blue-700 font-mono">/</span> (Home page)</li>
          <li>pages/about.js → <span className="text-blue-700 font-mono">/about</span></li>
          <li>pages/blog.js → <span className="text-blue-700 font-mono">/blog</span></li>
        </ul>
        <div style={{ width: '50%', height: '40%', margin: '0 auto' }}>
          <Image
            src="/filebr.png"
            alt="Example Image"
            className="border-4 border-indigo-200 shadow-md"
            layout="responsive"
            width={26}
            height={19}
            priority
          />
        </div>
      </div>
    </>
  );
}

function SectionContent3() {
  return (
    <>
      <div className='cont max-w-4xl mx-auto gap-6 shadow-md rounded-lg p-6 border-gray-200 border-[2px] flex justify-center items-center flex-col bg-white'>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-indigo-700 font-bold mb-2'>3. Authentication</h1>
        <Link href={'https://next-auth.js.org/'} className="text-white bg-indigo-600 hover:bg-indigo-700 rounded font-extrabold text-xl px-3 py-1" target="_blank">Next-Auth</Link>
        <p className='text-gray-700 mt-2'>
          Authentication in web development is the process of verifying a users identity.<br />
          <span className="text-green-600 font-semibold">Purpose:</span><br />
          Authentication is used to confirm that a user is who they say they are, and that a server is the system it claims to be.<br />
          <span className="text-green-700 font-semibold">Methods:</span><br />
          Authentication can be implemented in many ways, including:<br />
          Username and password: A traditional method of authentication<br />
          Biometrics: Fingerprint readers, facial recognition, or retina scans<br />
          One-time tokens: Physical devices or other tokens that can be used for authentication<br />
          Certificates: A trusted third party can issue a certificate to a client to verify the servers identity
        </p>
        <div className="flex gap-4 mt-4">
          <Link href="/next/docs/auth">
            <button className="text-white bg-blue-600 hover:bg-blue-700 border rounded-xl border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
              Full Authentication setup Guide
            </button>
          </Link>
          <Link href="/Screenshot_20241122-232333.png">
            <button className="text-white bg-blue-600 hover:bg-blue-700 border rounded-xl border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
              Image
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

function SectionContent4() {
  return (
    <>
      <div className='cont max-w-4xl mx-auto gap-6 shadow-md rounded-lg p-6 border-gray-200 border-[2px] flex justify-center items-center flex-col bg-white'>
        <h1 className='text-2xl text-indigo-700 font-bold mb-2'>4. Server Side Rendering</h1>
        <p className='text-gray-700'>
          Server-side rendering (SSR) in Next.js is a web development technique that generates a page&rsquo;s
          HTML on the server when a user requests it. This is different from client-side rendering (CSR),
          where the browser downloads the HTML and then uses JavaScript to display the content.
        </p>
        <pre className="bg-gray-100 text-gray-800 p-4 overflow-auto max-w-full rounded-xl border border-gray-200">
          <code>{`
export default function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://.../data')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
`} </code>
        </pre>
        <Link href="/next/docs/auth">
          <button className="text-white bg-blue-600 hover:bg-blue-700 border rounded-xl border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm px-5 py-2.5 text-center mt-4 dark:border-blue-500 dark:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Learn More
          </button>
        </Link>
      </div>
    </>
  );
}

function SectionContent5() {
  return (
    <>
      <div className='cont max-w-4xl mx-auto gap-3 shadow-md rounded-lg p-6 border-gray-200 border-[2px] flex justify-center items-center flex-col bg-white'>
        <h1 className="text-2xl font-bold text-indigo-700 mb-2">5. Dynamic Routing</h1>
        <p className="mb-2 text-gray-700">One of the most useful concepts of Next.js</p>
        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
          <span className="font-semibold text-indigo-600">How it works:</span>
          <p className="mb-2">A Dynamic Segment can be created by wrapping a folder&rsquo;s name in square brackets: <span className="font-mono text-blue-700">[folderName]</span>. For example, <span className="font-mono text-blue-700">[id]</span> or <span className="font-mono text-blue-700">[slug]</span>.</p>
        </ul>
        <p className='text-gray-700'>
          Next.js dynamic route segments allow for the creation of flexible and dynamic
          URLs by using bracket syntax in the pages directory.
          This enables the handling of variable paths and creating pages based on dynamic content.
        </p>
        <pre className="bg-gray-100 text-gray-800 p-4 overflow-auto max-w-full rounded-xl border border-gray-200">
          <code>{`export default async function Page({ params }) {
  const slug = (await params).slug
  return <div>My Post: {slug}</div>
}
`} </code>
        </pre>
        <Link href="https://github.com/yorkright?tab=repositories">
          <button className="text-white bg-blue-600 hover:bg-blue-700 border rounded-xl border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm px-5 py-2.5 text-center mt-4 dark:border-blue-500 dark:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Real Time Example
          </button>
        </Link>
      </div>
    </>
  );
}

function SectionContent6() {
  return (
    <>
      <div className='cont max-w-4xl mx-auto gap-3 shadow-md rounded-lg p-6 border-gray-200 border-[2px] flex justify-center items-center flex-col bg-white'>
        <h1 className="text-2xl font-bold mb-2 text-indigo-700">6. Static Site Generation</h1>
        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
          <p className="mb-2">
            In Next.js, Static Site Generation (SSG) pre-renders HTML pages at build time, serving them as static files for faster loading and improved SEO, especially for content that doesn&rsquo;t change frequently.
          </p>
        </ul>
        <p className='text-gray-700'>
          <span className="font-semibold text-indigo-600">What is SSG?</span><br />
          <span className="font-semibold">Pre-rendering:</span> SSG, as the name suggests, generates static HTML files during the build process, not on each user request.<br />
          <span className="font-semibold">Performance:</span> This pre-rendering leads to faster page load times and a better user experience because the browser receives fully formed HTML instead of needing to render it from scratch.<br />
          <span className="font-semibold">SEO:</span> Search engines can easily crawl and index SSG pages, as they are just HTML files, improving SEO.
        </p>
        <pre className="bg-gray-100 text-gray-800 p-4 overflow-auto max-w-full rounded-xl border border-gray-200">
          <code>{`export default async function Page({ params }) {
  const slug = (await params).slug
  return <div>My Post: {slug}</div>
}
`} </code>
        </pre>
        <Link href="/project structure of job board ...docx">
          <button className="text-white bg-blue-600 hover:bg-blue-700 border rounded-xl border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm px-5 py-2.5 text-center mt-4 dark:border-blue-500 dark:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Real Time Example
          </button>
        </Link>
      </div>
    </>
  );
}

function AboutUs() {
  return (
    <>
      <div className='cont max-w-4xl mx-auto gap-3 shadow-md rounded-lg p-6 border-gray-200 border-[2px] flex justify-center items-center flex-col bg-white'>
        <h1 className="text-2xl font-bold mb-2 text-indigo-700">7. Partial Prerendering (PPR)</h1>
        <p className="mb-2 font-extrabold text-gray-700">
          ✅ <span className="text-indigo-700">What is it?</span><br />
          Partial Prerendering allows a page to be partially pre-rendered at build time (SSG) while deferring some parts of the page to render dynamically on the client or server when requested. It combines the benefits of Static Site Generation (SSG) and Server-Side Rendering (SSR) — on a single page.
        </p>
        <p className='text-gray-700'>
          ✅ <span className="text-indigo-700">Why is it useful?</span><br />
          Traditionally, pages are either:<br />
          <span className="font-semibold text-green-600">SSG:</span> Fully static at build time.<br />
          <span className="font-semibold text-blue-600">SSR:</span> Fully dynamic at request time.<br />
          But sometimes you want:<br />
          Static content (like headers, navigation, layout, etc.)<br />
          Dynamic content (like user-specific data, or live comments)<br />
          PPR allows both in one page.
        </p>
        <h4 className="text-xl font-sans text-rose-600 font-semibold mt-4">
          ✅ Example Use Case<br />
          Imagine a blog post page:<br />
          Title, content, author info → can be statically generated.<br />
          Comments section → needs to be dynamically fetched from the server.<br />
          With PPR:<br />
          The blog post renders instantly from the static cache.<br />
          The comments load after, without blocking the main content.
        </h4>
      </div>
    </>
  );
}

function OurServices() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-indigo-700">Our Services</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Service 1: Web Development</li>
          <li>Service 2: App Development</li>
          <li>Service 3: SEO Optimization</li>
        </ul>
      </div>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-indigo-700">Contact Us</h2>
        <p className="text-gray-700">
          Email us at: <span className="text-blue-600 font-semibold">info@example.com</span>
        </p>
      </div>
    </>
  );
}

function ContactUs2() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-indigo-700">Contact Us</h2>
        <p className="text-gray-700">
          Email us at: <span className="text-blue-600 font-semibold">info@example.com2</span>
        </p>
      </div>
    </>
  );
}
