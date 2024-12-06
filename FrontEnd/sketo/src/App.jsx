import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import Cards from "./components/Card";
import BusinessBootcamps from "./components/BootcampCard";
import DefaultCard from "./components/default";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      {/* <CardsSection /> */}
      <Cards />
      <BusinessBootcamps />
      {/* <DefaultCard/> */}
      <Footer />
    </div>
  );
};

export default App;
