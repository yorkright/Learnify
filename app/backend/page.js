import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen p-8 pt-28 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
          Backend Development
        </h1>

        <div className="space-y-6">
          <section className="bg-white border border-gray-200 text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-200 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">What is Backend?</h2>
            <p className="text-gray-700">
              The backend is the server-side of web development, handling data storage, business logic, and server operations. Its the invisible powerhouse that makes web applications function.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-4">
              <li>Manages database operations and data storage</li>
              <li>Handles user authentication and security</li>
              <li>Processes form submissions and API requests</li>
            </ul>
          </section>

          <section className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-blue-200 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Key Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-2 text-blue-600">Programming Languages</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-blue-600">Databases</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-blue-200 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Why Learn Backend?</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>High demand in job market</li>
              <li>Better understanding of full-stack development</li>
              <li>Create secure and scalable applications</li>
              <li>Work with data and APIs</li>
            </ul>
          </section>

          <section className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-blue-200 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Start Your Journey</h2>
            <Link href="/backend/lessons">
              <button className="inline-block bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                Start Learning Backend
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page