import React from 'react';
import Link from 'next/link';

const MongoDBPage = () => {
    return (
        <div className="min-h-screen cursor-pointer p-8 pt-28 ">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">MongoDB Basics</h1>
                
                <div className="space-y-6">
                    <section className="bg-gray-800/50 backdrop-blur border border-gray-700 text-white p-6 rounded-lg shadow-lg hover:shadow-blue-700/90 transition-all">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">What is MongoDB?</h2>
                        <p className="text-gray-300">
                            MongoDB is a popular NoSQL database that provides high performance, high availability, and easy scalability. 
                            It works on concept of collections and documents.
                        </p>
                    </section>

                    <section className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-blue-700/90 transition-all">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Key Features</h2>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li>Document-Oriented Storage</li>
                            <li>High Performance</li>
                            <li>Rich Query Language</li>
                            <li>High Availability</li>
                            <li>Horizontal Scalability</li>
                        </ul>
                    </section>

                    <section className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-blue-700/90 transition-all">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Basic Concepts</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium mb-2 text-blue-300">Collections</h3>
                                <p className="text-gray-300">Collections are like tables in relational databases. They hold related documents.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-2 text-blue-300">Documents</h3>
                                <p className="text-gray-300">Documents are like rows in SQL, stored in BSON (Binary JSON) format.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-blue-700/90 transition-all">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Want to Learn More?</h2>
                        <Link 
                            href="/tutorials/mongodb"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 hover:scale-105 transition-all duration-300"
                        >
                            Start MongoDB Tutorial
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MongoDBPage;
