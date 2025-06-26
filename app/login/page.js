"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthComponent() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-20 bg-[#0f0f0f]">
      {/* User Login */}
      <div className="w-full max-w-md border border-white text-violet-50 shadow-xl rounded-2xl p-8 text-center">
        {session ? (
          <>
            <h2 className="text-2xl font-semibold text-green-500 mb-2">
              Signed in with GitHub
            </h2>
            <p className="text-gray-400 mb-6">{session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-gray-100 mb-2">Welcome!</h2>
            <p className="text-gray-300 mb-6">Sign in to continue</p>
            <button
              onClick={() => signIn()}
              className="flex items-center justify-center gap-3 w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg transition"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 
                  3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 
                  18.07 3.633 17.7 3.633 17.7c-1.087-.744.083-.729.083-.729 
                  1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 
                  1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 
                  0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                  0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 
                  3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 
                  3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
                  3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 
                  5.625-5.475 5.92.42.36.81 1.096.81 2.22 
                  0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 
                  22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"
                />
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </>
        )}
      </div>

      {/* Admin Login */}
      <div className="w-full max-w-md border border-white text-white shadow-xl rounded-2xl p-8">
        <form onSubmit={handleLogin}>
          <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 p-2 text-black rounded outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 text-black rounded outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
