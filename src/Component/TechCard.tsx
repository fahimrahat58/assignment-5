import { use, useState } from "react";
import type { Technology } from "./Type";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  techPromise: Promise<Technology[]>;
};

function TechSection({ techPromise }: Props) {
  const technologies = use(techPromise);

  const [yourStack, setYourStack] = useState<string[]>([]);

  const handleAddToStack = (id: string | number, name: string) => {
    const techId = String(id);

    if (yourStack.includes(techId)) {
      toast.warning(`${name} is already in your stack!`);
      return;
    }

    setYourStack((prev) => [...prev, techId]);

    toast.success(`${name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string | number, name: string) => {
    const techId = String(id);

    setYourStack((prev) => prev.filter((item) => item !== techId));

    toast.info(`${name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    if (yourStack.length === 0) return;

    setYourStack([]);

    toast.info("Stack Cleared");
  };

  const selectedTechnologies = technologies.filter((tech) =>
    yourStack.includes(String(tech.id)),
  );

  return (
    <>
      <section
        id="technologies"
        className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8"
      >
        <div className="mb-6 text-left sm:mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FF5E36] via-[#E60067] to-[#8F00FF] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="mt-1.5 text-xs font-normal text-slate-500 sm:mt-2 sm:text-base">
            Add any technologies you like — each one can be added only once.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
          <div className="order-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:order-1 lg:w-3/4 xl:grid-cols-3">
            {technologies.map((tech) => {
              const isAdded = yourStack.includes(String(tech.id));

              return (
                <div
                  key={tech.id}
                  className={`flex flex-col justify-between rounded-2xl bg-white p-4 transition-all duration-500 ease-out sm:p-5 ${
                    isAdded
                      ? "border border-pink-400 shadow-lg"
                      : "border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl"
                  }`}
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between sm:mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                        {tech.icon ? (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                          />
                        ) : (
                          <span className="text-base font-bold text-slate-800 sm:text-lg">
                            {tech.name.charAt(0)}
                          </span>
                        )}
                      </div>

                      {tech.badge && (
                        <span className="rounded-full border border-pink-100 bg-pink-50 px-2.5 py-0.5 text-[10px] font-semibold text-[#E60067] sm:text-[11px]">
                          {tech.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="mb-1 text-base font-bold text-slate-900 sm:text-lg">
                      {tech.name}
                    </h2>

                    <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-500 sm:mb-5 sm:text-sm">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-1.5 text-[10px] font-medium text-slate-500 sm:mb-4 sm:text-[11px]">
                      {tech.category && (
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-600">
                          {tech.category}
                        </span>
                      )}

                      {tech.difficulty && (
                        <span className="max-w-25 truncate rounded bg-slate-100 px-2 py-0.5 text-slate-600">
                          {tech.difficulty}
                        </span>
                      )}

                      {tech.rating && (
                        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
                          <span className="text-amber-400">★</span>
                          {tech.rating}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToStack(tech.id, tech.name)}
                      className={`w-full rounded-xl px-4 py-2.5 text-xs font-semibold transition duration-200 active:scale-[0.98] sm:text-sm ${
                        isAdded
                          ? "cursor-pointer border border-pink-200 bg-pink-50 text-pink-500"
                          : "cursor-pointer  bg-gray-950 text-white shadow-sm hover:bg-gray-900"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order-1 w-full lg:sticky lg:top-20 lg:order-2 lg:w-1/4">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Your Stack
              </h3>

              <p className="mt-0.5 text-xs text-slate-400">
                {selectedTechnologies.length === 0
                  ? "No Technology Selected"
                  : `${selectedTechnologies.length} ${
                      selectedTechnologies.length === 1
                        ? "Technology"
                        : "Technologies"
                    } Selected`}
              </p>

              {selectedTechnologies.length === 0 ? (
                <div className="mt-3 flex min-h-25 items-center justify-center rounded-xl border border-dashed border-slate-200 p-6 text-center sm:mt-4 lg:min-h-35">
                  <span className="text-xs font-medium text-slate-400">
                    Your stack is empty.
                  </span>
                </div>
              ) : (
                <>
                  <div className="mt-3 space-y-3 sm:mt-4">
                    {selectedTechnologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                            {tech.icon ? (
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="h-7 w-7 object-contain"
                              />
                            ) : (
                              <span className="font-bold text-slate-800">
                                {tech.name.charAt(0)}
                              </span>
                            )}
                          </div>

                          <div className="min-w-0">
                            <h4 className="truncate text-sm font-bold text-slate-900">
                              {tech.name}
                            </h4>

                            <p className="truncate text-xs text-slate-500">
                              {tech.category || "Technology"}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            handleRemoveFromStack(tech.id, tech.name)
                          }
                          className="ml-2 cursor-pointer px-1 text-2xl font-light text-slate-400 transition hover:text-slate-700"
                          aria-label={`Remove ${tech.name}`}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleRemoveAll}
                    className="mt-4 w-full cursor-pointer rounded-xl border border-red-200 bg-white py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Remove All
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default TechSection;
