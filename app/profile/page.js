import React from 'react'
export default function profile() {
  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-md mx-auto min-h-screen bg-white border rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h2>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A2 2 0 0120 14v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 01.447-1.276L9 10m6 0V6a3 3 0 00-6 0v4m6 0H9" />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 text-base">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed border-t pt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </main>
  );
}
