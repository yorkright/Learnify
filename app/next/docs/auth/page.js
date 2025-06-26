"use client"
import { motion, useScroll } from "motion/react"
import Link from "next/link"

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#2cfc03",
                }}
            />
            <Content />
        </>
    )
}

/**
 * ==============   Utils   ================
 */

function Content() {
    return (
        <>
               <div className="min-h-screen rounded-xl  py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold   overflow-x-scroll text-center text-black mb-8">
         Authentication/Authorization in Next-js
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Basic Authentication from next-auth</h2>
          <h3 className="font-bold text-gray-800 mb-3" > Follow  the following steps <br />
           <Link href={''} className="text-green-500">Watch the video</Link> 
           </h3>
          <p className="text-black">
            create a folder in app/src <span className="bg-slate-500 text-gray-900"> component </span> and In the component forlder create <span className="bg-slate-500">SessionWrapper.js </span>  
          </p>
          
<div className='bg-black text-white max-w-2xl mx-auto gap-6 shadow-md rounded-xl p-3 mt-4' >
  <p>Focus to  Write a spellings carefull </p>
</div>
          <pre className="bg-gray-700 p-4 mt-4 rounded-xl text-sm overflow-x-auto">
            {`               'use client'
            import { SessionProvider } from "next-auth/react"
            const SessionWrapper = ({ children }) => {
                return (
                    <SessionProvider>
                        {children}
                    </SessionProvider>
                )
            }
            export default SessionWrapper`}
          </pre>
        </section>
        

        <section className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4"> Create <span className="bg-slate-500 text-gray-900 rounded-xl"> .env.local  </span>  Basically its enviroment variables. </h3> 
          <p className="text-gray-800 font-bold ">
            Write your own Github ID an Github SECRET- With help of OAuth in  (_Devloper_setting_)  in Github  
          </p>
          {/* <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li><code>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;</code> for headings</li>
            <li><code>&lt;p&gt;</code> for paragraphs</li>
            <li><code>&lt;strong&gt;</code> for bold text</li>
            <li><code>&lt;em&gt;</code> for italic text</li>
            <li><code>&lt;br&gt;</code> for line breaks</li>
          </ul> */}
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`
GITHUB_ID=YOUR_GITHUB_ID
GITHUB_SECRET=YOUR_GITHUB_SECRET

// Same as to provide the Google ID and secret...
`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">In you Login Page </h2>
          <p className="text-gray-800 font-bold">
            Write this code  in Login page  
          </p>
          <div className='bg-black text-white max-w-2xl mx-auto gap-6 shadow-md rounded-xl p-3 mt-4' >
  <p>You must write&lsquo;use client&lsquo; because in next js by default all components are server-sdie rendered </p>
</div>
         
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}
`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">In pages/app create a 
             
            <span className="bg-slate-600 text-black overflow-x-auto rounded-xl ml-2"> api/auth/[...nextauth]/route.js 
             </span>
             </h2>
          <p className="text-gray-800 font-bold">
            Write this code  in this--  
          </p>
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler =  NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ]
})

export { handler as GET,handler as POST}
  </>
}
`}
          </pre>
        </section>


        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4"> Last step- </h2>
          <p className="text-gray-800  font-bold">
              In layout.js Wrap the children to Sessionwrapper and import it-
          </p>
         
          <pre className="bg-gray-700 p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            {`import localFont from "next/font/local";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"$"{geistSans.variable}" $"{geistMono.variable}" antialiased"}
      >
        <SessionWrapper>
                  {children}  
           </SessionWrapper>
      </body>
    </html>
  );
}`}
          </pre>
        </section>
      </div >
    </div >
        </>
    )
}





