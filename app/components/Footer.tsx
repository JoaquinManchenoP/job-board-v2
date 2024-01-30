import React from "react";

export default function Footer() {
  return (
    <div className="h-full w-screen ">
      <footer className="bg-white text-gray-600 body-font border-t-2 pt-6 ">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 TechBridge Germany
            <a
              href="https://twitter.com/yourcompany"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Techbridge
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="#" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2a2 2 0 00-2-2H8a2 2 0 00-2 2v20l6-3 6 3V2z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 8a6 6 0 00-12 0v4h4a8 8 0 0116 0v-4z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 00-12 0v4h4a8 8 0 0116 0v-4z"
                ></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A5.4 5.4 0 0022.4.7a10.9 10.9 0 01-3.46 1.32 5.4 5.4 0 00-9.2 4.92c0 .42.05.84.14 1.23A15.4 15.4 0 011.67 1.09 5.4 5.4 0 003.48 7.7a5.4 5.4 0 01-2.43-.67v.07a5.4 5.4 0 004.36 5.3 5.4 5.4 0 01-2.42.09 5.4 5.4 0 005.05 3.74 10.8 10.8 0 01-6.7 2.3 11 11 0 01-1.28-.07 15.4 15.4 0 008.29 2.43c10 0 15.5-8.28 15.5-15.47v-.7A10.9 10.9 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
