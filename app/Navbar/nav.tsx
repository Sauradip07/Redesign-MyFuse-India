"use client";
import React, { useState } from "react";
import {
   HoveredLink,
   Menu,
   MenuItem,
   ProductItem,
} from "../../components/ui/navbar-menuu";
import { cn } from "@/utils/cn";

export function NavbarDemo({ className }: { className?: string }): any {
   const [active, setActive] = useState<string | null>(null);
   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility on mobile

   return (
      <nav className="bg-white dark:bg-black fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-900">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
               href="https://www.myfuse.in/home"
               className="flex items-center space-x-3 rtl:space-x-reverse">
               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  MyFuse.In
               </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
               <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Get started
               </button>
            </div>
            <div
               className="block w-full md:hidden" // Show on mobile only
               id="navbar-mobile">
               <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                  className="text-black dark:text-white">
                  ☰
               </button>
            </div>
            <div
               className={`${
                  isMenuOpen ? "block" : "hidden"
               } w-full md:block md:w-auto`} // Show menu on mobile if isMenuOpen is true
               id="navbar-sticky">
               <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:bg-black">
                  <Menu setActive={setActive}>
                     <li className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white ">
                        <a href="https://www.myfuse.in/homepage/about">Home</a>
                     </li>
                     <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Sign In">
                        <div className="flex flex-col space-y-4 text-sm">
                           <HoveredLink href="https://www.myfuse.in/login-con/index.php">
                              Are you a Student?
                           </HoveredLink>
                           <HoveredLink href="https://www.myfuse.in/company/login-company.php">
                              Are you from the Company ?
                           </HoveredLink>
                           <HoveredLink href="https://www.myfuse.in/homepage/login">
                              Sign In
                           </HoveredLink>
                        </div>
                     </MenuItem>
                     <li className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white ">
                        <a href="https://www.myfuse.in/homepage/contact">
                           Contact
                        </a>
                     </li>
                     <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Jobs">
                        <div
                           id="dropdownDefaultButton"
                           data-dropdown-toggle="dropdown"
                           className="flex flex-col space-y-4 text-sm">
                           <HoveredLink href="/hobby">Education</HoveredLink>
                           <HoveredLink href="/individual">
                              Retail and Consumer
                           </HoveredLink>
                           <HoveredLink href="/team">
                              Travel And Tourism
                           </HoveredLink>
                           <HoveredLink href="/enterprise">
                              Transportation and Logistics
                           </HoveredLink>
                           <HoveredLink href="/individual">
                              Engineering and Manufacturing
                           </HoveredLink>
                           <HoveredLink href="/team">
                              Technology And IT
                           </HoveredLink>
                           <HoveredLink href="/enterprise">
                              Health Care
                           </HoveredLink>
                           <HoveredLink href="/individual">Other</HoveredLink>
                        </div>
                     </MenuItem>
                     <li className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white ">
                        <a href="https://www.myfuse.in/homepage/about">
                           About Us
                        </a>
                     </li>
                     <li className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white ">
                        <a href="https://www.myfuse.in/homepage/blog">Blogs</a>
                     </li>
                  </Menu>
               </ul>
            </div>
         </div>
      </nav>
   );
}
