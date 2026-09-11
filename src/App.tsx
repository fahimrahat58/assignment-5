import { Suspense } from "react";

import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar";
import TechCard from "./Component/TechCard";
import Footer from "./Component/Footer";
import type { Technology } from "./Component/Type";

async function getTechnology(): Promise<Technology[]> {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch technology data");
  }

  const data = await response.json();

  return data;
}

const techPromise = getTechnology();

function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <Suspense
        fallback={
          <div className="flex min-h-50 items-center justify-center">
            <p className="text-sm font-semibold text-slate-500 sm:text-base">
              Loading technologies...
            </p>
          </div>
        }
      >
        <TechCard techPromise={techPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
