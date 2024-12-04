import React from 'react'


const Contact = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="md:w-1/2">
                        <form className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    rows="4"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-800"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-gray-600 mb-2">Feel free to reach out to us through the following channels:</p>
                        <p className="flex items-center mb-2">
                            <span className="font-medium">📞</span>
                            <span className="ml-2">+1 (234) 567-890</span>
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="font-medium">✉️</span>
                            <span className="ml-2">info@educationplatform.com</span>
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="font-medium">📍</span>
                            <span className="ml-2">123 Education St, Learning City, ED 12345</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;