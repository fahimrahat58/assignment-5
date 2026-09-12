import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center px-3 sm:px-6 lg:px-8">
        <details className="group mr-2 md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center text-2xl leading-none text-slate-700"
            aria-label="Toggle menu"
          >
            ☰
          </summary>

          <div className="absolute left-0 top-16 w-full border-t border-gray-100 bg-white px-5 py-4 shadow-md">
            <ul className="flex flex-col gap-4 text-sm font-semibold text-slate-600">
              <li>
                <a
                  href="#home"
                  className="block text-pink-600 transition hover:text-pink-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="block transition hover:text-[#303030]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="block transition hover:text-[#303030]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="block transition hover:text-[#303030]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="block transition hover:text-[#303030]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </details>

        <div className="shrink-0">
          <a href="#home">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-20 cursor-pointer sm:w-28 md:w-32"
            />
          </a>
        </div>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-sm font-semibold text-slate-600 md:flex lg:gap-8">
          <li>
            <a
              href="#home"
              className="whitespace-nowrap text-pink-600 transition hover:text-pink-700"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="whitespace-nowrap transition hover:text-[#303030]"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="whitespace-nowrap transition hover:text-[#303030]"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="whitespace-nowrap transition hover:text-[#303030]"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="whitespace-nowrap transition hover:text-[#303030]"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
          <button className="cursor-pointer whitespace-nowrap text-xs font-semibold text-slate-600 transition hover:text-[#303030] sm:text-sm">
            Sign In
          </button>

          <button className="brand-gradient cursor-pointer whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold text-white transition hover:opacity-90 sm:px-5 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
