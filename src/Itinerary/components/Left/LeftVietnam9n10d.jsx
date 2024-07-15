import { useEffect, lazy, Suspense } from "react";
import banner from "../../../assets/Banner/Vietnam_banner.webp";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Confirmation = lazy(() => import("../Common/Confirmation.jsx"));
const Cancellation = lazy(() => import("../Common/Cancellation.jsx"));
const VietnamAccordion = lazy(() =>
  import("../Accordions/AccordionsVietnam9n10d.jsx")
);
const Common = lazy(() => import("../Common/Top.jsx"));
const Map = lazy(() => import("../Common/Map.jsx"));
const Vietnam = lazy(() => import("../Inclusion/Vietnam9n10d.jsx"));
const KnowBeforeYouGo = lazy(() => import("../Common/Know_Before_you_go"));

export default function Left() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className={a.tour_left}>
        <Suspense fallback={<div>Loading...</div>}>
          <Common
            place="Hanoi/Ninh Binh/Halong Bay/Ho Chi Minh/Mekong Delta..."
            title="Captivating Vietnam: A Journey Through Iconic Landmarks and Hidden Gems"
            location1="Vietnam"
            time="7N/6D"
          />
        </Suspense>

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Embark on a mesmerizing journey through Vietnam, a land of
            breathtaking landscapes, rich history, and vibrant culture. Our
            "Captivating Vietnam" itinerary invites you to explore the wonders
            of this enchanting country, from the bustling streets of Hanoi to
            the pristine beaches of Phu Quoc. Immerse yourself in the charm of
            ancient temples, indulge in mouthwatering Vietnamese cuisine, and
            create unforgettable memories as you traverse this captivating
            destination.
          </p>
          <div>
            <ul>
              <li>Pick up - Noi Bai International Airport (HAN)</li>
              <li>Drop - Tan Son Nhat International Airport (SGN)</li>
              <li>Country - Vietnam</li>
              <li>Duration - 9N/10D</li>
              <li>Best Season - March to October</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <VietnamAccordion />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Vietnam />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5920694.237224299!2d104.3428742054008!3d13.513153532463962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sin!4v1717926044442!5m2!1sen!2sin" />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <KnowBeforeYouGo />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Confirmation />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Cancellation />
        </Suspense>
      </div>
    </>
  );
}
