import { Suspense, lazy } from "react";
import International from "./International";
const LazyComponent = lazy(() => import("../Navbar"));
import a from "../../styles/International.module.css";
import thailand4n5dS from "../../assets/CardImages/thailand4n5dS.webp";
import Thailand8n9ds from "../../assets/CardImages/thailand8n9ds.webp";
import thailand5n6ds from "../../assets/CardImages/thailand5n6ds.webp";
import bali5n6ds from "../../assets/CardImages/bali5n6dS.webp";
import bali7n8ds from "../../assets/CardImages/Bali7n8ds.webp";
import vietnam4n5d from "../../assets/CardImages/vietnam4n5ds.webp";
import vietnam6n7d from "../../assets/CardImages/vietnam6n7ds.webp";
import vietnam9n10d from "../../assets/CardImages/vietnam9n10ds.webp";
import singapore4n5d from "../../assets/CardImages/singapore4n5ds.webp";
import singapore6n7d from "../../assets/CardImages/singapore6n7ds.webp";
import SM from "../../assets/CardImages/SMs.webp";
import malaysia from "../../assets/CardImages/MalaysiaS.webp";
import Switzerland from "../../assets/CardImages/switzerland5n6dS.webp";
import France from "../../assets/CardImages/FranceS.webp";
import Greece from "../../assets/CardImages/Greece7n8dS.webp";
import SriLanka from "../../assets/CardImages/SriLankaS.webp";
import Dubai3n4d from "../../assets/CardImages/Dubai3n4dS.webp";
import Dubai5n6d from "../../assets/CardImages/Dubai5n6dS.webp";
import nepal from "../../assets/CardImages/nepalS.webp";
import almaty from "../../assets/CardImages/almaty.jpg";
import { Helmet } from "react-helmet";

export default function AllInternational() {
  return (
    <>
    <Helmet>
        <title>International Tours</title>
        <meta
          name="description"
          content="Locations , places for you outside India to travel along with anyone"
        />
      </Helmet>
      <div className={a.banner}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
      <div className="flex justify-center">
        <div className="mt-12 p-5">
          <h1 className="text-4xl font-semibold text-center">
            International Tour Adventures
          </h1>

          <International
            to="/Thailand5d4n"
            title="Explore Bangkok & Pattaya: A Vibrant Thai Adventure"
            price="INR.19,699/person"
            location="PATTAYA & BANGKOK"
            duration="4 nights 5 days tour"
            image={thailand4n5dS}
          />

          <International
            to="/Thailand6d5n"
            title="Experience Best of Southern Thailand: Phuket and Krabi"
            price="INR.29,699/person"
            location="PHUKET & KRABI"
            duration="5 nights 6 days tour"
            image={thailand5n6ds}
          />

          <International
            to="/Thailand9d8n"
            title="Experience Jewels of Thailand"
            price="INR.59,099/person"
            location="PHUKET/KRABI/PATTAYA/BANGKOK"
            duration="8 nights 9 days tour"
            image={Thailand8n9ds}
          />

          <International
            to="/Bali8d7n"
            title="Enchanting Bali Escape with Gili Island"
            price="INR.54,699/person"
            location="BALI"
            duration="7 nights 8 days tour"
            image={bali7n8ds}
          />
          <International
            to="/Bali6d5n"
            title="Luxurious 6-Day Bali Honeymoon Escape: Kuta and Ubud Delights"
            price="INR.34,699/person"
            location="BALI"
            duration="5 nights 6 days tour"
            image={bali5n6ds}
          />

          <International
            to="/Vietnam4d5n"
            title="Escape to North Vietnam: A Journey of Cultural Marvels and Natural Wonders"
            price="INR.37,699/person"
            location="VIETNAM"
            duration="4 nights 5 days tour"
            image={vietnam4n5d}
          />

          <International
            to="/Vietnam6n7d"
            title="Discover Vietnam: A Journey Through North & South Vietnam"
            price="INR.57,699/person"
            location="VIETNAM"
            duration="6 nights 7 days tour"
            image={vietnam6n7d}
          />
          <International
            to="/Vietnam9n10d"
            title="Captivating Vietnam: A Journey Through Iconic Landmarks and Hidden Gems"
            price="INR.89,699/person"
            location="VIETNAM"
            duration="9 nights 10 days tour"
            image={vietnam9n10d}
          />
          <International
            to="/Singapore4n5d"
            title="Singapore Escapes: A Journey through the Vibrant Lion City"
            price="INR.44,699/person"
            location="SINGAPORE"
            duration="4 nights 5 days tour"
            image={singapore4n5d}
          />
          <International
            to="/Singapore6n7d"
            title="Unforgettable Singapore Adventure with Luxurious 2-Night Cruise"
            price="INR.59,699/person"
            location="SINGAPORE"
            duration="6 nights 7 days tour"
            image={singapore6n7d}
          />
          <International
            to="/Singapore_Malaysia"
            title="Singapore & Malaysia Escapes: A Journey of Cultural Marvels"
            price="INR.56,999/person"
            location="SINGAPORE & MALAYSIA"
            duration="6 nights 7 days tour"
            image={SM}
          />
          <International
            to="/Malaysia"
            title="Malaysian Marvels - Kuala Lumpur, Penang & Langkawi Escape"
            price="INR.33,999/person"
            location="MALAYSIA"
            duration="6 nights 7 days tour"
            image={malaysia}
          />
          <International
            to="/Switzerland5n6d"
            title="Swiss Splendor: A Glimpse of Switzerland Escape"
            duration="5 nights 6 days tour"
            price="INR.97,999/person"
            location="SWITZERLAND"
            image={Switzerland}
          />
          <International
            to="/France-Italy"
            title="Experience the Best of Paris & Rome"
            price="INR.85,699"
            location="FRANCE & ITALY"
            duration="4 nights 5 days tour"
            image={France}
          />
          <International
            to="/Greece7n8d"
            title="Greece Odyssey: An 8-Day Escape"
            location="GREECE"
            price="INR.1,39,699/person"
            duration="7 nights 8 days tour"
            image={Greece}
          />
          <International
            to="/SriLanka6n7d"
            title="Sri Lanka a Jewel Of Indian Ocean"
            duration="6 nights 7 days tour"
            price="INR.38,699/person"
            location="SRI LANKA"
            image={SriLanka}
          />
          <International
            to="/Dubai3n4d"
            title="Dubai The City Of Wonders"
            location="DUBAI"
            price="INR.25,899/person"
            duration="3 nights 4 days tour"
            image={Dubai3n4d}
          />
          <International
            to="/Dubai5n6d"
            title="Experience Dubai: A Journey of Luxury and Wonder"
            location="DUBAI"
            price="INR.58,899/person"
            duration="5 nights 6 days tour"
            image={Dubai5n6d}
          />

          <International
            title="Nepal"
            duration="3 nights 4 days tour"
            price="INR.54,699/person"
            direct="/Nepal"
            image={nepal}
            to="/Nepal"
          />

          <International
            title="Almaty |  Heart in Mountains "
            duration="9 Days and 8 Nights"
            to="/Almaty"
            price="₹ 59,099"
            direct="/Almaty"
            image={almaty}
          />
        </div>
      </div>
    </>
  );
}
