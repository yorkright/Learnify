import React from 'react'

const page = () => {
  return (


    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-100">Set Up of React App-</span>
              <span className="mt-1 text-gray-100 text-sm">23/11/2024</span>

            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-300 title-font mb-2">npx create-next-app@latest my-next-app.</h2>
              <p className="leading-relaxed text-gray-400">1. Install Tailwind CSS:  <br />
                Run npm install -D tailwindcss postcss autoprefixer. <br />
                Initialize Tailwind CSS with npx tailwindcss init. <br />
                2. Configure Tailwind CSS: <br />
                Modify tailwind.config.js for Next.js file paths. <br />
                Add Tailwind directives to globals.css. <br />
                3. Create Components: <br />
                Use Tailwind classes for styling your React components in pages/index.js. <br />
                4. Run the App: <br />
                Use npm run dev to start the Next.js app and view your changes.</p> <br />
              <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg> <br />
              </a>
              <a href='https://git-scm.com/downloads' target='_blank' className="ml-4 text-indigo-500 inline-flex items-center mt-4">This command write in <span className=' ml-3 text-xl text-green-500'> Bash</span>
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">app.js</span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
           
            <pre className="bg-gray-800 text-white p-4 rounded-lg">
          <code>{`function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}`}</code>
        </pre>


           
              <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">app.js</span>
              <span className="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
              <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default page