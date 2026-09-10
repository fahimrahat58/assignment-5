import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar";
import type { Technology } from "./Component/Type";
import TechCard from "./Component/TechCard";
import { Suspense } from "react";
import Footer from "./Component/Footer";

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

      <Suspense fallback={<p>Loading...</p>}>
        <TechCard techPromise={techPromise} />
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;