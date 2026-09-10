import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className=" border-t border-slate-200 mt-15 pt-12 pb-8 text-slate-600 font-sans">
      <div className="max-w-7xl bg-#F8FAFC mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Dev <span className="text-[#E60067]">Stack</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed font-normal">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center space-x-4 pt-1 text-xs sm:text-sm font-semibold text-slate-600">
              <a
                href="#github"
                className="hover:text-[#E60067] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#twitter"
                className="hover:text-[#E60067] transition-colors"
              >
                Twitter
              </a>
              <a
                href="#linkedin"
                className="hover:text-[#E60067] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                PRODUCT
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-500">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                COMPANY
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-500">
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3.5 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                LEGAL
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-500">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-[#E60067] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center space-x-4 font-medium text-slate-500">
            <a
              href="#privacy"
              className="hover:text-slate-800 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
