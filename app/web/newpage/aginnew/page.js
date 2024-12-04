/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-black mb-8">
          HTML Basics Explained
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Basic HTML Structure</h2>
          <p className="text-gray-600">
            An HTML document consists of a <code>&lt;head&gt;</code> section for metadata and a <code>&lt;body&gt;</code> section for visible content.
          </p>
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Text Formatting Tags</h2>
          <p className="text-gray-600">
            HTML provides several tags to format text:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li><code>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;</code> for headings</li>
            <li><code>&lt;p&gt;</code> for paragraphs</li>
            <li><code>&lt;strong&gt;</code> for bold text</li>
            <li><code>&lt;em&gt;</code> for italic text</li>
            <li><code>&lt;br&gt;</code> for line breaks</li>
          </ul>
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<strong>This text is bold.</strong>
<em>This text is italic.</em>`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Links and Images</h2>
          <p className="text-gray-600">
            You can add links and images using the following tags:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li><code>&lt;a href="URL"&gt;</code> for creating links</li>
            <li><code>&lt;img src="image.jpg" alt="Description"&gt;</code> for adding images</li>
          </ul>
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`<a href="https://www.example.com">Visit Example</a>
<img src="image.jpg" alt="An example image" />`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Lists</h2>
          <p className="text-gray-600">
            HTML allows you to create ordered (numbered) and unordered (bulleted) lists:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li><code>&lt;ul&gt;</code> for unordered lists</li>
            <li><code>&lt;ol&gt;</code> for ordered lists</li>
            <li><code>&lt;li&gt;</code> for list items</li>
          </ul>
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Forms</h2>
          <p className="text-gray-600">
            Forms allow users to input and submit data. The basic form elements are:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li><code>&lt;form&gt;</code> for creating the form container</li>
            <li><code>&lt;input&gt;</code> for different types of input fields</li>
            <li><code>&lt;button&gt;</code> for form submission buttons</li>
            <li><code>&lt;label&gt;</code> for labeling input fields</li>
          </ul>
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <button type="submit">Submit</button>
</form>`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Semantic HTML</h2>
          <p className="text-gray-600">
            Using semantic HTML tags provides meaning to the content. Examples of semantic tags include:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li><code>&lt;header&gt;</code> for page headers</li>
            <li><code>&lt;footer&gt;</code> for page footers</li>
            <li><code>&lt;article&gt;</code> for articles or sections of content</li>
            <li><code>&lt;section&gt;</code> for sections within the page</li>
          </ul>
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`<header>
  <h1>Page Header</h1>
</header>

<article>
  <h2>Article Title</h2>
  <p>This is an article.</p>
</article>

<footer>
  <p>Footer content</p>
</footer>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
