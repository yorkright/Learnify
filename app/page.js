/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ShowCourses from "@/components/ShowCourses";

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const animatedTexts = [
    "Learn at your own pace!",
    "Master new skills online!",
    "Transform your career today!",
    "New Updates and Guide-",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="text-gray-800 body-font pt-28 ">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 md:px-12 py-12">
          <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-purple-500">
                Welcome to Learnify
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mt-4 mb-6">
              The ultimate platform for online learning
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-6">
              {animatedTexts[currentText]}
            </h2>
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <Link href="/login">
                <button className="inline-flex h-12 animate-background-shine font-extrabold items-center justify-center rounded-xl border border-gray-300 bg-[linear-gradient(110deg,#1e293b,45%,#0f172a,55%,#1e293b)] bg-[length:200%_100%] px-6 font-serif text-white transition-colors hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  Get Started
                </button>
              </Link>
              <Link href="/guide">
                <button className="text-gray-800  hover:bg-gray-300 rounded-xl px-6 py-3 text-sm font-medium border border-gray-300 shadow-sm">
                  Blogs / Updates
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img
              src="/Animation - 1736531990286.gif"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
              alt="hero"
            />
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="text-center py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-purple-500">
            Web Development
          </p>
          <p className="text-lg text-gray-700">
            Web development is the process of creating, building, and maintaining websites and web applications for the internet or intranet. It can involve a wide range of tasks, including:
          </p>
          <span className="block text-green-500 mt-4 font-medium">
            “Great web design without functionality is like a sports car with no engine.”
          </span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-600">
            Why Choose Learnify?
          </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Learning",
              description: "Tailored courses and resources to fit your needs.",
              icon: "🎯",
            },
            {
              title: "Zero to Hero",
              description: "Learn all basic to standard concepts in JavaScript.",
              icon: "⭐",
            },
            {
              title: "You Must Read Blogs",
              description: "Access your courses anytime, anywhere with updates.",
              icon: "📚",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-emerald-50 border border-gray-200 shadow-lg rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
            </div>
          </div>
      </section>

      {/* Courses Section */}
      <ShowCourses />
    </>
  );
}
