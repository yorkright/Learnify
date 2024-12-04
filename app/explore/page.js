import React from 'react'

import Head from 'next/head'

const exams = [
  { name: 'IAS (Indian Administrative Service)', description: 'A prestigious and highly competitive exam to join the Indian Civil Services.' },
  { name: 'JEE (Joint Entrance Examination)', description: 'An entrance exam for undergraduate engineering programs in India.' },
  { name: 'NEET (National Eligibility cum Entrance Test)', description: 'A medical entrance exam for students seeking admission to MBBS and BDS courses.' },
  { name: 'GATE (Graduate Aptitude Test in Engineering)', description: 'An exam for admission into postgraduate engineering programs.' },
  { name: 'CAT (Common Admission Test)', description: 'A management entrance exam for admission to MBA programs in India.' },
  { name: 'CLAT (Common Law Admission Test)', description: 'A national-level exam for law admissions in India.' },
  { name: 'CSE (Civil Services Examination)', description: 'A competitive exam conducted by UPSC for recruitment to various civil services.' },
  { name: 'SSC CGL (Staff Selection Commission Combined Graduate Level)', description: 'A recruitment exam for various posts in government ministries and departments.' },
  { name: 'UPSC CDS (Combined Defence Services)', description: 'An exam for recruitment into the Indian Military Academy, Indian Naval Academy, etc.' },
  { name: 'CA (Chartered Accountancy)', description: 'A professional exam for aspiring accountants in India, recognized internationally.' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title className='text-white'>Toughest Exams in India</title>
        <meta name="description" content="List of toughest exams in India" />
      </Head>

      <header className=" text-white py-6 text-center">
        <h1 className="text-4xl font-extrabold">Toughest Examinations in India</h1>
        <p className="mt-2 text-lg">Get an insight into the most competitive exams in India.</p>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-700">{exam.name}</h3>
              <p className="text-gray-600 mt-2">{exam.description}</p>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  )
}
