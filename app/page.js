import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import AllSolutions from "./components/AllSolutions";
import OurWork from "./components/OurWork";
import Integrations from "./components/Integrations";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Hero />
      <AboutUs />
      <OurServices />
      <AllSolutions />
      <OurWork />
      <Integrations />
    </div>
  );
}
