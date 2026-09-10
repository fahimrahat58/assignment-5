import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 md:px-8">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-slate-700 md:hidden"
        >
          ☰
        </button>

        <div className="absolute left-1/2 translate-x-[55%] md:static md:translate-x-0">
          <img
            src={logo}
            alt="Dev Stack"
            className="w-28 sm:w-32"
          />
        </div>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm font-semibold text-slate-600 md:flex lg:gap-8">
          <li>
            <a href="#" className="text-pink-600">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-600">
              Technologies
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-600">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-600">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-600">
              Contact
            </a>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <button className="text-xs font-semibold text-slate-600 transition hover:text-pink-600 sm:text-sm">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-pink-700 sm:px-5 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-slate-600">
            <li>
              <a href="#" className="text-pink-600">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-600">
                Technologies
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-600">
                Projects
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-600">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;