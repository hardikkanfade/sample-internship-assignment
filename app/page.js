import React from 'react'
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-white h-screen flex items-end justify-center p-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 text-left">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-6 text-left ">
          Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
        </p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg mb-3">
          <Link href="./signup_screen">
          Create Account
          </Link>
        </button>
        <button className="w-full bg-purple-100 text-purple-700 font-semibold py-3 rounded-lg">
          <Link href = "./login_screen">
          Already Registered? Login
          </Link>
        </button>
      </div>
    </main>
  );
}
