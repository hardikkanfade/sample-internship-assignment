"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function CreateAccount() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agency, setAgency] = useState('yes');
  const [company, setCompany] = useState('');

  const isFormValid =
    fullName.trim() &&
    phone.trim() &&
    email.trim() &&
    password.trim() &&
    agency;

  const handleSubmit = (e) => {
    if (!isFormValid) {
      e.preventDefault(); // prevent submission if invalid
    }
  };

  return (
    <main className="bg-white min-h-screen flex items-start justify-center p-6 pt-10">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Create your <br /> PopX account
        </h1>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Your Full name"
              className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Mobile Number"
              className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email Address"
              className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Company name
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter Your Company name"
              className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg placeholder-gray-400"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === 'yes'}
                  onChange={() => setAgency('yes')}
                  className="form-radio text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-800">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === 'no'}
                  onChange={() => setAgency('no')}
                  className="form-radio text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-800">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full font-semibold py-3 rounded-lg transition-colors duration-300 mt-4 ${
              isFormValid
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-300 text-white cursor-not-allowed'
            }`}
          >
            {isFormValid ? <Link href="./profile">Create Account</Link> : 'Create Account'}
          </button>
        </form>
      </div>
    </main>
  );
}
