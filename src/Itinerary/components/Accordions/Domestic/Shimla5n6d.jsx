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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay1}
              >
                Shimla Arrival | Local Sightseeing
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrival in Shimla, transfer to hotel upon arrival. Check-in
                    at the hotel and freshen up.
                  </li>
                  <li>
                    Get ready to Visit: Christ Church, Jakhoo Temple, Kalibari
                    Temple, Lakkar Bazaar and Local Market. Back at the hotel by
                    night.
                  </li>
                  <li>Overnight stay at Shimla.</li>
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay2}
              >
                Full Day Trip to Kufri - Jakhoo Hills
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Wake-up in the morning and get mesmerised by the
                    breathtaking sunrise.
                  </li>
                  <li>
                    Post Break-fast Visit: Kufri, Green Valley, Mini Zoo, Chini
                    Bungalow, White Flower Hall, Bhimakali Temple, Indira Gandhi
                    Tourist Park.
                  </li>
                  <li>
                    Evening free to stroll in the famous shopping place of
                    Shimla town.
                  </li>
                  <li>Overnight at Shimla.</li>
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay3}
              >
                Shimla to Manali
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Wake up in the morning and have breakfast. Check out from
                    the hotel and start your journey towards Manali.
                  </li>
                  <li>
                    Enroute via Kullu and you can try adventure activities. En
                    route, Visit: Kasol Manikaran.
                  </li>
                  <li>
                    Arrive at Manali by evening and check-in at the hotel.
                    Evening free for leisure.
                  </li>
                  <li>Overnight at Manali.</li>
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay4}
              >
                Manali Local Sightseeing
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    In the morning, have a delicious breakfast and energise
                    yourself to see the beautiful Manali.
                  </li>
                  <li>
                    Enjoy the full-day excursion to Local Manali. Local Manali
                    sightseeing Visit - Hadimba Temple, Vashisht Village, etc.
                  </li>
                  <li>
                    Back at the hotel by evening. Dinner and overnight stay in
                    Manali.
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay5}
              >
                Solang Valley and Sissu (Via Atal Tunnel)
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out the hotel half day for Solang
                    Valley & Sissu via Atal Tunnel (usually in the month of
                    March we find heavy snow around Gulabo).
                  </li>
                  <li>Later back to the hotel. Overnight stay in Manali.</li>
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay6}
              >
                DEPARTURE
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, have a delicious breakfast and prepare to
                    check out from the hotel. Depart for home.
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
