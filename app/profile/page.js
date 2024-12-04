"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";



const Proflie = () => {
    const { data: session } = useSession()



    return (
        <>

  <div className="flex justify-center items-center">
                {session &&

                    <><div className="min-h-[6vh] flex items-center  justify-center py-10">
                        <div className=" shadow-lg rounded-lg overflow-hidden max-w-2xl w-full">
                            {/* Header Section */}
                            <div className=" h-32"></div>
                            <div className="relative -mt-16 flex flex-col items-center">
                                {/* Profile Picture */}
                                <div className="w-52 h-64 relative">
                                    <Image
                                        src="/IMG_20240929_171714114_HDR~3.jpg" // Replace with your image in the public folder
                                        alt="Profile Picture"
                                        className="rounded-full border-4 border-white shadow-md"
                                        layout="fill"
                                        objectFit="cover" />
                                </div>

                                {/* Name and Title */}
                                <h1 className="mt-4 text-xl font-bold text-gray-200">{session.user.name}</h1>
                                <p className="text-gray-500">Full Stack Web  Developer</p>

                                {/* Social Media Links */}
                                <div className="flex mt-4 space-x-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.945 13.945 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.899 4.899 0 01-2.23-.616v.061a4.915 4.915 0 003.946 4.827 4.899 4.899 0 01-2.224.085 4.917 4.917 0 004.588 3.415A9.867 9.867 0 010 21.543a13.933 13.933 0 007.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-800 hover:text-black"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.004 2.042.138 3.003.404 2.293-1.553 3.3-1.23 3.3-1.23.652 1.653.24 2.873.117 3.176.768.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.62-5.479 5.92.43.372.824 1.103.824 2.222v3.293c0 .322.219.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20.447 20.452H16.98v-4.978c0-1.186-.026-2.713-1.654-2.713-1.656 0-1.91 1.293-1.91 2.631v5.06H9.367V9h3.333v1.561h.046c.464-.876 1.596-1.8 3.285-1.8 3.513 0 4.161 2.308 4.161 5.308v6.383zM5.337 7.433a1.933 1.933 0 11-.002-3.867 1.933 1.933 0 01.002 3.867zm1.676 13.02H3.662V9h3.351v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.226.792 24 1.771 24h20.451c.98 0 1.778-.774 1.778-1.732V1.73C24 .774 23.206 0 22.225 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button
                        className="  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-e-xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => { signOut(); } }>
                            LogOut
                        </button></>}

                <Link href={"/login"}>
                    <button
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-e-xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Login Details-
                    </button></Link>


            </div>
        </>
    )
}

export default Proflie