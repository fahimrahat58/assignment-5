import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer
      id="contact"
      className="w-full mt-12 border-t border-slate-200 bg-[#F8FAFC] pb-8 pt-12 text-slate-600 block"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-12 md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center text-center space-y-4 sm:items-start sm:text-left md:col-span-5">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 sm:text-sm sm:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#E60067]"
              >
                GitHub
              </a>
              <span className="text-slate-400">•</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#E60067]"
              >
                Twitter
              </a>
              <span className="text-slate-400">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#E60067]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 sm:text-left md:col-span-7">
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900 sm:mb-4">
                Product
              </h3>
              <ul className="space-y-2 text-xs text-slate-500 sm:text-sm">
                <li>
                  <a
                    href="#home"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900 sm:mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-xs text-slate-500 sm:text-sm">
                <li>
                  <a
                    href="#about"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900 sm:mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-xs text-slate-500 sm:text-sm">
                <li>
                  <a
                    href="#privacy"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="inline-block py-0.5 transition hover:text-slate-900"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>© Dev Stack. All rights reserved.</p>

          <div className="flex gap-4 font-medium text-slate-500">
            <a href="#privacy" className="transition hover:text-slate-800">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-slate-800">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
