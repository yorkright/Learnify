/* eslint-disable @next/next/no-img-element */
// pages/learning.js
import Link from 'next/link';

const LearningPage = () => {
    return (
<div className="">
       <div>
      <div className="max-w-4xl mx-auto p-8">
      <li>
        <Link href="/web/newpage/aginnew">Go to New Page</Link>
      </li>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-100">Learn HTML, CSS, and JavaScript</h1>
        <p className="text-xl text-gray-200 mt-4">A beginners guide to web development</p>
      </header>
    
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">HTML: The Structure of a Web Page</h2>
        <p className="text-lg text-gray-200 mb-4">
          HTML (Hypertext Markup Language) is the standard language used to create web pages.
          It provides the structure for web content. Here an example of HTML code:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg">
          <code>{`<html>
      <head>
        <title>My Web Page</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
        <p>Welcome to my web page.</p>
      </body>
    </html>`}</code>
        </pre>
      </section>
    
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">CSS: Styling Your Web Page</h2>
        <p className="text-lg text-gray-200 mb-4">
          CSS (Cascading Style Sheets) is used to style the content created with HTML. It controls
          the layout, colors, fonts, and more. Heres an example of CSS code:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg">
          <code>{`body {
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    }
    
    h1 {
      color: #3498db;
    }
    
    p {
      font-size: 18px;
      color: #333;
    }`}</code>
        </pre>
      </section>
    
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">JavaScript: Making Your Page Interactive</h2>
        <p className="text-lg text-gray-200 mb-4">
          JavaScript is a programming language that allows you to create interactive effects on your web pages.
          Here an example of JavaScript:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg">
          <code>{`<button onclick="alert('Hello, world!')">Click Me</button>`}</code>
        </pre>
        <p className="text-lg text-gray-200 mt-4">
          The JavaScript code above will show an alert when the button is clicked.
        </p>
      </section>
    </div>
    
    </div>

            
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100"> Simple Project for
              <br className="hidden lg:inline-block text-white" />logic building or basics clearation
            </h1>
            <p className="mb-8 leading-relaxed text-gray-100">-</p>
            <div className="flex justify-center">
              <Link href="https://github.com/yorkright?tab=repositories">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-600 rounded text-lg">GitHub</button>
              </Link>
              <Link href="https://github.com/yorkright?tab=repositories">
                <button
                 className=" ml-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-600 rounded text-lg">
                    Code
                    </button>
              </Link>


            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" />
          </div>

        </div>


      </section>
        </div> 
        
    );
};

export default LearningPage;
