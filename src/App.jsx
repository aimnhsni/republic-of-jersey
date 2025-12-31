import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JerseyGrid from "./components/JerseyGrid";
import PricingCalculator from "./components/PricingCalculator";
import Footer from "./components/Footer";


export default function App() {
  const [activeTab, setActiveTab] = useState("jerseys");
  const [selection, setSelection] = useState({
    size: "Adult",
    addons: []
  });

  return (
    <>
      <Navbar />
      <Hero />

      <JerseyGrid
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelection={setSelection}
        selection={selection}
      />
      <PricingCalculator
        activeTab={activeTab}
        selection={selection}
        setSelection={setSelection}
      />
      <Footer />


    </>
  );
}
