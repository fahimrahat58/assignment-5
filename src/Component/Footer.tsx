import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer
      id="contact"
      className="mt-12 border-t border-slate-200 bg-[#F8FAFC] pb-8 pt-12 text-slate-600"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-12 lg:gap-12">
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-4 text-xs font-semibold text-slate-600 sm:text-sm">
              <a href="#github" className="transition hover:text-[#E60067]">
                GitHub
              </a>

              <a href="#twitter" className="transition hover:text-[#E60067]">
                Twitter
              </a>

              <a href="#linkedin" className="transition hover:text-[#E60067]">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:col-span-7">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                Product
              </h3>

              <ul className="space-y-2.5 text-xs text-slate-500 sm:text-sm">
                <li>
                  <a href="#home" className="transition hover:text-slate-900">
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#technologies"
                    className="transition hover:text-slate-900"
                  >
                    Technologies
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className="transition hover:text-slate-900"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                Company
              </h3>

              <ul className="space-y-2.5 text-xs text-slate-500 sm:text-sm">
                <li>
                  <a href="#about" className="transition hover:text-slate-900">
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="transition hover:text-slate-900"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#careers"
                    className="transition hover:text-slate-900"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                Legal
              </h3>

              <ul className="space-y-2.5 text-xs text-slate-500 sm:text-sm">
                <li>
                  <a
                    href="#privacy"
                    className="transition hover:text-slate-900"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#terms" className="transition hover:text-slate-900">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>

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
