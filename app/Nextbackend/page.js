import Link from "next/link";

export default function BackendBasics() {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-200 mb-6">
          Basics of Backend Web Development with Next.js
        </h1>
        
        <div className="space-y-6">
          {/* Server-Side Rendering (SSR) */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              1. Server-Side Rendering (SSR)
            </h2>
            <p className="text-gray-700">
              Next.js can render content on the server for every request using 
              <code className="bg-gray-200 px-1 py-0.5 rounded">getServerSideProps</code>. 
              This is useful for dynamic data, like fetching user-specific content.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-gray-800 mt-2">
              {`export async function getServerSideProps(context) {
  const data = await fetch('https://api.example.com/data');
  const result = await data.json();
  return { props: { result } };
}`}
            </pre>
          </section>

          {/* API Routes */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              2. API Routes
            </h2>
            <p className="text-gray-700">
              API Routes in Next.js let you create backend endpoints within your app.
              You can use these routes to handle requests, process data, or connect to a database.
            </p>
            <p className="text-gray-700">
              Example: Create a file <code className="bg-gray-200 px-1 py-0.5 rounded">pages/api/hello.js</code>:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-gray-800 mt-2">
              {`export default function handler(req, res) {
  res.status(200).json({ message: "Hello, World!" });
}`}
            </pre>
          </section>

          {/* Dynamic Routing */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">
              3. Dynamic Routing
            </h2>
            <p className="text-gray-700">
              With Next.js, you can create dynamic pages based on the URL. 
              For example, a file named <code className="bg-gray-200 px-1 py-0.5 rounded">[id].js</code> in your `pages` folder generates a route like <code>/post/1</code>.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-gray-800 mt-2">
              {`export async function getServerSideProps(context) {
  const { id } = context.params;
  const data = await fetch(\`https://api.example.com/posts/\${id}\`);
  const post = await data.json();
  return { props: { post } };
}`}
            </pre>
          </section>

          {/* Tailwind Styling */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-2">
              4. Tailwind for Backend Feedback
            </h2>
            <p className="text-gray-700">
              Tailwind CSS can be used to style server responses and make your backend feedback visually clear. For example:
            </p>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded mt-2">
              Success: Data loaded successfully!
            </div>
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded mt-2">
              Error: Unable to fetch data.
            </div>
          </section>
        </div>

        <div className="mt-8">
          <Link href="/web" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
