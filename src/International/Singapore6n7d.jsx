import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Singapore_Malaysia")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

// Import images
import Singapore6n7dLarge from "../assets/LargeImages/singapore6n7dB.webp";
import Singapore6n7dSmall from "../assets/CardImages/SMs.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Singapore6n7d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Singapore Tour</title>
        <meta
          name="description"
          content="Experience the vibrant city of Singapore with our exclusive tours. Explore the iconic Marina Bay Sands, the lush Gardens by the Bay, the bustling Chinatown, and the thrilling Universal Studios. Book your Singapore tour now for an unforgettable urban adventure!"
        />
        <meta
          name="keywords"
          content="Singapore tour, Marina Bay Sands, Gardens by the Bay, Chinatown, Universal Studios, Singapore tourism, Singapore travel, Singapore holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section
          className={`${a.section} ${a.Singapore6n7d}`}
          data-aos="zoom-in"
        >
          <ItineraryImage
            small={Singapore6n7dSmall}
            large={Singapore6n7dLarge}
          />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
