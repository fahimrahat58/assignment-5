import Banner2 from "../assets/banner-stack.png";

function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            <div>Build Your Ideal</div>
            <div className="bg-linear-to-r from-[#FF5E36] via-[#E60067] to-[#8F00FF] bg-clip-text text-transparent">
              Development Stack
            </div>
          </h1>

          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <button className="w-full sm:w-auto bg-linear-to-r from-[#FF5A36] to-[#A825E0] hover:opacity-90 text-white font-semibold tracking-wide px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition duration-200 shadow-sm text-xs sm:text-sm">
              Explore Technologies
            </button>

            <button className="w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 font-semibold tracking-wide px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition duration-200 text-xs sm:text-sm shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Banner2}
            alt="bannerimage"
            className="w-full max-w-70 sm:max-w-sm lg:max-w-lg h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
