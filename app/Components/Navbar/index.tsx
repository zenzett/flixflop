// components/Navbar.js
"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5">
      <div className=" mx-auto flex items-center">
        <div className="text-white text-2xl relative inline-block font-extrabold px-16 font-serif">
          <Link href="/">FlixFlop</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-sm font-bold">
          {/* Menu Button Movies */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="text-white hover:bg-gray-700 px-3 py-2 rounded inline-flex items-center">
                Movies
              </MenuButton>
            </div>
            <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-right bg-white border rounded shadow-lg">
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/popular"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Popular
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/nowplaying"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Now Playing
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/upcoming"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Up Coming
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/toprated"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Top Rated
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>

          {/* Menu Button Tv Shows */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="text-white hover:bg-gray-700 px-3 py-2 rounded inline-flex items-center">
                Tv Shows
              </MenuButton>
            </div>
            <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-right bg-white border rounded shadow-lg">
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/popular"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Popular
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/airingtoday"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Airing Today
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/ontv"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    On Tv
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/toprated"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Top Rated
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>

          {/* Menu Button People */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="text-white hover:bg-gray-700 px-3 py-2 rounded inline-flex items-center">
                People
              </MenuButton>
            </div>
            <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-right bg-white border rounded shadow-lg">
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/popularpeople"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Popular People
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>

          {/* Menu Button More */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="text-white hover:bg-gray-700 px-3 py-2 rounded inline-flex items-center">
                More
              </MenuButton>
            </div>
            <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-right bg-white border rounded shadow-lg">
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/discussions"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Discussions
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/leaderboard"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Leaderboard
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/support"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Support
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/api"
                    className={`block px-6 py-1 ${active && "bg-blue-100"}`}
                  >
                    Api
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
