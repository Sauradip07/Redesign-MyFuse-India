

// Footer.js
"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-20" src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/FX5ATkass4-no-background-VmcZHSX7xE4ng29ATNphGUdb388fxH.png" alt="Company name" />
            <p className="text-sm leading-6 text-gray-600">Making football look better to the world and a more respectful game.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Other social media icons */}
            </div>
          </div>
          {/* More sections */}
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
