import { Suspense, lazy } from "react";
import International from "./International";
const LazyComponent = lazy(() => import("../Navbar"));
import a from "../../styles/International.module.css";
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
          <h1 className="text-4xl font-semibold text-center mb-4">
            International Tour Adventures
          </h1>

          <International
            to="/Thailand5d4n"
            title="Explore Bangkok & Pattaya: A Vibrant Thai Adventure"
            price={19699}
            location="PATTAYA & BANGKOK"
            duration="4 nights 5 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/thailand4n5d'
          />

          <International
            to="/Thailand6d5n"
            title="Experience Best of Southern Thailand: Phuket and Krabi"
            price={29699}
            location="PHUKET & KRABI"
            duration="5 nights 6 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/hhajk8pwfwtsd2vhgcsc'
          />

          <International
            to="/Thailand9d8n"
            title="Experience Jewels of Thailand"
            price={59099}
            location="PHUKET/KRABI/PATTAYA/BANGKOK"
            duration="8 nights 9 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/thailand8n9d'
          />

          <International
            to="/Bali8d7n"
            title="Enchanting Bali Escape with Gili Island"
            price={54699}
            location="BALI"
            duration="7 nights 8 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/xlknx6r9srnj8hrcv80n'
          />
          <International
            to="/Bali6d5n"
            title="Luxurious 6-Day Bali Honeymoon Escape: Kuta and Ubud Delights"
            price={34699}
            location="BALI"
            duration="5 nights 6 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ajv3iepuyrelzskbgpir'
          />

          <International
            to="/Vietnam4d5n"
            title="Escape to North Vietnam: A Journey of Cultural Marvels and Natural Wonders"
            price={37699}
            location="VIETNAM"
            duration="4 nights 5 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/cnfztqxnhddamzjxj6vk'
          />

          <International
            to="/Vietnam6n7d"
            title="Discover Vietnam: A Journey Through North & South Vietnam"
            price={57699}
            location="VIETNAM"
            duration="6 nights 7 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/srkqs6s7h6tgvqgnegh9'
          />
          <International
            to="/Vietnam9n10d"
            title="Captivating Vietnam: A Journey Through Iconic Landmarks and Hidden Gems"
            price={89699}
            location="VIETNAM"
            duration="9 nights 10 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/zynzypoqjbziyrzuswkh'
          />
          <International
            to="/Singapore4n5d"
            title="Singapore Escapes: A Journey through the Vibrant Lion City"
            price={44699}
            location="SINGAPORE"
            duration="4 nights 5 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/dicuyywnzshvd48cqssh'
          />
          <International
            to="/Singapore6n7d"
            title="Unforgettable Singapore Adventure with Luxurious 2-Night Cruise"
            price={59699}
            location="SINGAPORE"
            duration="6 nights 7 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/dionqfxfgjjefuufkybb'
          />
          <International
            to="/Singapore_Malaysia"
            title="Singapore & Malaysia Escapes: A Journey of Cultural Marvels"
            price={56999}
            location="SINGAPORE & MALAYSIA"
            duration="6 nights 7 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/bgzs32ixxddrhw7q4n5q'
          />
          <International
            to="/Malaysia"
            title="Malaysian Marvels - Kuala Lumpur, Penang & Langkawi Escape"
            price={33999}
            location="MALAYSIA"
            duration="6 nights 7 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/bthwqpanhz9hxx26gumo'
          />
          <International
            to="/Switzerland5n6d"
            title="Swiss Splendor: A Glimpse of Switzerland Escape"
            duration="5 nights 6 days tour"
            price={97999}
            location="SWITZERLAND"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/im047rizfr16zpjs4ffx'
          />
          <International
            to="/France-Italy"
            title="Experience the Best of Paris & Rome"
            price={85699}
            location="FRANCE & ITALY"
            duration="4 nights 5 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/e12rwj5elsq3trtqmlq5'
          />
          <International
            to="/Greece7n8d"
            title="Greece Odyssey: An 8-Day Escape"
            location="GREECE"
            price={139699}
            duration="7 nights 8 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/qqaz26pebrcjum7ddwfl'
          />
          <International
            to="/SriLanka6n7d"
            title="Sri Lanka a Jewel Of Indian Ocean"
            duration="6 nights 7 days tour"
            price={38699}
            location="SRI LANKA"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/hl7ngkhtiha4ynq86ojz'
          />
          <International
            to="/Dubai3n4d"
            title="Dubai The City Of Wonders"
            location="DUBAI"
            price={25899}
            duration="3 nights 4 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/j7c8e9kld9mfj7bbxqmj'
          />
          <International
            to="/Dubai5n6d"
            title="Experience Dubai: A Journey of Luxury and Wonder"
            location="DUBAI"
            price={58899}
            duration="5 nights 6 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/suoctcvh0fvuysxd5tgn'
          />

          <International
            title="Nepal"
            duration="3 nights 4 days tour"
            price={54699}
            direct="/Nepal"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/jacxgiv1rdbxkv0tgpqy'
            to="/Nepal"
          />

          <International
            title="Almaty |  Heart in Mountains "
            duration="9 Days and 8 Nights"
            to="/Almaty"
            price={59099}
            direct="/Almaty"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/dmco3dmhjdvkn0auoaf8'
          />

          <International
            to="/Australia7n6d"
            title="Best of Australia"
            price={99999}
            location="Sydney"
            duration="7 nights 6 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/zynzypoqjbziyrzuswkh'
          />

          <International
            to="/Japan"
            title="Best of Japan | From Ancient Shrines to Futuristic Skylines"
            price={99999}
            location="Kyoto"
            duration="9 nights 10 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/zynzypoqjbziyrzuswkh'
          />
        </div>
      </div>
    </>
  );
}
