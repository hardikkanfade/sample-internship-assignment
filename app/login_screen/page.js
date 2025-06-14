"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <main className="bg-white h-screen flex items-start justify-center p-6 pt-16">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <form className="space-y-4" onSubmit={(e) => !isFormValid && e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border text-gray-600 placeholder-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600font-medium text-purple-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-600 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full font-semibold py-3 rounded-lg cursor-pointer transition-colors duration-300 ${
              isFormValid
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-300 text-white cursor-not-allowed'
            }`}
          >
            {isFormValid ? <Link href="./profile">Login</Link> : 'Login'}
          </button>
        </form>
      </div>
    </main>
  );
}
