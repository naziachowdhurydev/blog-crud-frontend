import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import DestinationCards from "../components/DestinationCards";
import TravelGuides from "../components/TravelGuides";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSlider />
          <DestinationCards />
          <TravelGuides />
          <VideoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
