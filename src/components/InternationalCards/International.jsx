import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import a from "../../styles/International.module.css";
import CurrencyConverter from "../../getApi/CurrencyConverter";
import { useDispatch } from "react-redux";
import { fetchCurrencyRates } from "../../redux/slice/currencySlice";

const International = ({ to, title, location, price, duration, image }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);
  return (
    <div className={`${a.cardContainer} shadow-lg rounded-lg overflow-hidden`}>
      <div className="md:flex">
        <figure className={`${a.imageContainer} md:w-1/2`}>
          <img
            src={image}
            loading="lazy"
            alt="image"
            className={`${a.img} w-full h-full object-cover`}
          />
        </figure>
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <ul className="flex text-xs text-green-500 justify-between mb-5">
            <li className={a.disc}>{duration}</li>
            <li className={a.disc}>International Tour</li>
          </ul>
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{location}</p>
            <div className="flex space-x-2 mb-4">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">All meals</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">3 star resort</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">Major sightseeing</span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Price</h3>
              <h3 className="text-2xl text-color1">
              <CurrencyConverter price={price} />
              </h3>
            </div>
          </div>
          <div className="mt-4">
            <Link to={to}>
              <button className="btn bg-color1 text-white text-nowrap w-full py-2 rounded-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

International.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};

export default International;
