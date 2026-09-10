import { use } from "react";
import type { Technology } from "./Type";

type Props = {
  techPromise: Promise<Technology[]>;
};

function TechSection({ techPromise }: Props) {
  const technologies = use(techPromise);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Header Area */}
      <div className="mb-6 sm:mb-8 text-left">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#FF5E36] via-[#E60067] to-[#8F00FF] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-1.5 sm:mt-2 text-slate-500 text-xs sm:text-base font-normal">
          Add any technologies you like — each one can be added only once.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Mobile: 1 Col | Tablet: 2 Cols | Laptop/Desktop: 3 Cols */}
        <div className="w-full lg:w-3/4 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out p-4 sm:p-5 flex flex-col justify-between"
            >
              {/* Top: Icon & Badge */}
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
                    {tech.icon ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                      />
                    ) : (
                      <span className="text-base sm:text-lg font-bold text-slate-800">
                        {tech.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {tech.badge && (
                    <span className="bg-pink-50 text-[#E60067] text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-pink-100">
                      {tech.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {tech.name}
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                  {tech.description}
                </p>
              </div>

              <div>
                <div className="flex items-center flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-medium text-slate-500 mb-3 sm:mb-4">
                  {tech.category && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {tech.category}
                    </span>
                  )}

                  {tech.difficulty && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded truncate max-w-[100px]">
                      {tech.difficulty}
                    </span>
                  )}

                  {tech.rating && (
                    <span className="flex items-center gap-1 font-semibold text-slate-700 ml-auto">
                      <span className="text-amber-400">★</span> {tech.rating}
                    </span>
                  )}
                </div>

                <button className="w-full bg-[#0F172A] hover:bg-black text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition duration-200 shadow-sm active:scale-[0.98]">
                  Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Your Stack */}
        <div className="w-full lg:w-1/4 order-1 lg:order-2 lg:sticky lg:top-20">
          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Your Stack
            </h3>

            <p className="text-xs text-slate-400 mt-0.5">
              No Technology Selected
            </p>

            <div className="mt-3 sm:mt-4 border border-dashed border-slate-200 rounded-xl p-6 text-center flex items-center justify-center min-h-[100px] lg:min-h-[140px]">
              <span className="text-xs text-slate-400 font-medium">
                Your stack is empty.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSection;