/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const ShowCourses = () => {
  return (
    <div>
         <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Full Stack Web Development",
                desc: "Master Full-Stack Web Development with interactive lessons, hands-on projects, and real-world skills—all in one place!",
                img: "/4893415.jpg",
                href: "/web",
              },
              {
                title: "Git And Github",
                desc: "Git = Version Control Github =",
                img: "/github.png",
                href: "/web/gitAgithub",
              },
              {
                title: "Frontend Development",
                desc: "Master frontend development and create modern, user-friendly web interfaces with ease!",
                img: "https://img.freepik.com/premium-vector/front-end-developer-typographic-header_277904-11487.jpg?w=996",
                href: "/web/newpage",
              },
              {
                title: "Backend Web Development",
                desc: "Master Backend development and create secure internal systems with ease!",
                img: "/API.png",
                href: "/backend",
              },
            ].map((course, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={course.img}
                  alt="Course Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.desc}</p>
                  <Link href={course.href} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Explore
                  </Link>
                </div>
              </div>
            ))}

            {/* Newsletter */}
            <div className="flex flex-col items-start bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-6">
              <div className="bg-blue-100 p-3 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" height="28" width="28">
                  <path strokeLinejoin="round" strokeWidth="2.5" stroke="#2563eb" d="m7.084 9.917-1.727 1.15c-1.238.826-1.856 1.239-2.192 1.868-.335.629-.333 1.368-.328 2.848.006 1.78.023 3.594.069 5.43.108 4.356.163 6.534 1.764 8.135 1.601 1.602 3.809 1.657 8.223 1.767 2.747.069 5.469.069 8.215 0 4.414-.11 6.622-.165 8.223-1.767s1.656-3.779 1.764-8.135c.046-1.836.063-3.65.069-5.43.005-1.48.007-2.219-.328-2.848-.336-.63-.954-1.042-2.192-1.867l-1.727-1.151" />
                  <path strokeLinejoin="round" strokeWidth="2.5" stroke="#2563eb" d="m2.833 14.167 9.794 5.876c2.13 1.278 3.196 1.917 4.373 1.917s2.243-.639 4.373-1.917l9.794-5.876" />
                  <path strokeWidth="2.5" stroke="#2563eb" d="M7.083 17V8.5c0-2.671 0-4.007.83-4.837s2.166-.83 4.837-.83h8.5c2.671 0 4.007 0 4.837.83s.83 2.166.83 4.837V17" />
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#2563eb" d="M14.167 14.167h5.666M14.167 8.5h5.666" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold mt-4 text-gray-800">Subscribe for updates</h1>
              <p className="text-sm mt-2 text-gray-600">Subscribe to this weekly newsletter so you dont miss out on the latest hot tech topics.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-sm border border-gray-300 w-full px-4 h-10 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="button" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white w-full h-10 mt-3 rounded text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShowCourses