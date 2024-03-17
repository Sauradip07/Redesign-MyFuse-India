"use client";
import React, { useState } from "react";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../../components/ui/navbar-menuu";
import { cn } from "@/utils/cn";

export function NavbarDemo({ className }: { className?: string }): any {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2"> {/* Reduced padding */}
        <a href="https://www.myfuse.in/home" className="flex items-center space-x-2 rtl:space-x-reverse"> {/* Reduced spacing */}
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">MyFuse.In</span> {/* Reduced font size */}
        </a>
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse"> {/* Reduced spacing */}
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> {/* Reduced button size */}
        </div>
        <div className="block w-full md:hidden" id="navbar-mobile">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black dark:text-white">☰</button>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-sticky">
          <ul className="flex flex-col p-1 md:p-0 mt-1 font-medium border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black text-[10px] md:text-base"> {/* Reduced padding and spacing */}

            <Menu setActive={setActive}>
              <li className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white ">
                <a href="https://www.myfuse.in/homepage/about">Home</a>
              </li>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Sign&#160;In&#160;&#11167;"
              >
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
                <a href="https://www.myfuse.in/homepage/contact">Contact</a>
              </li>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Jobs&#160;&#11167;"
              >
                <div
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="flex flex-col space-y-4 text-sm"
                >
                  <HoveredLink href="/hobby">Education</HoveredLink>
                  <HoveredLink href="/individual">
                    Retail and Consumer
                  </HoveredLink>
                  <HoveredLink href="/team">Travel And Tourism</HoveredLink>
                  <HoveredLink href="/enterprise">
                    Transportation and Logistics
                  </HoveredLink>
                  <HoveredLink href="/individual">
                    Engineering and Manufacturing
                  </HoveredLink>
                  <HoveredLink href="/team">Technology And IT</HoveredLink>
                  <HoveredLink href="/enterprise">Health Care</HoveredLink>
                  <HoveredLink href="/individual">Other</HoveredLink>
                </div>
              </MenuItem>
              <li className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white ">
                <a href="https://www.myfuse.in/homepage/about">About&#160;Us</a>
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
