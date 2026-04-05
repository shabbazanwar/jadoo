import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import BookingSteps from "./components/BookingSteps";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer";




function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;