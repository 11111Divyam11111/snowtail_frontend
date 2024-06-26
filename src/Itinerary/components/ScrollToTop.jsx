import React, { useState, useEffect } from "react";
import "../styles/scroll.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a href="https://web.whatsapp.com/">
        <button
          className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
          onClick={scrollToTop}
          title="Go to top"
        ></button>
      </a>
    </>
  );
};

export default ScrollToTopButton;
