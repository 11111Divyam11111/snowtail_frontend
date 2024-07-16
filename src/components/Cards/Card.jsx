import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import tag from "../../assets/tag.webp";
import "../../styles/Card.css";
import star from "../../assets/star.webp";
import phone from "../../assets/phone.webp";
import { Link } from "react-router-dom";
import Contact from "../Contact";
import CurrencyConverter from "../../getApi/CurrencyConverter";
import { useDispatch } from "react-redux";
import { fetchCurrencyRates } from "../../redux/slice/currencySlice";

const Card = ({
  title,
  duration,
  rating,
  cut_price,
  curr_price,
  save,
  direct,
  image,
}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);


  const numericRating = parseFloat(rating);
  

  const ratingOutOfFive = Math.round((numericRating / 10) * 10) / 10;

  return (
    <div className="lg:w-1/3 md:1/2 w-11/12 p-2 carousel-item flex flex-col relative border border-slate-100 rounded-lg">
      <div
        className="relative text-center"
        style={{ width: "100%", paddingBottom: "100%" }}
      >
        <Link to={direct}>
          <img
            loading="lazy"
            src={image}
            className="img rounded-box hover:scale-105"
            onMouseEnter={hoverHo}
            alt={title}
            width="100%"
            decoding="async"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </Link>
      </div>
      {save && (
        <div
          className={`${
            hover && "scale-105"
          } top-5 bg-color1 absolute flex flex-row md:gap-2 p-1`}
        >
          <img
            className="tag"
            src={tag}
            width={5}
            height={5}
            alt="Tag"
            loading="lazy"
          />
          <p className="save">
            <CurrencyConverter price={save} />
          </p>
        </div>
      )}

      <div className="flex flex-col pt-2 gap-y-1">
        <div className="flex flex-row justify-between">
          <p className="text-sm text-green-500">{duration}</p>
          <p className="text-sm text-green-500 flex flex-row">
            <img src={star} width={20} alt="Star" loading="lazy" />
            <span>{ratingOutOfFive}</span>
          </p>
        </div>
        <div className="light">{title}</div>
        <button className="btn text-white btn-xs w-1/3 text-xs rounded-xl discount bg-gradient-to-r from-color1 to-red-500 text-nowrap">
          MONSOON SALE!
        </button>
        <div className="flex flex-row justify-around">
          <p className="text-xs flex">
            <CurrencyConverter price={curr_price} /> <p>/person</p>
          </p>
          <p className="text-xs cut text-green-300">
            <CurrencyConverter price={cut_price} />
          </p>
          <p className="discount text-xs bg-green-100 p-1 flex gap-1">
            <p>Save</p>
            <CurrencyConverter price={save} />
          </p>
        </div>
        <div className="flex flex-row">
          <button
            className="btn btn-outline border-color1 border-2 w-1/5 "
            onClick={toggleContactForm}
          >
            <img src={phone} width={20} alt="Phone" loading="lazy" />
          </button>
          <button
            className="btn bg-color1 rounded-md text-white w-4/5"
            onClick={toggleContactForm}
          >
            Request Callback
          </button>
        </div>
      </div>
      {showContactForm && (
        <Contact
          isVisible={showContactForm}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  cut_price: PropTypes.number.isRequired,
  curr_price: PropTypes.number.isRequired,
  save: PropTypes.string.isRequired,
  direct: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
