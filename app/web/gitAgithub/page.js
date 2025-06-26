// pages/frameworks.js
import Image from 'next/image';

const gitContent = [
    {
      title: "What is Git?",
      content: "Git is a distributed version control system that tracks changes in source code during software development. It's designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
    },
    {
      title: "Key Features of Git",
      list: [
        "Distributed Version Control",
        "Branching and Merging",
        "Small and Fast",
        "Data Integrity",
        "Staging Area"
      ]
    },
    {
      title: "GitHub Basics",
      sections: [
        {
          subtitle: "Repositories",
          description: "Repositories are where your project files and version history live."
        },
        {
          subtitle: "Pull Requests",
          description: "Pull requests let you tell others about changes you've pushed to a branch."
        }
      ]
    }
  ];
  /*
    Update color classes for white background:
    - Remove text-blue-100, text-blue-300, text-gray-100, text-gray-300.
    - Use text-gray-900 for headings, text-gray-700 for body.
    - Use border-gray-200 and shadow-gray-200.
    - Remove hover:shadow-blue-700/90 or use hover:shadow-gray-300.
  */
  export default function GitGitHubPage() {
    return (
      <div className="min-h-screen cursor-pointer p-8 pt-28 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Git & GitHub Essentials
        </h1>

        <div className="space-y-6">
        <section className="border border-gray-200 bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-gray-300 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">{gitContent[0].title}</h2>
          <p className="text-gray-700">{gitContent[0].content}</p>
        </section>

        <section className="border border-gray-200 bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-gray-300 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">{gitContent[1].title}</h2>
          <ul className="list-disc pl-6 text-gray-700">
          {gitContent[1].list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
        </section>

        <section className="border border-gray-200 bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-gray-300 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">{gitContent[2].title}</h2>
          <div className="space-y-4">
          {gitContent[2].sections.map((section, index) => (
            <div key={index}>
            <h3 className="text-xl font-medium mb-2 text-gray-800">{section.subtitle}</h3>
            <p className="text-gray-700">{section.description}</p>
            </div>
          ))}
          </div>
        </section>
        </div>
      </div>
      </div>
    );
}
