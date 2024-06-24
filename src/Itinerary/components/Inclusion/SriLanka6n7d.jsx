import { useEffect } from "react";
import dot from "../../assets/dot.svg";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Inclusion() {
    useEffect(() => {
        Aos.init({
          duration: 1200,
        });
      }, []);
  return (
    <>
        <div className={a.left6} data-aos="zoom-in">
          <h3>Included/Excluded</h3>
          <ul>
            <h4>Inclusions</h4>
            <li>
              <img src={dot} width={5} alt="dot" /> Transfers :Pvt Airport Pick up and drop as per your flight timings & Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary on SIC basis.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Accommodation : 3 nights in Dubai.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals : Breakfast from Day 2 to Day 4.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Sightseeing : Dhow Cruise Creek, Miracle Garden, Burj Khalifa, Dubai City Tour & Desert Safari.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Visa assistance: It will be provided (Charges are not included)
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Guide : Professional driver cum guide to help you explore this beautiful city
            </li>

          </ul>
          <ul>
            <h4>Exclusions</h4>
            <li>
              <img src={dot} width={5} alt="dot" /> Cost of Emergency , Covid Report , Insurance And Other Covid Related Expenses
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Any Personal expenses.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> GST & (TCS - Claimable after the tour)
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Any Airfare
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Lunch / Any transfer / Meals that are not mentioned in the itinerary
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Anything not mentioned in the inclusions list above
            </li>
          </ul>
        </div>
    </>
  )
}
