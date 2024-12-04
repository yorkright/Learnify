import React from 'react'

const courses = [
    { title: 'JEE Main Preparation', description: 'Comprehensive course covering all JEE Main topics.' },
    { title: 'NEET Preparation', description: 'In-depth preparation for NEET with expert guidance.' },
    { title: 'Physics for JEE', description: 'Master the concepts of Physics for competitive exams.' },
    { title: 'Chemistry for JEE', description: 'Detailed Chemistry course tailored for JEE/NEET.' },
    { title: 'Mathematics for JEE', description: 'Strengthen your Math skills for JEE/NEET.' },
];

const Courses = () => {
    return (
        
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <a href="#"
                             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Paid</a>
                        </div>
                    ))}
                </div>
            </div>
            <center>
            <div className=" ml-5 mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-black font-semibold text-lg gap-5 flex justify-center items-center ">
            <div  className="  bg-slate-100 rounded-lg shadow-lg p-6 ">
                <p> Toughest Examinations in India </p> <br />
                <h5>Get an insight into the most competitive exams in India.-</h5> <br />
                <a  className="bg-yellow-500 text-gray-800 py-3 px-6 rounded-full text-xl hover:bg-green-600 transition duration-300"
                  href="/explore">Click</a>
              </div>
              </div>
              </div>
              </center>
        </section>

);
};

export default Courses;