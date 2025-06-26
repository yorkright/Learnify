'use client'
import { useState } from "react";

const QuizPage = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: "Pacific",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };


  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };



  return (

    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className=" shadow-lg rounded-lg p-6 w-full max-w-md">
        {showResults ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
            <p className="mb-6">You scored {score} out of {questions.length}</p>
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p className="mb-6">{questions[currentQuestionIndex].question}</p>
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`w-full px-4 py-2 text-left border rounded hover:bg-gray-200 ${
                    selectedAnswer === option ? "bg-blue-100 border-blue-500" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="mt-6 bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
            >
              {currentQuestionIndex + 1 === questions.length ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  
  
  );
};

export default QuizPage;

// Tailwind CSS: Add responsiveness and styling via Tailwind utility classes.
// Usage: Navigate to /quiz in your Next.js app to view the Quiz page.





















// import React from 'react'


// const Contact = () => {
//     return (
//         <section className="py-20 bg-gray-100">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
//                 <div className="flex flex-col md:flex-row justify-center">
//                     <div className="md:w-1/2">
//                         <form className="bg-white p-8 rounded-lg shadow-lg">
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                                 <input
//                                     type="text"
//                                     className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                     placeholder="Enter your name"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700">Email Address</label>
//                                 <input
//                                     type="email"
//                                     className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                     placeholder="Enter your email"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700">Message</label>
//                                 <textarea
//                                     className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                     rows="4"
//                                     placeholder="Your message"
//                                     required
//                                 ></textarea>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-800"
//                             >
//                                 Send Message
//                             </button>
//                         </form>
//                     </div>
//                     <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
//                         <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
//                         <p className="text-gray-600 mb-2">Feel free to reach out to us through the following channels:</p>
//                         <p className="flex items-center mb-2">
//                             <span className="font-medium">📞</span>
//                             <span className="ml-2">+1 (234) 567-890</span>
//                         </p>
//                         <p className="flex items-center mb-2">
//                             <span className="font-medium">✉️</span>
//                             <span className="ml-2">info@educationplatform.com</span>
//                         </p>
//                         <p className="flex items-center mb-2">
//                             <span className="font-medium">📍</span>
//                             <span className="ml-2">123 Education St, Learning City, ED 12345</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;