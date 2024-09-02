import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import AllSolutions from "./components/AllSolutions";
import OurWork from "./components/OurWork";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurServices />
      <AllSolutions />
      <OurWork />
    </div>
  );
}
