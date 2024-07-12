import React, { useEffect, useState } from "react";
import Card from "./Card";
import Malaysias from "../../assets/CardImages/MalaysiaS.webp";
import Thailand5n6ds from "../../assets/CardImages/thailand5n6ds.webp";
import SriLanka from "../../assets/CardImages/SriLankaS.webp";
import almaty from "../../assets/CardImages/almaty.jpg";
import nepal from "../../assets/CardImages/nepalS.webp";

export default function VisaFree() {
  const [isMobileScreen, setMobileScreen] = useState(window.innerWidth > 0 && window.innerWidth < 600);
  const [isTabletScreen, setTabletScreen] = useState(window.innerWidth >= 600 && window.innerWidth < 1000);
  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth > 0 && window.innerWidth < 600);
      setTabletScreen(window.innerWidth >= 600 && window.innerWidth < 1000);
      setLargeScreen(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className="font-extrabold md:text-3xl text-2xl">
        Visa Free Countries from India
      </h2>
      {isLargeScreen && (
        <>
          <div className="carousel pb-0 rounded-box relative w-full">
            <div
              id="VisaFree1"
              className="carousel-item w-full flex justify-center md:gap-5 ml-14"
            >
              <Card
                title="Nepal"
                duration="4 Days and 3 Nights"
                rating="4.8/5"
                cut_price={64699}
                curr_price={54699}
                save={10000}
                direct="/Nepal"
                image={nepal}
              />

              <Card
                title="Malaysia"
                duration="7 Days and 6 Nights"
                rating="4.8/5"
                cut_price={39500}
                curr_price={33999}
                save={5501}
                direct="/Malaysia"
                image={Malaysias}
              />

              <Card
                title="Thailand"
                duration="6 Days and 5 Nights"
                rating="4.8/5"
                cut_price={36999}
                curr_price={29999}
                save={7000}
                direct="/Thailand6d5n"
                image={Thailand5n6ds}
              />
            </div>
            <div
              id="VisaFree2"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                title="Thailand"
                duration="6 Days and 5 Nights"
                rating="4.8/5"
                cut_price={36999}
                curr_price={29999}
                save={7000}
                direct="/Thailand6d5n"
                image={Thailand5n6ds}
              />
              <Card
                title="Almaty "
                duration="6 Days and 5 Nights"
                rating="4.8/5"
                cut_price={69099}
                curr_price={59099}
                save={10000}
                direct="/Almaty"
                image={almaty}
              />

              <Card
                title="Sri Lanka | Jewel Of Indian Ocean"
                duration="7 Days and 6 Nights"
                rating="4.8/5"
                cut_price={44500}
                curr_price={38699}
                save={5801}
                direct="/SriLanka6n7d"
                image={SriLanka}
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#VisaFree1" className="btn btn-xs">
              1
            </a>
            <a href="#VisaFree2" className="btn btn-xs">
              2
            </a>
          </div>
        </>
      )}
      {
        isMobileScreen || isTabletScreen ? (
          <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">
            {/* <Card
          title="Bhutan"
          duration="6 Days and 5 Nights"
          rating="4.8/5"
          cut_price="INR 69,099"
          curr_price="₹ 59,099"
          save="SAVE INR 10,000"
          direct="/Bhutan"
        /> */}

            <Card
              title="Nepal"
              duration="4 Days and 3 Nights"
              rating="4.8/5"
              cut_price={64699}
              curr_price={54699}
              save={10000}
              direct="/Nepal"
              image={nepal}
            />

            <Card
              title="Malaysia"
              duration="7 Days and 6 Nights"
              rating="4.8/5"
              cut_price={39500}
              curr_price={33999}
              save={5501}
              direct="/Malaysia"
              image={Malaysias}
            />

            <Card
              title="Thailand"
              duration="6 Days and 5 Nights"
              rating="4.8/5"
              cut_price={36999}
              curr_price={29999}
              save={7000}
              direct="/Thailand6d5n"
              image={Thailand5n6ds}
            />

            <Card
              title="Almaty "
              duration="6 Days and 5 Nights"
              rating="4.8/5"
              cut_price={69099}
              curr_price={59099}
              save={10000}
              direct="/Almaty"
              image={almaty}
            />

            <Card
              title="Sri Lanka | Jewel Of Indian Ocean"
              duration="7 Days and 6 Nights"
              rating="4.8/5"
              cut_price={44500}
              curr_price={38699}
              save={5801}
              direct="/SriLanka6n7d"
              image={SriLanka}
            />

            {/* <Card
          title="Qatar"
          duration="7 Days and 6 Nights"
          rating="4.8/5"
          cut_price="INR 69,099"
          curr_price="₹ 59,099"
          save="SAVE INR 10,000"
          direct="/Qatar"
        /> */}
          </div>
        </>
        ):
        (
          <></>
        )
      }
    </div>
  );
}
