import "../../../styles/accordians.css";
import { useEffect, useState } from "react";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function RajasthanAccordion() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const [day1, setDay1] = useState(false);
  const [day2, setDay2] = useState(false);
  const [day3, setDay3] = useState(false);
  const [day4, setDay4] = useState(false);

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);

  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button
          className="btn btn-md bg-light-shade mb-6"
          onClick={handleExpandAll}
        >
          {day1 && day2 && day3 && day4 ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="accordians">
        <div className="accor join">
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"
                onClick={handleDay1}
              >
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 1
                </button>
                MUMBAI - LONAVALA
              </div>
              {day1 ? (
                <p onClick={handleDay1} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay1} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Meet our representative at Mumbai railway station/Airport,
                    later depart for Lonavala. Transfer to hotel upon arrival.
                    Day at Leisure. Enjoy Resort Activities, Go on nearby hikes
                    etc. 
                  </li>
                  <li>
                  Overnight stay in Lonavala.
                  </li>
                 
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"
                onClick={handleDay2}
              >
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 2
                </button>
                THEME PARK IMAGICA - LONAVALA
              </div>
              {day2 ? (
                <p onClick={handleDay2} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay2} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, depart for Imagica Theme Park. Upon arrival, a full day at the theme park.  After the visit, drive to Lonavala. Upon arrival, transfer to the hotel.
                  </li>
                  <li>
                  Overnight stay in a hotel.
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"
                onClick={handleDay3}
              >
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 3
                </button>
                AQUA  IMAGICA - LONAVALA
              </div>
              {day3 ? (
                <p onClick={handleDay3} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay3} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast depart for Aqua Imagica Water Park. Upon arrival, a full day for Water Park. After the visit, drive back to the hotel visiting Tiger Point en route. 
                  </li>
                  <li>
                  Overnight stay in a hotel.
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"
                onClick={handleDay4}
              >
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 4
                </button>
                LONAVALA - Mumbai
              </div>
              {day4 ? (
                <p onClick={handleDay4} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay4} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, visit Monkey Point & Khandala Point. After the visit, drive back to Mumbai Railway station/Airport.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

       
      </div>
    </div>
  );
}
