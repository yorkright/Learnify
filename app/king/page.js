'use client'
import { useState } from "react";

export default function Home() {
  const sections = [
    { id: "section1", title: "Introduction", content: <SectionContent /> },
    { id: "section2623", title: "Introduction", content: <SectionContent2 /> },
    { id: "section26234", title: "Introduction", content: <SectionContent2 /> },
    { id: "section2126", title: "Introduction", content: <SectionContent111 /> },
    { id: "section2136", title: "Introduction", content: <SectionContent1111 /> },
    { id: "section216", title: "Introduction", content: <SectionContent1223 /> },
    { id: "section261", title: "Introduction", content: <SectionContent2123 /> },
    { id: "section2", title: "About Us", content: <AboutUs /> },
    { id: "section3", title: "Our Services", content: <OurServices /> },
    { id: "section4", title: "Contact Us", content: <ContactUs /> },
    { id: "section99", title: "Contact Us", content: <ContactUs2 /> },

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
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-gray-800 text-white p-5 space-y-4 overflow-y-auto fixed inset-y-0 z-50 md:relative transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-4">Contents</h2>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="block w-full text-left py-2 px-3   rounded hover:bg-gray-700 transition"
          >
            {section.title}
          </button>
        ))}
      </aside>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden absolute top-28 left-4 bg-gray-800 text-white p-2 rounded z-50"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Main Content */}
      <main className="flex-1 p-5 overflow-y-auto bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Our Website</h1>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="mb-10 p-5 bg-white rounded shadow"
          >
            {section.content}
          </div>
        ))}
      </main>
    </div>
  );
}

function SectionContent() {
  return (
    <>
     <div className='cont max-w-4xl mx-auto gap-6 shadow-md rounded-lg p-6 bg-slate-900  flex justify-center items-center flex-col'>

<h1 className='text-2xl text-white'>2.API routes</h1>
<p className=''>API routes in Next.js are server-side bundles
  that allow you to create a public API without writing custom server code
  <span className='text-green-400 '> How it works....</span> <br />
  API routes are special files in the pages/api folder that are mapped to /api/*. The directory structure automatically maps to URL endpoints, which simplifies organization
</p>

<ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400">
  What they cana do.
  <li>
    Handle HTTP requests
  </li>
  <li>
    Make HTTPS requests
  </li>
  <li>
    Communicate with a database
  </li>
  <li>
    Be deployed as Serverless Functions (also known as Lambdas)
  </li>
</ul>
<h3 className='text-2xl text-white'>How to create them.</h3>

<ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400">
  <li>
    Create a folder named API in your pages/app folder
  </li>
  <li>
    Create a JavaScript file in the pages/api folders
  </li>
  <li>
    Write a function with the following format:
  </li>

</ul>
<pre className="bg-gray-800 text-white p-4  overflow-auto max-w-full rounded-xl">
  <code>{`
  
import { NextResponse } from "next/server";

export async function POST(request) {
let data = await request.json()
console.log(data)
return NextResponse.json({success:true, data: "yes"})
}
`} </code>
</pre>

<div className='bg-black text-white max-w-4xl mx-auto gap-6 shadow-md rounded-xl p-6' >
  <p> Next. js is backend or frontend, when you are
    using API routes or implementing server-side rendering, Next. js is backend as well.</p>
</div>

</div>


    </>
  );
}




function SectionContent2() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Introduction</h1>
      <p className="mb-4">This is the introduction to the topic. It provides an overview.</p>
      <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
        {"// Example code block\nconsole.log('Hello, World!');"}
      </pre>
    </>
  );
}function SectionContent2123() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Introduction</h1>
      <p className="mb-4">This is the introduction to the topic. It provides an overview.</p>
      <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
        {"// Example code block\nconsole.log('Hello, World!');"}
      </pre>
    </>
  );
}function SectionContent1223() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Introduction</h1>
      <p className="mb-4">This is the introduction to the topic. It provides an overview.</p>
      <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
        {"// Example code block\nconsole.log('Hello, World!');"}
      </pre>
    </>
  );
}function SectionContent1111() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Introduction</h1>
      <p className="mb-4">This is the introduction to the topic. It provides an overview.</p>
      <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
        {"// Example code block\nconsole.log('Hello, World!');"}
      </pre>
    </>
  );
}function SectionContent111() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Introduction</h1>
      <p className="mb-4">This is the introduction to the topic. It provides an overview.</p>
      <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
        {"// Example code block\nconsole.log('Hello, World!');"}
      </pre>
    </>
  );
}


function AboutUs() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">About Us</h2>
      <p>We are a company dedicated to excellence.</p>
    </>
  );
}

function OurServices() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Our Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Service 1: Web Development</li>
        <li>Service 2: App Development</li>
        <li>Service 3: SEO Optimization</li>
      </ul>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p>Email us at: <span className="text-blue-500">info@example.com</span></p>
    </>
  );
}

function ContactUs2() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p>Email us at: <span className="text-blue-500">info@example.com</span></p>
    </>
  );
}
