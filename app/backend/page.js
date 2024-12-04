import React from 'react'

const page = () => {
  return (



    <div className="">


      <div className="cont max-w-4xl mx-auto  shadow-md rounded-lg p-6 bg-slate-700 flex justify-center items-center flex-col">
        <header className='font-serif text-2xl text-white '>
          <h1> Introduction </h1>
        </header>


        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white mt-5">What is Backend</h2>
        <p>The backend is the part of a website or application that runs on servers, not directly visible to users. It handles data storage, business logic, and server-side functionality.</p>
        <ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400">
          <li>
            When you log in to a website, the backend checks if your username and password are correct.
          </li>
          <li>
            When you click Buy the backend processes the payment and updates the database.
          </li>
        </ul>



      </div>







    </div>

  )
}

export default page