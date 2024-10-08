import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import favicon from '../../public/NewLogos/4.svg';
import Aos from "aos";
import "aos/dist/aos.css";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import large from "../../public/Domestic/ladakh.webp";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Domestic/Ladakh5n6d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));

export default function Rajasthan() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Ladakh Tour</title>
    <meta
        name="description"
        content="Explore the breathtaking landscapes of Ladakh with our exclusive tours. Discover the serene Pangong Lake, the stunning Nubra Valley, the ancient monasteries of Hemis and Thiksey, and the vibrant culture of Leh. Book your Ladakh tour now for an unforgettable adventure in the Himalayas!"
    />
    <meta
        name="keywords"
        content="Ladakh tour, Pangong Lake, Nubra Valley, Hemis Monastery, Thiksey Monastery, Leh, Ladakh tourism, Ladakh travel, Ladakh holiday packages"
    />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

</Helmet>
      <Suspense fallback={<div>Loading...</div>}>
      <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://snowtailescapes.com/images/card/ladakh.web' large={large} />
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
