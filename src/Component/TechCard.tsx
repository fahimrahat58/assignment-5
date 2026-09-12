import { use, useState } from "react";
import type { Technology } from "./Type";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  techPromise: Promise<Technology[]>;
};

function TechCard({ techPromise }: Props) {
  const technologies = use(techPromise);

  const [yourStack, setYourStack] = useState<string[]>([]);

  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);

  const handleAddToStack = (id: string | number, name: string) => {
    const techId = String(id);

    if (yourStack.includes(techId)) {
      toast.warning(`${name} is already in your stack!`);

      setDisabledButtons((prev) =>
        prev.includes(techId) ? prev : [...prev, techId],
      );

      return;
    }

    setYourStack((prev) => [...prev, techId]);

    toast.success(`${name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string | number, name: string) => {
    const techId = String(id);

    setYourStack((prev) => prev.filter((item) => item !== techId));

    setDisabledButtons((prev) => prev.filter((item) => item !== techId));

    toast.warning(`${name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    if (yourStack.length === 0) {
      return;
    }

    setYourStack([]);
    setDisabledButtons([]);

    toast.warning("Stack Cleared");
  };

  const selectedTechnologies = technologies.filter((tech) =>
    yourStack.includes(String(tech.id)),
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-950 sm:text-3xl lg:text-4xl">
          Explore the <span className="gradient-text">Technologies</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Explore modern technologies and build your own development stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Technology Cards */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => {
              const techId = String(tech.id);

              const isDisabled = disabledButtons.includes(techId);

              return (
                <div
                  key={tech.id}
                  className={`flex flex-col rounded-2xl border-2 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${
                    yourStack.includes(String(tech.id))
                      ? "border-pink-200"
                      : "border-gray-200"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                      {tech.badge}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-950">
                    {tech.name}
                  </h2>

                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
                    {tech.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2 text-xs">
                    <span className="font-medium text-gray-500">
                      Category:{" "}
                      <span className="text-gray-800">{tech.category}</span>
                    </span>

                    <span className="font-medium text-gray-500">
                      Difficulty:{" "}
                      <span className="text-gray-800">{tech.difficulty}</span>
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span>

                    <span className="font-semibold text-gray-800">
                      {tech.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToStack(tech.id, tech.name)}
                    disabled={isDisabled}
                    className={`mt-5 w-full rounded-xl px-4 py-2.5 text-xs font-semibold transition duration-200 sm:text-sm ${
                      isDisabled
                        ? "cursor-not-allowed border border-pink-200 bg-pink-50 text-pink-500"
                        : "cursor-pointer border-transparent bg-gray-800 text-white shadow-sm hover:bg-gray-900 active:scale-[0.98]"
                    }`}
                  >
                    {isDisabled ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          {/* Stack Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-950">Your Stack</h2>

              <p className="mt-1 text-sm text-gray-500">
                {selectedTechnologies.length} selected
              </p>
            </div>
          </div>

          {selectedTechnologies.length === 0 ? (
            <div className="mt-8 rounded-xl bg-gray-50 px-4 py-8 text-center">
              <p className="text-sm font-medium text-gray-500">
                No technologies added yet.
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Add technologies to build your stack.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-5 space-y-3">
                {selectedTechnologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-bold text-gray-900">
                        {tech.name}
                      </h3>

                      <p className="mt-0.5 text-xs text-gray-500">
                        {tech.category}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(tech.id, tech.name)}
                      className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                      aria-label={`Remove ${tech.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  onClick={handleRemoveAll}
                  className="cursor-pointer rounded-lg bg-red-50 px-5 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-100 hover:text-red-600"
                >
                  Remove All
                </button>
              </div>
            </>
          )}
        </aside>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </section>
  );
}

export default TechCard;
