import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import favicon from '../../public/NewLogos/4.svg';

import Aos from "aos";
import "aos/dist/aos.css";
import large from "../../public/Domestic/uttrakhand.webp";


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage.jsx";
import { Helmet } from "react-helmet";
// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Uttrakhand")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

export default function Rajasthan() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Uttarakhand Tour</title>
        <meta
          name="description"
          content="Experience the serene beauty of Uttarakhand with our exclusive tours. Visit the spiritual sites of Rishikesh and Haridwar, the scenic hill station of Nainital, the majestic mountains of Mussoorie, and the wildlife of Jim Corbett National Park. Book your Uttarakhand tour now for a rejuvenating journey!"
        />
        <meta
          name="keywords"
          content="Uttarakhand tour, Rishikesh, Haridwar, Nainital, Mussoorie, Jim Corbett National Park, Uttarakhand tourism, Uttarakhand travel, Uttarakhand holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://snowtailescapes.com/images/card/masoorie.webp' large={large} />
          <Navbar />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
