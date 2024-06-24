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
  const [day5, setDay5] = useState(false);
  const [day6, setDay6] = useState(false);

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);

  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4 && day5 && day6;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6
            ? "Collapse All"
            : "Expand All"}
        </button>
      </div>
      <div className="accordians">
        <div className="accor join">
          <h5 className="join-item">Day 1</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay1}
              >
                Arrival in DARJEELING | Welcome to The Queen of Hills
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrival at NJP Railway Station / Bagdogra Airport. Transfer
                    to Darjeeling (7100 ft / 110 kms / 03 hrs). Arrive & Check
                    in Hotel. Evening free for leisure.
                  </li>
                  <li>Overnight stay at Hotel.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 2</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay2}
              >
                DARJEELING Sightseeing
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Early Morning at 0400 AM visit Tiger Hill, famous for
                    sunrise over Mt. Kanchendzonga. On the way back, visit and
                    return to the hotel. After breakfast, proceed for local
                    sightseeing.
                  </li>
                  <li>
                    PLACES TO VISIT: The Himalayan Mountaineering Institute, PNZ
                    Zoological Park (closed on Thursday), Tenzing Rock, Tibetans
                    Refugee Centre (closed on Sunday), Tea Garden (outer view),
                    Japanese Temple, Ghoom Monastery or Batasia Loop.
                  </li>
                  <li>Overnight stay at the hotel.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 3</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay3}
              >
                DARJEELING to PELLING
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, transfer to Pelling (6000 ft / 118 kms / 04
                    hrs). In the afternoon, proceed for a half-day local tour.
                  </li>
                  <li>
                    PLACES TO VISIT: Rimbi Waterfalls, Khecheopalri Wishing
                    Lake, and Kanchenjunga Falls.
                  </li>
                  <li>Overnight stay at the hotel.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 4</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay4}
              >
                PELLING to GANGTOK VIA NAMCHI AND CHARDHAM
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, transfer to Gangtok (5500 ft / 132 kms / 05
                    hrs) via Namchi, Samdruptse, and Chardham Temple. Gangtok,
                    the capital of Sikkim, is a beautiful and clean town.
                  </li>
                  <li>
                    Arrive at the hotel and check-in. Evening free at leisure.
                    Overnight at the Hotel.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 5</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay5}
              >
                TSANGU LAKE & BABA MANDIR
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    A day excursion to Tsangu Lake (departure at 0700 to 0730 AM
                    hrs) - situated at a height of 3,780 Mts. with an average
                    depth of 50 ft & Baba Mandir - The shrine maid in memory of
                    sepoy Harbahajan Singh.
                  </li>
                  <li>
                    Back to Gangtok. Evening free. Overnight stay at the hotel.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 6</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay6}
              >
                DEPARTURE from GANGTOK to NJP RAILWAY STATION / IXB AIRPORT
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, transfer to NJP Railway Station / IXB
                    Airport (125 kms / 04 Hrs) for your onward Journey.
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
