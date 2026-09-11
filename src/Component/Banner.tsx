import Banner2 from "../assets/banner-stack.png";

function Banner() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-12">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <div>Build Your Ideal</div>

            <div className="bg-linear-to-r from-[#FF5E36] via-[#E60067] to-[#8F00FF] bg-clip-text text-transparent">
              Development Stack
            </div>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#technologies"
              className="w-full rounded-lg bg-linear-to-r from-[#FF5E36] via-[#E60067] to-[#8F00FF] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:opacity-90 sm:w-auto"
            >
              Explore Technologies
            </a>

            <a
              href="#technologies"
              className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:bg-gray-50 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <img
            src={Banner2}
            alt="Dev Stack banner"
            className="h-auto w-full max-w-70 object-contain drop-shadow-md sm:max-w-sm lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
